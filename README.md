# 💸 PayZap – A Simple Payment Simulator

**PayZap** is a lightweight MERN stack-based payment simulation platform that lets users sign up, sign in, manage profiles, and simulate sending or receiving payments — all in a secure, user-friendly environment.
Check it out at [http://13.51.70.83:5173](http://13.51.70.83:5173).
## Project Description
**PayZap** is a full-stack payment simulator built using the MERN stack. It features secure user authentication, transaction simulation, and a responsive user interface inspired by modern fintech platforms. 
To ensure scalability and high availability, the application is **containerized** using **Docker** and deployed on an **AWS EC2 instance**.The frontend and backend services are set up using **Docker Compose**.
A key feature of the project is the use of **NGINX as a load balancer** for the backend.

## 🚀 Features
- **User Authentication** (JWT-based)
- **Profile Management**
- **Simulated Transactions** (Send/Receive Money)
- **NGINX Load Balancing & Dockerized Deployment**
- **MongoDB for persistent data storage**
- **Responsive UI built with React + TailwindCSS**

## 🛠️ Tech Stack
- React
- Tailwind CSS
- Node.Js
- MongoDB
- Docker
- NGINX
- EC2
## Local Set Up
Clone the project:
```bash
git clone https://github.com/avirup-ghosal/PayZap.git
```
Setting Environment Variables:
```bash
cd PayZap
cd frontend
```
Create a env file:
```bash
touch .env
```
Add the following line to it:
```env
VITE_BACKEND_URL=http://localhost:3000
```
Go to the backend directory:
```bash
cd ../backend
```
Create a file named config.js:
```bash
touch config.js
```
Add your secret inside it:
```js
// backend1/config.js
module.exports = {
  JWT_SECRET: "Your-Secret"
};
```
## 🐳 Docker Setup
Start the project with Docker compose:
```bash
cd ..
docker compose up
```
## Environment Notes
- VITE_BACKEND_URL is used by the frontend to connect to your backend API.
- JWT_SECRET is used to sign/verify JSON Web Tokens in the backend.
- For production, make sure to store secrets securely using environment variables or secret managers.

## NGINX Config file
Write this in your nginx.conf file located at (/etc/nginx/nginx.conf):

```text
http {
    upstream backend {
        least_conn;  # or use round-robin (default) or ip_hash
        server 127.0.0.1:3000 max_fails=3 fail_timeout=10s;
        server 127.0.0.1:3001 max_fails=3 fail_timeout=10s;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://backend;

            # Recommended headers
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            # Timeouts
            proxy_connect_timeout 5s;
            proxy_send_timeout 10s;
            proxy_read_timeout 10s;
        }
    }
}

events {}
```
Start NGINX with:
```bash
sudo systemctl restart nginx
```
