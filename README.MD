# Notepad Application

## Description
This is a simple **Notepad Application** built with **Flask (Backend)** and **React (Frontend)** that allows users to **Create, Read, Update, and Delete (CRUD) notes**. The backend is powered by **MongoDB**, while the frontend is styled using **Tailwind CSS**.

---

## 🏗️ Tech Stack
### 🔹 Backend (Flask & MongoDB)
- Flask (Python)
- Flask-CORS
- PyMongo (MongoDB)
- Dotenv (for environment variables)

### 🔹 Frontend (React & Vite)
- React 19
- React Router DOM
- Tailwind CSS
- Vite (for fast development)

---

## 🚀 Installation Guide
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/notepad-app.git
cd notepad-app
```

### 2️⃣ Backend Setup (Flask)
#### Install Dependencies
```sh
cd backend
pip install -r requirements.txt
```

#### Run Flask Server
```sh
python app.py
```

> **Note:** Ensure MongoDB is running before starting the backend.

### 3️⃣ Frontend Setup (React & Vite)
#### Install Dependencies
```sh
cd frontend
npm install
```

#### Start React App
```sh
npm run dev
```

---

## 📜 API Endpoints
### **📝 Notes CRUD Operations**
| Method   | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| `GET`    | `/getNotes`           | Get all notes            |
| `GET`    | `/getNotes/<id>`      | Get a single note        |
| `POST`   | `/addNote`            | Create a new note        |
| `POST`   | `/updateNote/<id>`    | Update a note            |
| `DELETE` | `/deleteNote/<id>`    | Delete a note            |

---

## 📂 Project Structure
```
notepad-app/
│── backend/
│   ├── server.py         # Flask server backend
│   ├── connection.py     # MongoDB connection
│   ├── views.py          # Methods for notes
│   ├── requirements.txt  # Backend dependencies
│
│── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page-level components
│   │   ├── App.js       # Main React app file
│   │   ├── main.jsx     # Vite entry file
│   ├── package.json  # Frontend dependencies
│
└── README.md  # Project documentation
```

---

## 📦 Dependencies
### 🔹 Backend (Flask) Requirements
```
blinker==1.9.0
click==8.1.8
colorama==0.4.6
dnspython==2.7.0
Flask==3.1.0
Flask-Cors==5.0.0
itsdangerous==2.2.0
Jinja2==3.1.5
MarkupSafe==3.0.2
pymongo==4.11
python-dotenv==1.0.1
Werkzeug==3.1.3
```

### 🔹 Frontend (Vite/React) Dependencies
```
"@tailwindcss/vite": "^4.0.6",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-router-dom": "^7.1.5",
"tailwindcss": "^4.0.6"
```

---

## 🎨 UI & Features
- 📝 **Create, Edit, Delete Notes**
- 🔍 **View Single Note**
- 🚀 **Fast UI with React & Tailwind**
- 🌍 **MongoDB for persistent storage**

---

## 📅 Author & Date
- **Author:** Pranay Karbele
- **Date:** 03-02-2025

---

## 📜 License
This project is licensed under the **MIT License**.

---

### 🌟 Contributing
If you'd like to contribute, feel free to **fork** the repository and create a **pull request**! 🚀

