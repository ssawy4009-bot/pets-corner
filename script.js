// Sample Product Data with Subcategories
const products = [
    // Dogs - Dry Food
    {
        id: 1,
        name: "دراي فود للكلاب البالغة - 15 كجم",
        price: 850,
        category: "dog",
        subcategory: "dry-food",
        image: "https://dogokot.ru/upload/iblock/1eb/ettiu2mq39ixiqad6ez6ziox6sr5vett.png"
    },
    {
        id: 2,
        name: "دراي فود للجراء - 10 كجم",
        price: 650,
        category: "dog",
        subcategory: "dry-food",
        image: "https://dogokot.ru/upload/iblock/1eb/ettiu2mq39ixiqad6ez6ziox6sr5vett.png"
    },
    // Dogs - Collars
    {
        id: 3,
        name: "طوق جلد للكلاب",
        price: 120,
        category: "dog",
        subcategory: "collar",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S0ffd43c6cd554a19ac0e164804d6336eH.jpg"
    },
    {
        id: 4,
        name: "طوق LED للكلاب",
        price: 180,
        category: "dog",
        subcategory: "collar",
        image: "https://www.lmching.com/cdn/shop/files/4id-usa-weatherproof-ultra-bright-led-rechargeable-lite-up-dog-collar-green-1pc-lmching-group-limited-1_400x.jpg?v=1687778739"
    },
    // Dogs - Houses
    {
        id: 5,
        name: "بيت خشبي للكلاب",
        price: 1200,
        category: "dog",
        subcategory: "house",
        image: "https://m.media-amazon.com/images/I/413DEddF+gL._AC_.jpg"
    },
    {
        id: 6,
        name: "سرير فاخر للكلاب",
        price: 450,
        category: "dog",
        subcategory: "house",
        image: "https://media.zid.store/thumbs/812bd718-82cf-4244-a262-ba2defcbac07/ddf9d1ef-38b5-44f9-bc1f-0d55f02a61cb-thumbnail-500x500.jpgv1681823541"
    },
    // Dogs - Toys
    {
        id: 7,
        name: "لعبة عظمة للكلاب",
        price: 120,
        category: "dog",
        subcategory: "toy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_hh0iKT_5UjtcZJ8aRXeR8x4QQlnt9LToA&s"
    },
    {
        id: 8,
        name: "كرة تفاعلية للكلاب",
        price: 95,
        category: "dog",
        subcategory: "toy",
        image: "https://m.media-amazon.com/images/I/71n6-zP-UTL.jpg"
    },
    // Dogs - Litter
    {
        id: 29,
        name: "رمل تدريب للكلاب - 5 كجم",
        price: 180,
        category: "dog",
        subcategory: "litter",
        image: "https://m.media-amazon.com/images/I/318G+UVh7XL._AC_.jpg"
    },
    {
        id: 30,
        name: "رمل صحي للكلاب - 10 كجم",
        price: 280,
        category: "dog",
        subcategory: "litter",
        image: "https://m.media-amazon.com/images/I/318G+UVh7XL._AC_.jpg"
    },

    // Cats - Dry Food
    {
        id: 9,
        name: "دراي فود للقطط البالغة - 10 كجم",
        price: 550,
        category: "cat",
        subcategory: "dry-food",
        image: "https://petfriendstores.com/cdn/shop/files/IMG-20230820-WA0105.jpg?v=1709557848&width=1445"
    },
    {
        id: 10,
        name: "دراي فود للقطط الصغيرة - 5 كجم",
        price: 350,
        category: "cat",
        subcategory: "dry-food",
        image: "https://petfriendstores.com/cdn/shop/files/IMG-20230820-WA0105.jpg?v=1709557848&width=1445"
    },
    // Cats - Collars
    {
        id: 11,
        name: "طوق للقطط بألوان متعددة",
        price: 75,
        category: "cat",
        subcategory: "collar",
        image: "https://sc04.alicdn.com/kf/HTB11B3KOFXXXXc9XXXX760XFXXXK.png"
    },
    {
        id: 12,
        name: "طوق مع جرس للقطط",
        price: 65,
        category: "cat",
        subcategory: "collar",
        image: "https://sc04.alicdn.com/kf/HTB11B3KOFXXXXc9XXXX760XFXXXK.png"
    },
    // Cats - Litter
    {
        id: 13,
        name: "رمل قطط معطر - 5 لتر",
        price: 150,
        category: "cat",
        subcategory: "litter",
        image: "https://media.zid.store/55e6bbee-8890-4a22-ba63-903510b08ea9/b2796413-ab7e-4e93-a12c-3353d4989b1e.jpg"
    },
    {
        id: 14,
        name: "رمل قطط متكتل - 10 لتر",
        price: 250,
        category: "cat",
        subcategory: "litter",
        image: "https://media.zid.store/55e6bbee-8890-4a22-ba63-903510b08ea9/b2796413-ab7e-4e93-a12c-3353d4989b1e.jpg"
    },
    // Cats - Houses
    {
        id: 15,
        name: "بيت قطط فاخر",
        price: 650,
        category: "cat",
        subcategory: "house",
        image: "https://m.media-amazon.com/images/I/81IGbI2TVgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 16,
        name: "شجرة خدش للقطط",
        price: 850,
        category: "cat",
        subcategory: "house",
        image: "https://m.media-amazon.com/images/I/81IGbI2TVgL._AC_UF1000,1000_QL80_.jpg"
    },
    // Cats - Toys
    {
        id: 17,
        name: "لعبة فأر للقطط",
        price: 45,
        category: "cat",
        subcategory: "toy",
        image: "https://cdn.salla.sa/vGyYK/0krfYJNFeznmv4q7eHRMBtvKBItL9GwQD7vsrA43.jpg"
    },
    {
        id: 18,
        name: "كرة صوف للقطط",
        price: 35,
        category: "cat",
        subcategory: "toy",
        image: "https://cdn.salla.sa/vGyYK/0krfYJNFeznmv4q7eHRMBtvKBItL9GwQD7vsrA43.jpg"
    },

    // Birds - Food
    {
        id: 19,
        name: "طعام عصافير الزينة - 1 كجم",
        price: 85,
        category: "bird",
        subcategory: "food",
        image: ""
    },
    {
        id: 20,
        name: "طعام الببغاوات - 2 كجم",
        price: 150,
        category: "bird",
        subcategory: "food",
        image: ""
    },
    // Birds - Cages
    {
        id: 21,
        name: "قفص عصافير معدني",
        price: 350,
        category: "bird",
        subcategory: "cage",
        image: ""
    },
    {
        id: 22,
        name: "قفص ببغاء كبير",
        price: 750,
        category: "bird",
        subcategory: "cage",
        image: ""
    },
    // Birds - Toys
    {
        id: 23,
        name: "أرجوحة للعصافير",
        price: 45,
        category: "bird",
        subcategory: "toy",
        image: ""
    },
    {
        id: 24,
        name: "مرآة مع جرس للطيور",
        price: 35,
        category: "bird",
        subcategory: "toy",
        image: ""
    },

    // Fish - Food
    {
        id: 25,
        name: "طعام أسماك الزينة - 100 جم",
        price: 45,
        category: "fish",
        subcategory: "food",
        image: ""
    },
    {
        id: 26,
        name: "طعام أسماك استوائية - 200 جم",
        price: 75,
        category: "fish",
        subcategory: "food",
        image: ""
    },
    // Fish - Aquariums
    {
        id: 27,
        name: "حوض سمك زينة صغير",
        price: 450,
        category: "fish",
        subcategory: "aquarium",
        image: ""
    },
    {
        id: 28,
        name: "حوض سمك كبير مع فلتر",
        price: 1200,
        category: "fish",
        subcategory: "aquarium",
        image: ""
    },
    // Fish - Accessories
    {
        id: 29,
        name: "فلتر مياه للأحواض",
        price: 280,
        category: "fish",
        subcategory: "accessory",
        image: ""
    },
    {
        id: 30,
        name: "إضاءة LED للأحواض",
        price: 320,
        category: "fish",
        subcategory: "accessory",
        image: ""
    }
];

