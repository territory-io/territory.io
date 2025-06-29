import client from "./client";

const { createUser } = require("./");
// import client from "./client";

// drop tables
async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    await client.query(`
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS groups CASCADE;
    DROP TABLE IF EXISTS group_members CASCADE;
    DROP TABLE IF EXISTS pois CASCADE;
    DROP TABLE IF EXISTS territories CASCADE;
    `);
  } catch (error) {
    throw error;
  }
}

// build tables
async function createTables() {
  try {
    console.log("Building All Tables...");
    // USERS TABLE
    await client.query(
      `
      CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        );
        `
    );
    // GROUPS TABLE
    await client.query(`CREATE TABLE groups (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            owner_id UUID REFERENCES users(id),
            );
        `);
    // GROUP_MEMBERS TABLE
    await client.query(`CREATE TABLE group_members(
          group_id UUID REFERENCES groups(id) KEY,
          user_id UUID REFERENCES users(id),
          role VARCHAR(255) DEFAULT 'member' NOT NULL,`);
    // POIS TABLE
    await client.query(`CREATE TABLE pois (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          group_id UUID REFERENCES groups(id) KEY,
          added_by UUID REFERENCES users(id),
          source VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          geom GEOMETRY(Point, 4326) NOT NULL, );`);
    // TERRITORIES TABLE
    await client.query(`CREATE TABLE order_items(
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          group_id UUID REFERENCES groups(id) KEY, 
          assigned_to UUID REFERENCES users(id),
          name VARCHAR(255) NOT NULL,
          color VARCHAR(255) NOT NULL,
          polygon GEOMETRY(Polygon, 4326) NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          );`);
  } catch (error) {
    throw error;
  }
}

// create initial data

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const createUsersArray = [
      {
        email: "mychaelm427@gmail.com",
        name: "Mychael Magnuson",
        password: "MarthaStewart",
      },
      {
        email: "johnsmith12@gmail.com",
        name: "John Smith",
        password: "GoCowboys22",
      },
    ];

    const users = await Promise.all(createUsersArray.map(createUser));

    console.log("Users created: ");
    console.log(users);
    console.log("Finished creating users.");
  } catch (error) {
    console.log("Error creating users.");
    throw error;
  }
}

// build all tables and create initial data
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
export default rebuildDB;
