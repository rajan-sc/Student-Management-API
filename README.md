# 📚 Student Management API

A RESTful API built with **Node.js**, **Express**, **Sequelize**, and **MySQL** for managing student records.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- MySQL running locally

### Installation

```bash
# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following:

```env
SQL_PASS=your_mysql_password
SQL_DB=student_management
```

### Run the Server

```bash
node app.js
```

Server starts on **http://localhost:3000**

---

## 📁 Project Structure

```
Student Management API/
├── app.js                  # Entry point
├── .env                    # Environment variables
├── package.json
├── controller/
│   └── studentController.js  # Route handler logic
├── models/
│   └── students.js           # Sequelize Student model
├── routes/
│   └── studentsRoute.js      # API route definitions
└── utils/
    └── dbConnection.js       # Sequelize DB connection
```

---

## 🛠️ API Endpoints

Base URL: `http://localhost:3000/students`

| Method | Endpoint        | Description            |
|--------|-----------------|------------------------|
| POST   | `/add-entries`  | Add a new student      |
| GET    | `/all`          | Get all students       |
| GET    | `/:id`          | Get a student by ID    |
| PUT    | `/:id`          | Update a student by ID |
| DELETE | `/:id`          | Delete a student by ID |

---

### Request Body (POST / PUT)

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20
}
```

### Example Responses

**POST `/students/add-entries`** — `201 Created`
```json
{
  "message": "Student entries added successfully",
  "data": { "id": 1, "name": "John Doe", "email": "john@example.com", "age": 20 }
}
```

**GET `/:id`** — `404 Not Found` (if student doesn't exist)
```json
{
  "message": "Student not found"
}
```

---

## 🧰 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express v5
- **ORM**: Sequelize v6
- **Database**: MySQL (via mysql2)
- **Config**: dotenv