// Subcategory definitions
const subcategories = {
    dog: [
        { id: 'dry-food', name: 'دراي فود' },
        { id: 'collar', name: 'طوق' },
        { id: 'house', name: 'بيت' },
        { id: 'toy', name: 'ألعاب' },
        { id: 'litter', name: 'رمل' }
    ],
    cat: [
        { id: 'dry-food', name: 'دراي فود' },
        { id: 'collar', name: 'طوق' },
        { id: 'litter', name: 'رمل' },
        { id: 'house', name: 'بيت' },
        { id: 'toy', name: 'ألعاب' }
    ],
    bird: [
        { id: 'food', name: 'طعام' },
        { id: 'cage', name: 'قفص' },
        { id: 'toy', name: 'ألعاب' }
    ],
    fish: [
        { id: 'food', name: 'طعام' },
        { id: 'aquarium', name: 'حوض' },
        { id: 'accessory', name: 'إكسسوارات' }
    ]
};

// DOM Elements
const productsContainer = document.getElementById('products-container');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const categoryBtns = document.querySelectorAll('.cat-btn');
const subcategoriesContainer = document.getElementById('subcategories-container');

// State
let currentCategory = 'all';
let currentSubcategory = 'all';

// Initialize
function init() {
    renderProducts('all', 'all');
    setupEventListeners();
    initClinic(); // Add clinic initialization
}

// Render Subcategory Buttons
function renderSubcategories(category) {
    subcategoriesContainer.innerHTML = '';

    if (category === 'all') {
        subcategoriesContainer.style.display = 'none';
        return;
    }

    subcategoriesContainer.style.display = 'flex';

    // Add "All" button for subcategories
    const allBtn = document.createElement('button');
    allBtn.className = 'subcat-btn active';
    allBtn.dataset.subcategory = 'all';
    allBtn.textContent = 'الكل';
    subcategoriesContainer.appendChild(allBtn);

    // Add specific subcategory buttons
    if (subcategories[category]) {
        subcategories[category].forEach(subcat => {
            const btn = document.createElement('button');
            btn.className = 'subcat-btn';
            btn.dataset.subcategory = subcat.id;
            btn.textContent = subcat.name;
            subcategoriesContainer.appendChild(btn);
        });
    }

    // Setup subcategory button listeners
    setupSubcategoryListeners();
}

