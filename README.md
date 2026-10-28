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
### 1. Docker Hub Repositories
![Docker Hub Repositories](screenshots/Docker%20Hub%20repositories.png)

### 2. Implementation Summary
![Implementation Summary](screenshots/Screenshot%20%20Implementation%20Summary.png)

### 3. Backend Health
![Backend Health](screenshots/Screenshot%20%E2%80%94%20Backend%20health.png)

### 4. Database Connection
![Database Connection](screenshots/Screenshot%20%E2%80%94%20Database%20connection.png)

### 5. Docker Hub Repository
![Docker Hub Repository](screenshots/Screenshot%20%E2%80%94%20Docker%20Hub%20repository.png)

### 6. Docker Images
![Docker Images](screenshots/Screenshot%20%E2%80%94%20Docker%20images.png)

### 7. Running Containers
![Running Containers](screenshots/Screenshot%20%E2%80%94%20Running%20containers.png)

### 8. Running Website
![Running Website](screenshots/Screenshot%20%E2%80%94%20Running%20website.png)

### 9. Pulling Images from Docker Hub
![Pulling Images from Docker Hub](screenshots/pulling%20images%20from%20Docker%20Hub.png)

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

