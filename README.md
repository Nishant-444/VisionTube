# 🎥 VisionTube - Backend

VisionTube is a backend-only video streaming and social interaction platform, offering RESTful APIs to support features such as user management, video uploads, playlists, likes, comments, subscriptions, and more. Built with Node.js and Express, it's designed to serve as the backend for a full-stack or microservices-based YouTube clone.

---

## 📑 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 📌 Introduction

VisionTube's backend is designed for scalability and modularity, supporting video-centric social features. It integrates with MongoDB for storage and Cloudinary for media hosting. Authentication is implemented using JWT.

---

## ✨ Features

- 🔐 JWT-based Authentication & Authorization
- 🎞️ Video Upload, View, Edit, Delete
- 📃 Playlist Creation and Management
- ❤️ Like/Dislike Mechanism
- 💬 Comments with Moderation Support
- 🔔 Subscriptions to Other Users
- 📊 Dashboard Stats and Health Checks
- ☁️ Cloudinary Integration for Media Storage
- ⚙️ Middleware for Auth, Errors, and File Uploads

---

## 📁 Project Structure

```
src/
├── controllers/        # Route logic (e.g., user, video, playlist)
├── db/                 # Database connection (MongoDB)
├── middlewares/        # Auth, multer, error handling
├── models/             # Mongoose schemas
├── routes/             # Express route declarations
├── utils/              # API helpers and error handlers
├── cloudinary.js       # Cloudinary configuration
├── app.js              # Express app setup
└── index.js            # Entry point
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Nishant-444/visiontube.git
cd visiontube

# Install dependencies
npm install
```

---

## 🚀 Usage

```bash
# Start the server
npm start

# For development
npm run dev
```

API will be available at: `http://localhost:<PORT>`

---

## 📡 API Overview

APIs are organized by modules in the `routes/` and `controllers/` directories:

- `/api/users`
- `/api/videos`
- `/api/comments`
- `/api/playlists`
- `/api/subscriptions`
- `/api/likes`
- `/api/dashboard`
- `/api/healthcheck`

> You can use tools like Postman or Swagger to explore endpoints.

---

## ⚙️ Configuration

Rename `.env.sample` to `.env` and update the environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
```

---

## 📦 Dependencies

Some key dependencies include:

- `express`
- `mongoose`
- `dotenv`
- `jsonwebtoken`
- `cloudinary`
- `multer`
- `cors`
- `bcrypt`
- `morgan`

---

## 🧰 Troubleshooting

- Ensure MongoDB is running and accessible.
- Check Cloudinary credentials.
- Make sure required env vars are set.
- Use proper headers when calling protected APIs.

---

## 👥 Contributors

- [Nishant](#https://github.com/Nishant-444) – Backend Developer

---

## 📄 License

This project is licensed under the MIT License.
