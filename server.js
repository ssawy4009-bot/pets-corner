const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Frontend Files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname)); // Fallback for the main folder

// Initialize SQLite DB Connection
const db = new sqlite3.Database('./database.sqlite');

// Create tables if they do not exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        categories TEXT,
        subcategory TEXT,
        image TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT,
        product_name TEXT,
        price INTEGER,
        date TEXT
    )`);
});

// =======================
// REST API ENDPOINTS
// =======================

// 1. Get All Products
app.get('/api/products', (req, res) => {
    db.all("SELECT * FROM products", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        // Convert the 'categories' JSON string back to an array
        const products = rows.map(r => ({ ...r, categories: JSON.parse(r.categories || '[]') }));
        res.json(products);
    });
});

// 2. Add a New Product
app.post('/api/products', (req, res) => {
    const { name, price, categories, subcategory, image } = req.body;
    db.run(
        "INSERT INTO products (name, price, categories, subcategory, image) VALUES (?, ?, ?, ?, ?)",
        [name, price, JSON.stringify(categories), subcategory, image],
        function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, message: "تمت إضافة المنتج بنجاح!" });
        }
    );
});

// 3. Delete a Product
app.delete('/api/products/:id', (req, res) => {
    db.run("DELETE FROM products WHERE id = ?", req.params.id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ deleted: this.changes, message: "تم حذف المنتج." });
    });
});

// 4. Create an Order
app.post('/api/orders', (req, res) => {
    const { customer_name, product_name, price } = req.body;
    const date = new Date().toLocaleString('ar-EG'); // Current Date limit Time
    db.run(
        "INSERT INTO orders (customer_name, product_name, price, date) VALUES (?, ?, ?, ?)",
        [customer_name, product_name, price, date],
        function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, message: "تم تسجيل الطلب!" });
        }
    );
});

// 5. Get All Orders
app.get('/api/orders', (req, res) => {
    db.all("SELECT * FROM orders ORDER BY id DESC", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend Server is running perfectly on http://localhost:${PORT}`);
});
