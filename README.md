# 💸 PayZap – A Simple Payment Simulator

**PayZap** is a lightweight MERN stack-based payment simulation platform that lets users sign up, sign in, manage profiles, and simulate sending or receiving payments — all in a secure, user-friendly environment.

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
## Environment Notes
- VITE_BACKEND_URL is used by the frontend to connect to your backend API.
- JWT_SECRET is used to sign/verify JSON Web Tokens in the backend.
- For production, make sure to store secrets securely using environment variables or secret managers.
## Docker
Start the project with Docker compose:
```bash
cd ..
docker compose up
```

