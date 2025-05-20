# MERN Stack Project

This is a full-stack MERN (MongoDB, Express, React, Node.js) application.

---
## 🌐 Live Demo

**Application hosted on Render:**  
[https://mern-8c7f.onrender.com/](https://mern-8c7f.onrender.com/)

---

## 📁 Folder Structure


MERN/
  backend/
    server.js
    ...
  frontend/
    dist/
      index.html
    ...
  package.json


---

## 🚀 Getting Started

### 1. **Clone the repository**

git clone <your-repo-url>
cd MERN


### 2. **Install dependencies**

npm install
cd frontend
npm install
cd ../backend
npm install
cd ..

### 3. **Set up environment variables**

Create a `.env` file in the `backend` folder:

MONGO_URI=your-mongodb-connection-string
PORT=5000

### 4. **Build the frontend**

cd frontend
npm run build
cd ..

### 5. **Start the backend server**

From the root folder:

npm start

The backend will serve the frontend build at [http://localhost:5000](http://localhost:5000).

---

## 🛠 Development

- **Frontend dev server:**  
 
  cd frontend
  npm run dev

  Runs at [http://localhost:5173](http://localhost:5173)

- **Backend dev server:**  

  cd backend
  npm run dev

  Runs at [http://localhost:5000](http://localhost:5000)

---

## 🔗 API Endpoints

- `GET /api/products` — Get all products
- `POST /api/products` — Add a new product
- `PUT /api/products/:id` — Update a product
- `DELETE /api/products/:id` — Delete a product

---

## 📝 Notes

- Make sure to build the frontend before starting the backend in production.
- If you change the frontend code, rebuild before restarting backend.

---

## 📄 Screenshot

**Create New Product:**

![image](https://github.com/user-attachments/assets/1f869201-13be-4a9c-9e1c-8cea19c37f04)


**View all Products:**

![image](https://github.com/user-attachments/assets/16666cb6-76d3-480c-9393-687691d008ed)

**Update Product:**

![image](https://github.com/user-attachments/assets/ba4ca0ec-b59f-4a3e-9f26-0b701e514835)

**Delete Product:**

<img width="524" alt="image" src="https://github.com/user-attachments/assets/59c831d6-eb08-470f-8f3f-86aa42f9444d" />



