# 🐳 Docker & Docker Compose — Week 4 DevOps Project

## 📌 Project Overview

This project demonstrates how to build and deploy a multi-container web application using Docker and Docker Compose.

The application contains an Nginx frontend, a Node.js backend, a MySQL database, and a Redis service.

## 🏗️ Architecture

```text
User / Browser
      |
      v
Nginx — Port 8080
      |
      v
Node.js Backend — Port 3000
      |
      +------ MySQL Database
      |
      +------ Redis Service
```

*Architecture illustrates the intended services; verify the exact connections in `compose.yaml`.*

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Docker | Builds images and runs containers |
| Docker Compose | Manages multiple services |
| Nginx | Serves the web frontend |
| Node.js / Express | Backend API |
| MySQL | Relational database |
| Redis | In-memory data service |
| Git / GitHub | Version control and source hosting |

## 📂 Project Structure

```text
docker-week4-project/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── screenshots/
├── Dockerfile
├── compose.yaml
└── README.md
```

## 🚀 How to Run

```bash
docker compose up --build -d
docker compose ps
```

Open http://localhost:8080 in your browser.

## 📸 Project Screenshots

### 1. Running Web Application

![Running Website](screenshots/Screenshot%20%E2%80%94%20Running%20website.png)

### 2. Running Docker Containers

![Running Docker Containers]("\\wsl.localhost\Ubuntu\home\shubh\docker-week4-project\screenshots\Screenshot — Running containers.png")

### 3. Docker Images

![Docker Images]("\\wsl.localhost\Ubuntu\home\shubh\docker-week4-project\screenshots\Screenshot — Docker images.png")

### 4. Backend Health Check

![Backend Health Check]("\\wsl.localhost\Ubuntu\home\shubh\docker-week4-project\screenshots\Screenshot — Backend health.png")

### 5. MySQL Database Connection

![MySQL Database Connection]("\\wsl.localhost\Ubuntu\home\shubh\docker-week4-project\screenshots\Screenshot — Database connection.png")
### 6. Docker Hub

![Docker Hub]("\\wsl.localhost\Ubuntu\home\shubh\docker-week4-project\screenshots\Screenshot — Docker Hub repository.png")

## ✅ Results

- Started the application using Docker Compose.
- Verified the running containers.
- Tested the backend health endpoint.
- Verified database connectivity.
- Practiced Docker images, networking, and persistent storage.

## 👨‍💻 Author

**Shubham Mohare**

GitHub: https://github.com/ShubhMohare

Project: https://github.com/ShubhMohare/week4-docker-internship