// Render Products
function renderProducts(category, subcategory) {
    productsContainer.innerHTML = '';

    let filteredProducts = products;

    // Filter by main category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    // Filter by subcategory
    if (subcategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: #666;">لا توجد منتجات في هذا القسم حالياً</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // WhatsApp Message
        const message = `مرحبا، أريد طلب: ${product.name} بسعر ${product.price} جنيه`;
        const whatsappLink = `https://wa.me/201026794767?text=${encodeURIComponent(message)}`;

        productCard.innerHTML = `
            <div class="product-icon-placeholder">
                <i class="fas fa-paw"></i>
            </div>
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

            // Update state
            currentCategory = btn.dataset.category;
            currentSubcategory = 'all';

            // Render subcategories and products
            renderSubcategories(currentCategory);
            renderProducts(currentCategory, 'all');
        });
    });

    // Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Navbar Links Logic (Auto-Toggle Shop/Clinic)
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('href');
            if (targetId === '#products') {
                if(window.toggleService) window.toggleService('shop');
            } else if (targetId === '#clinic' || targetId === '#clinic-contact' || targetId === '#clinic-products' || targetId === '#surgery-booking' || targetId === '#xray-booking') {
                if(window.toggleService) window.toggleService('clinic');
            }
        });
    });
}


// Setup Subcategory Listeners
function setupSubcategoryListeners() {
    const subcatBtns = document.querySelectorAll('.subcat-btn');

    subcatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            subcatBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            // Update state and render
            currentSubcategory = btn.dataset.subcategory;
            renderProducts(currentCategory, currentSubcategory);
        });
    });
}



// --- NEW CLINIC LOGIC & THEME TOGGLE ---

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Check Local Storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Service Toggle (Shop vs Clinic)
window.toggleService = function(service) {
    const shopWrapper = document.getElementById('shop-wrapper');
    const clinicWrapper = document.getElementById('clinic-wrapper');
    const selectShopBtn = document.getElementById('select-shop');
    const selectClinicBtn = document.getElementById('select-clinic');

    if (service === 'shop') {
        shopWrapper.style.display = 'block';
        clinicWrapper.style.display = 'none';
        selectShopBtn.classList.add('active');
        selectClinicBtn.classList.remove('active');
    } else if (service === 'clinic') {
        shopWrapper.style.display = 'none';
        clinicWrapper.style.display = 'block';
        selectClinicBtn.classList.add('active');
        selectShopBtn.classList.remove('active');
    }
};

// Clinic Products Data
const clinicProducts = [
    {
        id: 'c1',
        name: 'أقراص ديدان للقطط والكلاب',
        price: 'يحدد بالعيادة',
        category: 'deworming',
        image: 'https://png.pngtree.com/png-vector/20230308/ourmid/pngtree-medicine-tablet-pills-vector-illustration-png-image_6641571.png'
    },
    {
        id: 'c2',
        name: 'أمبولات حشرات للحماية',
        price: 'يحدد بالعيادة',
        category: 'parasites',
        image: 'https://png.pngtree.com/png-clipart/20230501/original/pngtree-medicine-spray-bottle-plastic-transparent-bottle-png-image_8998492.png'
    },
    {
        id: 'c3',
        name: 'تطعيم ثماني / خماسي',
        price: 'يحدد بالعيادة',
        category: 'immunity',
        image: 'https://png.pngtree.com/png-clipart/20220111/original/pngtree-syringe-medical-supplies-health-png-image_7086812.png'
    }
];

// Focus on Clinic Products
const clinicProductsContainer = document.getElementById('clinic-products-container');
const clinicCategoryBtns = document.querySelectorAll('.clinic-cat-btn');

function renderClinicProducts(category) {
    if (!clinicProductsContainer) return;
    clinicProductsContainer.innerHTML = '';
    
    let filtered = clinicProducts;
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    if (filtered.length === 0) {
        clinicProductsContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: var(--light-text);">لا توجد منتجات حالياً في هذا القسم</p>';
        return;
    }

    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const message = `مرحبا، أود الاستفسار عن ${product.name}`;
        const whatsappLink = `https://wa.me/201026794767?text=${encodeURIComponent(message)}`;

        productCard.innerHTML = `
            <div class="product-icon-placeholder clinic-icon">
                <i class="fas fa-pills"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price" style="color:var(--primary-color); font-weight:bold;">${product.price}</p>
                <a href="${whatsappLink}" target="_blank" class="btn btn-primary" style="margin-top:10px;">
                    استفسر بالعيادة <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;
        clinicProductsContainer.appendChild(productCard);
    });
}

function initClinic() {
    renderClinicProducts('all');
    clinicCategoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            clinicCategoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderClinicProducts(btn.dataset.clinicCategory);
        });
    });
}

// Start Application
init();
