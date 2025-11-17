SkillSync
A Collaborative Learning & Mentorship Platform

SkillSync is a full-stack web application designed to help learners find mentors, set and track learning goals, and collaborate on projects. It combines authentication, role-based features, and real-time data handling to deliver a complete learning-management experience.

Features

Authentication and Authorization

Secure JWT-based login and signup

Password hashing using bcrypt

Role-based access (User, Mentor, Admin)

Protected routes through middleware

User Features

Create, edit, and delete learning goals

Discover mentors through filtering and searching

Track progress and maintain a learning workflow

Manage personal profile details

Platform Features

Fully deployed frontend and backend

Cloud database using MongoDB Atlas

Axios-based communication between client and server

Modern UI with React and TailwindCSS

Tech Stack

Frontend

React.js

React Router

Axios

TailwindCSS

Vite

Backend

Node.js

Express.js

CORS

JSON Web Token (JWT)

bcrypt.js

Database

MongoDB Atlas (NoSQL cloud-hosted instance)

Deployment

Frontend on Vercel

Backend on Render

Database on MongoDB Atlas

System Architecture

Frontend (React + Axios)
↓
Backend API (Node + Express)
↓
Database (MongoDB Atlas)

Project Structure

skillsync/

client/ (React frontend)

src/

pages/ (Login, Signup, Dashboard, etc.)

App.jsx

server/ (Express backend)

routes/

models/

middleware/

config/

index.js

Authentication Flow

User logs in or signs up.

Backend verifies credentials and returns a JWT token.

Token is stored in localStorage on the frontend.

For protected API routes, frontend sends:
Authorization: Bearer <token>

Backend middleware validates the token and allows or denies access.

Backend
cd server
npm install
npm run dev

Frontend
cd client
npm install
npm run dev

Open the app in the browser at:
http://localhost:5173

Deployment Guide

Frontend (Vercel)

Uses Vite

Build command: npm run build

Output directory: dist

Environment variables must begin with VITE_

Backend (Render)

Build command: npm install

Start command: node index.js

Add all environment variables in Render dashboard

Database (MongoDB Atlas)

Create admin user with read/write access

Add IP address or allow from anywhere (0.0.0.0/0)

Use connection string inside .env

API Overview

POST /api/auth/signup
Register a new user.

POST /api/auth/login
Authenticate user and return a JWT token.

GET /api/mentors
Fetch mentors (protected).

POST /api/goals
Create a new learning goal (protected).

PUT /api/goals/:id
Update an existing goal (protected).

DELETE /api/sessions/:id
Admin-only route to delete a session.

Author
Created by Vachan Gupta
BTech CSE (AI & ML)
Passionate about full-stack development and machine learning.

Hosted url:
https://skill-sync-lilac.vercel.app/