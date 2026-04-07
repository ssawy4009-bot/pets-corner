// ===== بيانات المنتجات الحقيقية =====
const products = [

    // ===================== الرمل (لقطط وكلاب) =====================
    { id: 1, name: 'Benty Sandy Premium', price: 135, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Benty_Sandy_Premium_Bentonite_Clumping_Cat_Litter_10L_-_Mickey_s_Pets_Store.webp' },
    { id: 2, name: 'CATFUN Plus White', price: 130, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/CATFUN_Plus_White_Bentonite_Clumping_Cat_Litter_10L_-_Mickeys_Pets_Store.webp' },
    { id: 3, name: 'Candy Cat', price: 100, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Candy_Cat_Bentonite_Clumping_Cat_Litter_5L_-_Mickey_s_Pets_Store.webp' },
    { id: 4, name: 'Kiki Kat', price: 120, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Kiki_Kat_Bentonite_Clumping_Cat_Litter_10L_-_Mickey_s_Pets_Store.webp' },
    { id: 5, name: 'Orgo Bentonite', price: 130, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Orgo_Bentonite_Clumping_Cat_Litter_20L_-_Mickey_s_Pets_Store.webp' },
    { id: 6, name: 'Vita Maxx', price: 150, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Vita_Maxx_Bentonite_Clumping_Cat_Litter_20L_-_Mickey_s_Pets_Store.webp' },
    { id: 7, name: 'Catmoon', price: 135, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/CATMOON.jpg' },
    { id: 8, name: 'Cat-Kota', price: 60, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Cat-Kota.jpg' },
    { id: 9, name: 'Mi Gato (Miiga)', price: 110, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/mi gato.jpg' },
    { id: 10, name: 'King Clean (Silica)', price: 160, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/King Clean.jpg' },
    { id: 11, name: 'Zee! Turkish', price: 125, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Zee.webp' },
    { id: 12, name: 'Free Cat', price: 110, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Free Cat .jpg' },
    { id: 13, name: 'Tommy Cat', price: 40, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Tommy Cat .webp' },
    { id: 14, name: 'oPet Turkish', price: 100, categories: ['cat', 'dog'], subcategory: 'litter', image: 'products/cat/Untitled-1_21da6551-6c04-4f7b-948c-d78214ebbc3d.webp' },

    // ===================== القطط - دراي فود =====================
    { id: 17, name: 'Vet Star دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Vet star.webp', variants: null },
    { id: 18, name: 'Alpha دراي فود - 1 كجم', price: 170, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Alpha.webp', variants: null },
    { id: 19, name: 'Casita دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Casita.webp', variants: null },
    { id: 20, name: 'Doodzy دراي فود - 1 كجم', price: 100, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/shopping (2).webp', variants: null },
    { id: 21, name: 'Josera دراي فود - 1.9 كجم', price: 900, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Josera.jpg', variants: null },
    { id: 22, name: 'aleef (Kitten) دراي فود - 1 كجم', price: 150, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/shopping (3).webp', variants: null },
    { id: 23, name: 'aleef (Adult) دراي فود - 1 كجم', price: 140, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/aleef.webp', variants: null },
    { id: 24, name: 'Pro Performance (Adult Sterilised) - 2 كجم', price: 650, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/pro performance adult(1).jpg', variants: null },
    { id: 25, name: 'Pro Performance (Kitten) - 2 كجم', price: 650, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Pro performance kitten.webp', variants: null },
    { id: 26, name: 'Migma دراي فود - 1 كجم', price: 110, categories: ['cat'], subcategory: 'dry-food', image: 'products/cat/Migma dray cat .webp', variants: null },

    // ===================== القطط والكلاب - فرش وأدوات =====================
    {
        id: 27, name: 'فرشاه بلاستيك', price: null, categories: ['cat', 'dog'], subcategory: 'brush',
        image: 'products/cat/brush_plastic.jpg',
        variants: [
            { label: 'حجم صغير (S)', price: 75 },
            { label: 'حجم وسط (M)', price: 90 },
            { label: 'حجم كبير (L)', price: 100 }
        ]
    },
    { id: 28, name: 'فرشاه سيليكون', price: 100, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/shopping (8).webp', variants: null },
    { id: 29, name: 'فلاية Terminator', price: 50, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/download (2).jpg', variants: null },
    { id: 30, name: 'فرشاه سيليكون صغيره', price: 70, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/brush_silicone_small.jpg', variants: null },
    { id: 31, name: 'فرشاه جل', price: 90, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/brush_gel.jpg', variants: null },
    { id: 32, name: 'فرشاه كبيره', price: 150, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/brush_large.jpg', variants: null },
    { id: 33, name: 'طقم فرشاه بقصافه', price: 150, categories: ['cat', 'dog'], subcategory: 'brush', image: 'products/cat/brush_set.jpg', variants: null },

    // ===================== القطط - سكراتش =====================
    { id: 34, name: 'Rest Cat سكراتش', price: 30, categories: ['cat'], subcategory: 'scratch', image: 'products/cat/scratch.jpg', variants: null },
    { id: 35, name: 'Rest Cat (اصفر) سكراتش', price: 40, categories: ['cat'], subcategory: 'scratch', image: 'products/cat/scratch_yellow.jpg', variants: null },
    { id: 36, name: 'Rest Cat (اسود) سكراتش', price: 50, categories: ['cat'], subcategory: 'scratch', image: 'products/cat/scratch_black.jpg', variants: null },
    { id: 37, name: 'Rest Cat (اخضر) سكراتش', price: 35, categories: ['cat'], subcategory: 'scratch', image: 'products/cat/scratch_green.jpg', variants: null },

    // ===================== الكلاب =====================
    { id: 38, name: 'Migma دراي فود كلاب', price: 850, categories: ['dog'], subcategory: 'dry-food', image: 'products/cat/Migma dray.webp', variants: null },

    // ===================== طيور =====================
    { id: 101, name: 'طعام عصافير الزينة - 1 كجم', price: 85, categories: ['bird'], subcategory: 'food', image: 'products/طيور/bird_food.jpg', variants: null },
    { id: 102, name: 'قفص عصافير معدني', price: 350, categories: ['bird'], subcategory: 'cage', image: 'products/طيور/bird_cage.jpg', variants: null },

    // ===================== أسماك =====================
    { id: 103, name: 'طعام أسماك الزينة - 100 جم', price: 45, categories: ['fish'], subcategory: 'food', image: 'products/اسماك/fish_food.jpg', variants: null },
    { id: 104, name: 'حوض سمك زينة صغير', price: 450, categories: ['fish'], subcategory: 'aquarium', image: 'products/اسماك/aquarium.jpg', variants: null }
];

// ===== تعريف الأقسام الفرعية =====
const subcategories = {
    dog: [
        { id: 'dry-food', name: 'دراي فود', icon: 'fa-drumstick-bite' },
        { id: 'litter', name: 'رمل', icon: 'fa-layer-group' },
        { id: 'brush', name: 'فرش', icon: 'fa-paint-brush' },
        { id: 'collar', name: 'طوق', icon: 'fa-circle-notch' },
        { id: 'house', name: 'بيت', icon: 'fa-home' },
        { id: 'toy', name: 'ألعاب', icon: 'fa-football-ball' }
    ],
    cat: [
        { id: 'litter', name: 'رمل', icon: 'fa-layer-group' },
        { id: 'dry-food', name: 'دراي فود', icon: 'fa-drumstick-bite' },
        { id: 'brush', name: 'فرش', icon: 'fa-paint-brush' },
        { id: 'scratch', name: 'سكراتش', icon: 'fa-paw' },
        { id: 'collar', name: 'طوق', icon: 'fa-circle-notch' },
        { id: 'house', name: 'بيت', icon: 'fa-home' },
        { id: 'toy', name: 'ألعاب', icon: 'fa-star' }
    ],
    bird: [
        { id: 'food', name: 'طعام', icon: 'fa-seedling' },
        { id: 'cage', name: 'قفص', icon: 'fa-border-all' },
        { id: 'toy', name: 'ألعاب', icon: 'fa-star' }
    ],
    fish: [
        { id: 'food', name: 'طعام', icon: 'fa-seedling' },
        { id: 'aquarium', name: 'حوض', icon: 'fa-water' },
        { id: 'accessory', name: 'إكسسوارات', icon: 'fa-cogs' }
    ]
};

// ===== عناصر DOM =====
const productsContainer = document.getElementById('products-container');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const categoryBtns = document.querySelectorAll('.cat-btn');
const subcategoriesContainer = document.getElementById('subcategories-container');

// ===== الحالة =====
let currentCategory = 'all';
let currentSubcategory = 'all';

// ===== تهيئة التطبيق =====
function init() {
    renderProducts('all', 'all');
    setupEventListeners();
    initClinic();
    setupImageModal();
}

// ===== رسم الأقسام الفرعية =====
function renderSubcategories(category) {
    subcategoriesContainer.innerHTML = '';

    if (category === 'all') {
        subcategoriesContainer.style.display = 'none';
        return;
    }

    subcategoriesContainer.style.display = 'flex';

    const allBtn = document.createElement('button');
    allBtn.className = 'subcat-btn active';
    allBtn.dataset.subcategory = 'all';
    allBtn.textContent = 'الكل';
    subcategoriesContainer.appendChild(allBtn);

    if (subcategories[category]) {
        subcategories[category].forEach(subcat => {
            const btn = document.createElement('button');
            btn.className = 'subcat-btn';
            btn.dataset.subcategory = subcat.id;
            btn.textContent = subcat.name;
            subcategoriesContainer.appendChild(btn);
        });
    }

    setupSubcategoryListeners();
}

// ===== رسم المنتجات =====
function renderProducts(category, subcategory) {
    productsContainer.innerHTML = '';

    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.categories && p.categories.includes(category));
    }

    if (subcategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div style="text-align:center; grid-column:1/-1; padding:60px 20px;">
                <i class="fas fa-box-open" style="font-size:3rem; color:var(--light-text); margin-bottom:15px; display:block;"></i>
                <p style="font-size:1.2rem; color:var(--light-text);">لا توجد منتجات في هذا القسم حالياً</p>
            </div>`;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // بناء HTML الصورة
        const imgSrc = product.image ? encodeURI(product.image) : '';
        const imgHtml = product.image
            ? `<div class="product-img-wrapper">
                  <img src="${imgSrc}" alt="${product.name}" class="product-img" onerror="this.outerHTML='<div class=\\'product-icon-placeholder text-center\\'><i class=\\'fas fa-paw\\'></i></div>'">
               </div>`
            : `<div class="product-icon-placeholder"><i class="fas fa-paw"></i></div>`;

        // بناء HTML السعر / الأوزان بتصميم جديد
        let priceSection = '';
        let initialLabelPrice = '';

        if (product.variants && product.variants.length > 0) {
            const options = product.variants.map((v, i) => `
                <option value="${v.price}" data-label="${v.label}">
                    ${v.label} - ${v.price} جنيه
                </option>
            `).join('');

            priceSection = `
                <div class="variant-dropdown-wrapper">
                    <label class="variant-label"><i class="fas fa-weight-hanging"></i> اختر:</label>
                    <select class="variant-select">
                        ${options}
                    </select>
                </div>
                <div class="price-tag dynamic-price">
                    <span class="price-amount">${product.variants[0].price}</span>
                    <span class="price-currency">جنيه</span>
                </div>
            `;
            initialLabelPrice = `(${product.variants[0].label}) بسعر ${product.variants[0].price} جنيه`;
        } else {
            priceSection = `
                <div class="spacer-for-variants"></div>
                <div class="price-tag">
                    <span class="price-amount">${product.price}</span>
                    <span class="price-currency">جنيه</span>
                </div>`;
            initialLabelPrice = `بسعر ${product.price} جنيه`;
        }

        // WhatsApp Message
        const messageText = `مرحبا، أريد طلب: ${product.name} ${initialLabelPrice}`;
        const whatsappLink = `https://wa.me/201026794767?text=${encodeURIComponent(messageText)}`;

        productCard.innerHTML = `
            ${imgHtml}
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                ${priceSection}
                <a href="${whatsappLink}" target="_blank" class="btn btn-primary order-btn">
                    اطلب الآن <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;

        productsContainer.appendChild(productCard);

        // Add event listeners for variant selection (dropdown change)
        if (product.variants && product.variants.length > 0) {
            const selectEl = productCard.querySelector('.variant-select');
            const priceAmountEl = productCard.querySelector('.price-amount');
            const orderBtn = productCard.querySelector('.order-btn');

            selectEl.addEventListener('change', (e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const selectedPrice = selectedOption.value;
                const selectedLabel = selectedOption.getAttribute('data-label');

                // Update text
                priceAmountEl.textContent = selectedPrice;

                // Add small pop/anim effect
                priceAmountEl.style.transform = 'scale(1.15)';
                priceAmountEl.style.color = '#ff8f00'; 
                setTimeout(() => {
                    priceAmountEl.style.transform = 'scale(1)';
                    priceAmountEl.style.color = 'var(--primary-color)';
                }, 200);

                // Update WhatsApp Link
                const newMessage = `مرحبا، أريد طلب: ${product.name} (${selectedLabel}) بسعر ${selectedPrice} جنيه`;
                orderBtn.href = `https://wa.me/201026794767?text=${encodeURIComponent(newMessage)}`;
            });
        }
    });
}

// ===== اسم القسم الفرعي =====
function getCategoryLabel(subcategory) {
    const labels = {
        'litter': 'رمل',
        'dry-food': 'دراي فود',
        'brush': 'فرشه',
        'scratch': 'سكراتش',
        'collar': 'طوق',
        'house': 'بيت',
        'toy': 'لعبة',
        'food': 'طعام',
        'cage': 'قفص',
        'aquarium': 'حوض',
        'accessory': 'إكسسوار'
    };
    return labels[subcategory] || subcategory;
}

// ===== مستمعو الأحداث =====
function setupEventListeners() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentSubcategory = 'all';
            renderSubcategories(currentCategory);
            renderProducts(currentCategory, 'all');
        });
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('href');
            if (targetId === '#products') {
                if (window.toggleService) window.toggleService('shop');
            } else if (['#clinic', '#clinic-contact', '#clinic-products', '#surgery-booking', '#xray-booking'].includes(targetId)) {
                if (window.toggleService) window.toggleService('clinic');
            }
        });
    });
}

function setupSubcategoryListeners() {
    const subcatBtns = document.querySelectorAll('.subcat-btn');
    subcatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subcatBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSubcategory = btn.dataset.subcategory;
            renderProducts(currentCategory, currentSubcategory);
        });
    });
}

// ===== الوضع الليلي =====
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');
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

// ===== تبديل المتجر / العيادة =====
window.toggleService = function (service) {
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

// ===== منتجات العيادة =====
const clinicProducts = [
    { id: 'c1', name: 'أقراص ديدان للقطط والكلاب', price: 'يحدد بالعيادة', category: 'deworming', image: '' },
    { id: 'c2', name: 'أمبولات حشرات للحماية', price: 'يحدد بالعيادة', category: 'parasites', image: '' },
    { id: 'c3', name: 'تطعيم ثماني / خماسي', price: 'يحدد بالعيادة', category: 'immunity', image: '' }
];

const clinicProductsContainer = document.getElementById('clinic-products-container');
const clinicCategoryBtns = document.querySelectorAll('.clinic-cat-btn');

function renderClinicProducts(category) {
    if (!clinicProductsContainer) return;
    clinicProductsContainer.innerHTML = '';
    let filtered = clinicProducts;
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const message = `مرحبا، أود الاستفسار عن ${product.name}`;
        const whatsappLink = `https://wa.me/201091365174?text=${encodeURIComponent(message)}`;
        productCard.innerHTML = `
            <div class="product-icon-placeholder clinic-icon">
                <i class="fas fa-pills"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="price-tag" style="justify-content:center;">
                    <span class="price-amount" style="font-size:1rem;">${product.price}</span>
                </div>
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

// ===== تشغيل التطبيق =====
init();

// ===== نافذة عرض الصورة (Image Modal) =====
function setupImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal-overlay';
    modal.style.display = 'none';
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-content" src="" alt="Zoomed Product">
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close-modal');

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-img')) {
            modalImg.src = e.target.src;
            modal.style.display = 'flex';
            setTimeout(() => { modal.classList.add('active'); }, 10);
        }
    });
}
