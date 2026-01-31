# 📦 E-Commerce Backend API

A production-oriented **E-Commerce backend API** built with **Node.js, Express, and MongoDB**, designed using clean backend engineering principles rather than tutorial shortcuts.

This project focuses on **architecture, data integrity, and scalability**, reflecting real-world backend system design.

---

## 🧭 Overview

This backend system powers core e-commerce functionality such as products, inventory, carts, orders, and payments.

The objective is not just to make APIs work, but to **design a backend that can be reasoned about, extended, deployed, and maintained** in a real production environment.

---

## 🎯 Goals of This Project

- Practice **production-grade backend architecture**
- Apply **MVC + Service–Repository pattern**
- Enforce **business rules at the correct layer**
- Build a backend suitable for real deployment (Render-ready)
- Improve clarity, discipline, and backend reasoning skills

---

## 🏗️ Architecture

The project follows a strict layered architecture:


### Architectural Principles

- Controllers never access the database directly
- Repositories contain no business logic
- Services enforce all business rules
- Routes only map endpoints to controllers
- Clear separation of concerns across all layers

---

## 🧩 Tech Stack

- **Node.js** (ES6 Modules)
- **Express.js**
- **MongoDB & Mongoose**
- **Express-Session**
- **Connect-Mongo**
- **Thunder Client** (API testing)
- **MongoDB Compass** (database inspection)

---

## 🔐 Authentication Strategy

- Session-based authentication
- Server-managed sessions stored in MongoDB
- Role-based access control (RBAC) via middleware
- Designed for server-oriented, backend-heavy systems

---

## 📦 Core Features

### 🛍️ Product Management
- Create and manage products
- Active/inactive product visibility
- Automatic inventory creation per product

### 📊 Inventory Management
- Stock tracking per product
- Inventory validation before order placement
- Prevention of negative stock

### 🛒 Cart System
- Per-user cart
- Quantity merging for duplicate products
- Cart cleared after order placement

### 📦 Order Processing
- Deterministic order creation
- Inventory reduced before order confirmation
- Immutable order records

### 💳 Payment Flow
- Payment state machine:
  - `PENDING`
  - `SUCCESS`
  - `FAILED`
- Webhook-style confirmation endpoints
- Decoupled from order creation logic

---

## 📁 Folder Structure

src/
├── app.js
├── server.js
├── controllers/
├── services/
├── repositories/
├── routes/
├── models/
├── middlewares/
├── config/
└── utils/


---

## 🧪 Testing

- APIs tested using **Thunder Client**
- Flow-based testing (not just isolated endpoints)
- Manual database inspection using MongoDB Compass

---

## 🚀 Running the Project Locally

### Install dependencies
```bash
npm install



