const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  createUser,
  getUserByEmail,
  getUser,
  getUserById,
} = require("../db/users");
const { verifyToken } = require("./utils");
require("dotenv").config();

// POST /api/users/register
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const queriedUser = await getUserByEmail(email);
      if (queriedUser) {
        res.status(401);
        next({
          name: "UserExistsError",
          message: "Email is already in use.",
        });
      } else if (password.length < 8) {
        res.status(401);
        next({
          name: "PasswordLengthError",
          message: "Password Too Short!",
        });
      } else {
        const user = await createUser({
          name,
          email,
          password,
        });
        if (!user) {
          next({
            name: "UserCreationError",
            message: "There was a problem registering you. Please try again.",
          });
        } else {
          res.send({
            user,
            status: {
              success: true,
              message: "Thank you for signing up. Welcome to territory.io!",
            },
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }
);

// POST /api/users/login
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      next({
        name: "MissingCredentialsError",
        message: "Please supply both an email and a password",
        status: {
          success: false,
          message:
            "Login has failed, please check email and password before trying again.",
        },
      });
    }

    try {
      const user = await getUser({ email, password });
      if (!user) {
        next({
          name: "IncorrectCredentialsError",
          message: "Email or password is incorrect",
        });
      } else {
        const token = jwt.sign(
          { id: user.id, email: user.email, name: user.name },
          process.env.JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({
          user,
          status: {
            success: true,
            message: "You have successfully logged in.",
          },
          userToken: token,
          user_role: user.role_name,
        });
      }
    } catch (error) {
      next(error);
    }
  }
);

//GET user by id
import type { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user: { id: number; [key: string]: any };
}

router.get(
  "/account",
  verifyToken,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const { id } = req.user;
    try {
      const userAccount = await getUserById(id);
      res.send({
        userAccount,
        status: {
          success: true,
          message: "Account is authenticated.",
        },
        user: req.user,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
