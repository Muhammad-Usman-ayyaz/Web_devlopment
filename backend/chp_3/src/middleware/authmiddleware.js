import jwt from "jsonwebtoken";
import db from "../db.js";
import { Router } from "express";

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send("Invalid token.");
    }
    // Store user ID in request for use in routes
    req.userId = decoded.id;
    next();
  });
}

export default authMiddleware;
