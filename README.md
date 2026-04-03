#  Figma to React Assignment

#  Overview

This project is a pixel-perfect implementation of the provided Figma design using React (Vite). The goal was to convert the design into a fully functional, responsive web application with clean code and reusable components.

---

# Tech Stack

* React (Vite)
* CSS / Tailwind CSS
* Docker
* Nginx (for serving production build)

---

# Features

* Fully responsive (Mobile, Tablet, Desktop)
* Clean and reusable component structure
* Accurate UI matching Figma design
* Proper spacing, typography, and layout
* Hover interactions for better user experience

---

# Project Structure

project/
│
├── src/
│   ├── components/
│   ├── assets/
│   └── pages/
│
├── public/
├── Dockerfile
├── nginx.conf
├── package.json
└── README.md

---

# Docker Setup 

# Build Docker Image

docker build -t assignment-react .

# Run Docker Container

docker run -p 3000:80 assignment-react

# Open in Browser

http://localhost:3000

---

# Local Development (Optional)

npm install
npm run dev

---

 # Notes 
 
* The application strictly follows the provided Figma design
* Focus was on responsiveness, UI accuracy, and clean code
* Docker is used to ensure easy setup and consistent environment

---

 Author-
Akarsh Singh Sisoudia
