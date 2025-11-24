// Sample Product Data
const products = [
    {
        id: 1,
        name: "دراي فود للكلاب البالغة - 15 كجم",
        price: 850,
        category: "dog",
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "طوق للقطط بألوان متعددة",
        price: 75,
        category: "cat",
        image: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "قفص عصافير معدني",
        price: 350,
        category: "bird",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30ebd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "حوض سمك زينة صغير",
        price: 450,
        category: "fish",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "لعبة عظمة للكلاب",
        price: 120,
        category: "dog",
        image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "رمل قطط معطر - 5 لتر",
        price: 150,
        category: "cat",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const categoryBtns = document.querySelectorAll('.cat-btn');

// Initialize
function init() {
    renderProducts('all');
    setupEventListeners();
}

// Render Products
function renderProducts(category) {
    productsContainer.innerHTML = '';
    const filteredProducts = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // WhatsApp Message
        const message = `مرحبا، أريد طلب: ${product.name} بسعر ${product.price} جنيه`;
        const whatsappLink = `https://wa.me/201026794767?text=${encodeURIComponent(message)}`;

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${product.price} جنيه</p>
                <a href="${whatsappLink}" target="_blank" class="btn btn-primary">
                    اطلب الآن <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Event Listeners
function setupEventListeners() {
    // Category Filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');
            // Render
            renderProducts(btn.dataset.category);
        });
    });

    // Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Start
init();
