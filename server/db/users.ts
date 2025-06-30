import client from "./client";
import bcrypt from "bcrypt";
const SALT_COUNT = 10;

// CREATE/POST /api/users/register create new account
async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
      ON CONFLICT (email) DO NOTHING RETURNING id, name
      `,
      [name, email, hashedPassword]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email: string) {
  // first get the user
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE email = $1;
    `,
      [email]
    );
    // if it doesn't exist, return null
    if (!rows || !rows.length) return null;
    // if it does:
    // delete the 'password' key from the returned object
    const [user] = rows;
    // delete user.password;
    return user;
  } catch (error) {
    console.error(error);
  }
}

// POST /api/users/login log in to an existing user account
async function getUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const user = await getUserByEmail(email);
    if (!user) return null;
    const hashedPassword = user.password;
    const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    if (!passwordsMatch) return null;
    const userCopy = { ...user };
    delete userCopy.password;
    return userCopy;
  } catch (error) {
    throw error;
  }
}
// GET /api/users/me view logged in user account
async function getUserById(userId: number) {
  try {
    const {
      rows: [user],
    } = await client.query(`SELECT * FROM users WHERE id = $1;`, [userId]);
    if (!user) return null;
    const userCopy = { ...user };
    delete userCopy.password;
    return userCopy;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserByEmail,
  getUser,
  getUserById,
};
