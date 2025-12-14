# 🍬 Sweet Shop Management System
###   👨‍💻 Author Arnav Jain

A full-stack Sweet Shop Management System that enables users to browse and purchase sweets while allowing administrators to manage inventory securely. The project follows clean architecture, REST principles, authentication, authorization, and Test-Driven Development (TDD).

---
# Project link: [Click Here](https://sweetshop-ajfive.vercel.app/)

## 📌 Project Overview

This system is designed to:
- Manage sweets inventory efficiently
- Prevent invalid operations such as negative stock
- Provide role-based access (Admin / User)
- Ensure correctness through automated testing

---

## 🚀 Features

### 👤 Authentication & Authorization
- User registration & login
- JWT-based authentication
- Role-based access control

### 🍭 Sweet Management
- Add sweets (Admin only)
- View all sweets
- Search sweets
- Delete sweets (Admin only)

### 📦 Inventory Control
- Purchase sweets (stock decreases safely)
- Prevents negative inventory
- Restock sweets (Admin only)

### 🧪 Testing (TDD)
- Unit & integration tests
- Inventory edge-case validation
- Auth and authorization coverage
- All tests passing ✔

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Jest + Supertest

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Tailwind CSS

---

## 📂 Backend Folder Structure
![alt text](image.png)

## 🌐 API Endpoints
Auth

- POST /api/auth/register
- POST /api/auth/login

Sweets

- GET /api/sweets
- POST /api/sweets (Admin)
- DELETE /api/sweets/:id (Admin)

Inventory

- POST /api/sweets/:id/purchase
- POST /api/sweets/:id/restock (Admin)

### 1️⃣ Backend Setup

```bash
cd backend
npm install

```
## Create a .env file: 
```
DATABASE_URL=postgresql://user:password@localhost:5432/sweetshop
JWT_SECRET=your_secret_key
PORT=4000
```
## Run migrations and start server:

```bash
Copy code
npx prisma migrate dev
npm run dev
```

## 2️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Set API URL in .env:
```
VITE_API_URL=http://localhost:4000/api
```

## 🧪 Test Report
### Testing Tools
- Jest
- Supertest

Test Coverage Module	Status

Authentication	✅ Pass

Sweets API	✅ Pass

Inventory Rules	✅ Pass

Test Execution
```bash
npm test

 ✅PASS  src/tests/sweets.test.js
 ✅PASS  src/tests/auth.test.js
 ✅PASS  src/tests/inventory.test.js

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
```

## 🤖 My AI Usage

### AI Tools Used
- ChatGPT (OpenAI)

### How I Used AI
- To brainstorm API endpoint structure and backend architecture  
- To understand Prisma ORM behavior and error messages  
- To debug authentication and authorization issues  
- To draft Jest + Supertest test cases and refine them  
- To review frontend routing and component structure  
- To improve README documentation clarity  

### Reflection on AI Impact
AI served as a **developer assistant**, not a code replacement. It accelerated debugging, clarified complex errors, and helped structure tests logically. All AI-generated suggestions were reviewed, modified, and implemented manually, ensuring full understanding and ownership of the codebase. The workflow became faster, more structured, and less error-prone.


