const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

const products = [
    { name: 'Benty Sandy Premium', price: 135, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Benty_Sandy_Premium_Bentonite_Clumping_Cat_Litter_10L_-_Mickey_s_Pets_Store.webp' },
    { name: 'CATFUN Plus White', price: 130, categories: ['cat', 'dog'], subcategory: 'litter', image: 'CATFUN_Plus_White_Bentonite_Clumping_Cat_Litter_10L_-_Mickeys_Pets_Store.webp' },
    { name: 'Candy Cat', price: 100, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Candy_Cat_Bentonite_Clumping_Cat_Litter_5L_-_Mickey_s_Pets_Store.webp' },
    { name: 'Kiki Kat', price: 120, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Kiki_Kat_Bentonite_Clumping_Cat_Litter_10L_-_Mickey_s_Pets_Store.webp' },
    { name: 'Orgo Bentonite', price: 130, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Orgo_Bentonite_Clumping_Cat_Litter_20L_-_Mickey_s_Pets_Store.webp' },
    { name: 'Vita Maxx', price: 150, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Vita_Maxx_Bentonite_Clumping_Cat_Litter_20L_-_Mickey_s_Pets_Store.webp' },
    { name: 'Catmoon', price: 135, categories: ['cat', 'dog'], subcategory: 'litter', image: 'CATMOON.jpg' },
    { name: 'Cat-Kota', price: 60, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Cat-Kota.jpg' },
    { name: 'Mi Gato (Miiga)', price: 110, categories: ['cat', 'dog'], subcategory: 'litter', image: 'mi gato.jpg' },
    { name: 'King Clean (Silica)', price: 160, categories: ['cat', 'dog'], subcategory: 'litter', image: 'King Clean.jpg' },
    { name: 'Zee! Turkish', price: 125, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Zee.webp' },
    { name: 'Free Cat', price: 110, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Free Cat .jpg' },
    { name: 'Tommy Cat', price: 40, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Tommy Cat .webp' },
    { name: 'oPet Turkish', price: 100, categories: ['cat', 'dog'], subcategory: 'litter', image: 'Untitled-1_21da6551-6c04-4f7b-948c-d78214ebbc3d.webp' },
    { name: 'Vet Star دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'Vet star.webp' },
    { name: 'Alpha دراي فود - 1 كجم', price: 170, categories: ['cat'], subcategory: 'dry-food', image: 'Alpha.webp' },
    { name: 'Casita دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'Casita.webp' },
    { name: 'Doodzy دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'shopping (2).webp' },
    { name: 'Josera دراي فود - 1.9 كجم', price: 900, categories: ['cat'], subcategory: 'dry-food', image: 'Josera.jpg' },
    { name: 'aleef (Kitten) دراي فود - 1 كجم', price: 150, categories: ['cat'], subcategory: 'dry-food', image: 'shopping (3).webp' },
    { name: 'aleef (Adult) دراي فود - 1 كجم', price: 140, categories: ['cat'], subcategory: 'dry-food', image: 'aleef.webp' },
    { name: 'Pro Performance (Adult Sterilised) - 2 كجم', price: 650, categories: ['cat'], subcategory: 'dry-food', image: 'pro performance adult(1).jpg' },
    { name: 'Pro Performance (Kitten) - 2 كجم', price: 650, categories: ['cat'], subcategory: 'dry-food', image: 'Pro performance kitten.webp' },
    { name: 'Migma دراي فود - 1 كجم', price: 110, categories: ['cat'], subcategory: 'dry-food', image: 'Migma dray cat .webp' },
    { name: 'فرشاه بلاستيك', price: 75, categories: ['cat', 'dog'], subcategory: 'brush', image: 'brush_plastic.jpg' },
    { name: 'فرشاه سيليكون', price: 100, categories: ['cat', 'dog'], subcategory: 'brush', image: 'shopping (8).webp' },
    { name: 'فلاية Terminator', price: 50, categories: ['cat', 'dog'], subcategory: 'brush', image: 'download (2).jpg' },
    { name: 'فرشاه سيليكون صغيره', price: 70, categories: ['cat', 'dog'], subcategory: 'brush', image: 'brush_silicone_small.jpg' },
    { name: 'فرشاه جل', price: 90, categories: ['cat', 'dog'], subcategory: 'brush', image: 'brush_gel.jpg' },
    { name: 'فرشاه كبيره', price: 150, categories: ['cat', 'dog'], subcategory: 'brush', image: 'brush_large.jpg' },
    { name: 'طقم فرشاه بقصافه', price: 150, categories: ['cat', 'dog'], subcategory: 'brush', image: 'brush_set.jpg' },
    { name: 'Rest Cat سكراتش', price: 30, categories: ['cat'], subcategory: 'scratch', image: 'scratch.jpg' },
    { name: 'Rest Cat (اصفر) سكراتش', price: 40, categories: ['cat'], subcategory: 'scratch', image: 'scratch_yellow.jpg' },
    { name: 'Rest Cat (اسود) سكراتش', price: 50, categories: ['cat'], subcategory: 'scratch', image: 'scratch_black.jpg' },
    { name: 'Rest Cat (اخضر) سكراتش', price: 35, categories: ['cat'], subcategory: 'scratch', image: 'scratch_green.jpg' },
    { name: 'Migma دراي فود كلاب', price: 850, categories: ['dog'], subcategory: 'dry-food', image: 'Migma dray.webp' },
    { name: 'طعام عصافير الزينة - 1 كجم', price: 85, categories: ['bird'], subcategory: 'food', image: 'bird_food.jpg' },
    { name: 'قفص عصافير معدني', price: 350, categories: ['bird'], subcategory: 'cage', image: 'bird_cage.jpg' },
    { name: 'طعام أسماك الزينة - 100 جم', price: 45, categories: ['fish'], subcategory: 'food', image: 'fish_food.jpg' },
    { name: 'حوض سمك زينة صغير', price: 450, categories: ['fish'], subcategory: 'aquarium', image: 'aquarium.jpg' }
];

db.serialize(() => {
    // Create Products Table
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        categories TEXT,
        subcategory TEXT,
        image TEXT
    )`);

    // Create Orders Table
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT,
        product_name TEXT,
        price INTEGER,
        date TEXT
    )`);

    // Clear existing products
    db.run(`DELETE FROM products`);

    // Insert Products
    const stmt = db.prepare("INSERT INTO products (name, price, categories, subcategory, image) VALUES (?, ?, ?, ?, ?)");
    products.forEach(p => {
        stmt.run(p.name, p.price, JSON.stringify(p.categories), p.subcategory, p.image);
    });
    stmt.finalize();

    console.log("Database initialized and mock data inserted successfully!");
});

db.close();
