// =========================================== //
// PORTFOLIO DATA - FIXED WITH CORRECT CATEGORIES
// =========================================== //

const portfolioItemsData = [
    { title: "Dynamic Motion Reel 2024", category: "motion", image: "images/motion-01.webm", type: "video", description: "advanced motion graphics techniques" },
    { title: "Product Launch Animation", category: "motion", image: "images/motion-02.webm", type: "video", description: "Animated explainer video for tech product" },
    { title: "Brand Identity Motion", category: "motion", image: "images/motion-03.webm", type: "video", description: "Logo animation and brand motion graphics" },
    { title: "Epic Boxing Match Animation", category: "motion", image: "images/motion-04.webm", type: "video", description: "Animated content for epic boxing match" },
    { title: "Typography in Motion", category: "motion", image: "images/motion-05.webm", type: "video", description: "Kinetic typography and text animation showcase" },
    { title: "Fight Night", category: "motion", image: "images/motion-06.webm", type: "video", description: " motion graphics for fight night event" },
    { title: "Retail Promotion Design", category: "promotional-flyer", image: "images/promo-01.webp", description: "promotional flyer for retail sale campaign" },
    { title: "Service Launch Campaign", category: "promotional-flyer", image: "images/promo-02.webp", description: "Professional flyer for new service introduction" },
    { title: "Exquisite-Design", category: "promotional-flyer", image: "images/promo-03.webp", description: "Motivational flyer design for resturant" },
    { title: "PREMIUM POP-UP SHOW", category: "promotional-flyer", image: "images/promo-04.webp", description: "Elegant flyer for premium pop-up show" },
    { title: "Mobliz Empire", category: "promotional-flyer", image: "images/promo-05.webp", description: "Mobliz Empire friday rush" },
    { title: "Product Sale Campaign", category: "promotional-flyer", image: "images/promo-06.webp", description: "Vibrant promotional design for product sales" },
    { title: "Birthday Celebration", category: "birthday-flyer", image: "images/bday-01.webp", description: "Elegant invitation for birthday celebration" },
    { title: "Adults Party Invitation", category: "birthday-flyer", image: "images/bday-02.webp", description: "Colorful and fun birthday party flyer design" },
    { title: "Golden Anniversary Design", category: "birthday-flyer", image: "images/bday-03.webp", description: "Sophisticated 30th birthday invitation design" },
    { title: "Neon Birthday Theme", category: "birthday-flyer", image: "images/bday-04.webp", description: "elegant invitation for 60th birthday celebration" },
    { title: "Modern Digital Invite", category: "birthday-flyer", image: "images/bday-05.webp", description: "Clean and modern digital birthday invitation" },
    { title: "Luxury Birthday Event", category: "birthday-flyer", image: "images/bday-06.webp", description: "Premium design for luxury birthday celebration" },
    { title: "Club Night Event", category: "event-flyer", image: "images/event-01.webp", description: "invitation for tucute entertainment club night" },
    { title: "Amapiano Event", category: "event-flyer", image: "images/event-02.webp", description: "invitation for amapiano rule event" },
    { title: "POOL LAUNCH EVENT", category: "event-flyer", image: "images/event-03.webp", description: "invitation of 6years aniniversary pool launch" },
    { title: "FEST EVENT", category: "event-flyer", image: "images/event-04.webp", description: "Informative flyer for fest event" },
    { title: "UNLEASHED/BIRTHDAY PARTY", category: "event-flyer", image: "images/event-05.webp", description: "invitation for unleashed/birthday party" },
    { title: "Baddies Ballers", category: "event-flyer", image: "images/event-06.webp", description: "invitation for baddies ballers event" },
    { title: "Weekend DJ Night", category: "club-flyer", image: "images/club-01.webp", description: "Energetic flyer for Friday night club event" },
    { title: "VIP Exclusive Night", category: "club-flyer", image: "images/club-02.webp", description: "Premium design for exclusive VIP club night" },
    { title: "Summer Pool Party", category: "club-flyer", image: "images/club-03.webp", description: "Vibrant design for summer pool party event" },
    { title: "Retro Theme Night", category: "club-flyer", image: "images/club-04.webp", description: "Nostalgic retro-themed club night design" },
    { title: "moblizz empire", category: "club-flyer", image: "images/club-05.webp", description: "dj performance party" },
    { title: "special guest", category: "club-flyer", image: "images/club-06.webp", description: "invitation for fun night" },
    { title: "Tech Startup Identity", category: "logo", image: "images/logo-01.webp", description: "Minimalist logo design for technology startup" },
    { title: "Creative Agency Branding", category: "logo", image: "images/logo-02.webp", description: "Handcrafted logo for creative design agency" },
    { title: "Modern Business Logo", category: "logo", image: "images/logo-03.webp", description: "Geometric logo design for businesses" },
    { title: "Fashion Brand Logo", category: "logo", image: "images/logo-04.webp", description: "Elegant logo design for fashion brand identity" },
    { title: "Restaurant Branding", category: "logo", image: "images/logo-05.webp", description: "Appetizing logo design for restaurant business" },
    { title: "Healthcare Identity", category: "logo", image: "images/logo-06.webp", description: " logo design for healthcare organization" }
];

// =========================================== //
// PERFORMANCE OPTIMIZATIONS
// =========================================== //

// RAF Throttle
const rafThrottle = (callback) => {
    let requestId = null;
    return (...args) => {
        if (requestId === null) {
            requestId = requestAnimationFrame(() => {
                callback(...args);
                requestId = null;
            });
        }
    };
};

// Debounce
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// =========================================== //
// INSTANT FILTER OPTIMIZATION
// =========================================== //

let currentFilter = 'all';
let isFiltering = false;
let portfolioItems = [];

function quickFilterPortfolio(filter) {
    if (isFiltering || currentFilter === filter) return;
    
    console.log('Quick filtering to:', filter);
    isFiltering = true;
    currentFilter = filter;
    
    // Get all portfolio items
    const items = document.querySelectorAll('.portfolio-item');
    
    if (items.length === 0) {
        renderPortfolioItems(filter);
        isFiltering = false;
        return;
    }
    
    // Animate filtering
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        if (shouldShow) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
    
    // Update 3D slider
    if (window.sliderControls && window.sliderControls.setCategory) {
        window.sliderControls.setCategory(filter);
    }
    
    // Reset flag
    setTimeout(() => {
        isFiltering = false;
    }, 350);
}

// =========================================== //
// PERFORMANCE LOADER
// =========================================== //

class PerformanceLoader {
    constructor() {
        this.mediaCache = new Map();
        this.videoObserver = null;
        this.playingVideos = new Set();
        this.loadedVideos = new Set();
    }
    
    preloadCriticalMedia() {
        const criticalImages = [
            'images/passport.jpg',
            'images/maseo-logo.png'
        ];
        
        criticalImages.forEach(src => {
            if (!this.mediaCache.has(src)) {
                const img = new Image();
                img.src = src;
                this.mediaCache.set(src, img);
            }
        });
        
        const initialItems = portfolioItemsData.slice(0, 6);
        initialItems.forEach(item => {
            this.preloadMedia(item.image, item.type || 'image');
        });
    }
    
    preloadMedia(src, type = 'image') {
        if (!this.mediaCache.has(src)) {
            if (type === 'video') {
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.src = src;
                video.muted = true;
                video.playsInline = true;
                this.mediaCache.set(src, video);
            } else {
                const img = new Image();
                img.src = src;
                this.mediaCache.set(src, img);
            }
        }
    }
    
    lazyLoadMedia(element, src, type = 'image') {
        return new Promise((resolve) => {
            if (type === 'video') {
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.src = src;
                video.muted = true;
                video.playsInline = true;
                video.style.opacity = '0';
                video.style.transition = 'opacity 0.3s ease';
                
                video.onloadeddata = () => {
                    video.style.opacity = '1';
                    if (element) {
                        element.innerHTML = '';
                        element.appendChild(video);
                    }
                    resolve();
                };
            } else {
                const img = new Image();
                img.loading = 'lazy';
                img.src = src;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                    if (element) {
                        element.innerHTML = '';
                        element.appendChild(img);
                    }
                    resolve();
                };
            }
        });
    }
    
    initializeVideoObserver() {
        if (this.videoObserver) return;
        
        this.videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                
                if (entry.isIntersecting) {
                    if (video.paused && video.readyState >= 3) {
                        video.play().catch(e => {
                            console.log('Video autoplay prevented:', e);
                        });
                        this.playingVideos.add(video);
                    }
                } else {
                    if (!video.paused) {
                        video.pause();
                        this.playingVideos.delete(video);
                    }
                }
            });
        }, {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        });
    }
    
    destroy() {
        if (this.videoObserver) {
            this.videoObserver.disconnect();
        }
        this.playingVideos.forEach(video => {
            video.pause();
        });
        this.playingVideos.clear();
    }
}

const perfLoader = new PerformanceLoader();

// =========================================== //
// INITIALIZATION - OPTIMIZED
// =========================================== //

document.addEventListener('DOMContentLoaded', () => {
    perfLoader.preloadCriticalMedia();
    
    initializePortfolio();
    initializeNavigation();
    initializeThemeToggle();
    initializeContactForm();
    initializeTypewriter();
    initializeParticles();
    initializeMajesticAnimations();
    initialize3DSliderFixed();
    initializeScrollToTop();
    
    setTimeout(() => {
        perfLoader.initializeVideoObserver();
        observePortfolioVideos();
    }, 300);
});

// =========================================== //
// MAJESTIC ENTRANCE ANIMATIONS
// =========================================== //

function initializeMajesticAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (!target.classList.contains('jawdropping-animated')) {
                    target.classList.add('jawdropping-animated');
                    
                    if (target.classList.contains('stagger-children')) {
                        const children = target.children;
                        Array.from(children).forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('jawdropping-animated');
                            }, index * 80);
                        });
                    }
                    
                    if (target.classList.contains('portfolio-filters')) {
                        const buttons = target.querySelectorAll('.filter-btn');
                        buttons.forEach((btn, index) => {
                            setTimeout(() => {
                                btn.classList.add('jawdropping-animated');
                            }, index * 100);
                        });
                    }
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px'
    });
    
    const selectors = [
        '.page-header',
        '.portfolio-filters',
        '.portfolio-item',
        '.about-image-container',
        '.about-text',
        '.experience-badge',
        '.social-about',
        '.skills-section',
        '.skill-category',
        '.principle',
        '.principles-cta',
        '.contact-info-card',
        '.contact-form-wrapper',
        '.work-cta',
        '.footer-logo',
        '.footer-links',
        '.footer-social',
        '.footer-bottom'
    ];
    
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    });
    
    const parallaxScroll = rafThrottle(() => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.08);
            const yOffset = scrolled * speed * -0.2;
            shape.style.transform = `translateY(${yOffset}px) rotate(${scrolled * 0.01}deg)`;
        });
    });
    
    window.addEventListener('scroll', parallaxScroll, { passive: true });
}

// =========================================== //
// PORTFOLIO VIDEO AUTOPLAY
// =========================================== //

function observePortfolioVideos() {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            
            if (entry.isIntersecting) {
                if (video.paused && video.readyState >= 3) {
                    video.play().catch(e => {
                        console.log('Portfolio video autoplay prevented:', e);
                        addVideoPlayOverlay(video);
                    });
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, {
        root: null,
        rootMargin: '50px',
        threshold: 0.3
    });
    
    document.querySelectorAll('.portfolio-media video').forEach(video => {
        videoObserver.observe(video);
    });
}

function addVideoPlayOverlay(video) {
    const parent = video.parentElement;
    if (!parent.querySelector('.video-play-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'video-play-overlay';
        overlay.innerHTML = '<i class="fas fa-play"></i>';
        overlay.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px;
            height: 60px;
            background: var(--gradient-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        `;
        
        overlay.addEventListener('click', () => {
            video.play().then(() => {
                overlay.style.display = 'none';
            }).catch(e => {
                console.log('Manual play failed:', e);
            });
        });
        
        parent.style.position = 'relative';
        parent.appendChild(overlay);
    }
}

// =========================================== //
// FIXED 3D CARD SLIDER
// =========================================== //

function initialize3DSliderFixed() {
    const sliderTrack = document.getElementById('sliderTrack');
    if (!sliderTrack) return;
    
    let currentIndex = 0;
    let isAnimating = false;
    let autoSlideInterval;
    let currentCategory = 'all';
    let sliderItems = [];
    
    const categoryDescriptions = {
        'motion': "Smooth motion graphic design, injecting vitality and storytelling into brands.",
        'promotional-flyer': "Eye-catching promotional visuals, effectively boosting brand visibility and conversion.",
        'birthday-flyer': "Custom birthday designs, making every celebration moment unique.",
        'event-flyer': "Professional event visuals, creating anticipation and ensuring participation.",
        'club-flyer': "Energetic nightlife designs, creating unforgettable party atmospheres.",
        'logo': "Strategic brand identity, conveying core values and creating lasting impressions."
    };
    
    function getCategoryTag(category) {
        const tags = {
            'motion': 'Motion Graphics',
            'promotional-flyer': 'Promotional',
            'birthday-flyer': 'Birthday',
            'event-flyer': 'Event',
            'club-flyer': 'Nightlife',
            'logo': 'Branding'
        };
        return tags[category] || 'Design';
    }
    
    function getCurrentCategoryItems() {
        if (currentCategory === 'all') {
            return portfolioItemsData;
        }
        return portfolioItemsData.filter(item => item.category === currentCategory);
    }
    
    function createCards() {
        sliderItems = getCurrentCategoryItems();
        if (sliderItems.length === 0) {
            sliderTrack.innerHTML = '<div class="no-items">No items in this category</div>';
            return;
        }
        
        sliderTrack.innerHTML = '';
        
        const indices = [];
        if (sliderItems.length === 1) {
            indices.push(0, 0, 0);
        } else if (sliderItems.length === 2) {
            indices.push(1, 0, 1);
        } else {
            indices.push(
                (currentIndex - 1 + sliderItems.length) % sliderItems.length,
                currentIndex,
                (currentIndex + 1) % sliderItems.length
            );
        }
        
        indices.forEach((itemIndex, positionIndex) => {
            const item = sliderItems[itemIndex];
            const card = document.createElement('div');
            
            let cardClass = 'slider-card';
            if (positionIndex === 0) cardClass += ' prev';
            if (positionIndex === 1) cardClass += ' active';
            if (positionIndex === 2) cardClass += ' next';
            
            card.className = cardClass;
            card.dataset.index = itemIndex;
            card.dataset.position = positionIndex;
            card.dataset.category = item.category;
            
            perfLoader.preloadMedia(item.image, item.type || 'image');
            
            card.innerHTML = `
                <div class="card-3d-inner">
                    <div class="card-3d-face card-front">
                        <div class="card-media">
                            ${item.type === 'video' 
                                ? `<video src="${item.image}" class="card-3d-video" muted playsinline preload="metadata" loop></video>`
                                : `<img src="${item.image}" alt="${item.title}" class="card-3d-img" loading="lazy">`}
                        </div>
                        <div class="card-overlay">
                            <span class="card-index">${String(itemIndex + 1).padStart(2, '0')}</span>
                            <h4 class="card-3d-title">${item.title}</h4>
                            <p class="card-3d-desc">${categoryDescriptions[item.category] || "Professional design work showcasing creativity and attention to detail."}</p>
                            <span class="card-3d-category">${getCategoryTag(item.category)}</span>
                        </div>
                    </div>
                </div>
            `;
            
            sliderTrack.appendChild(card);
            
            setTimeout(() => {
                const media = card.querySelector(item.type === 'video' ? '.card-3d-video' : '.card-3d-img');
                if (media && item.type === 'video' && positionIndex === 1) {
                    media.setAttribute('autoplay', '');
                    media.setAttribute('loop', '');
                }
            }, 100);
        });
        
        updateIndicatorDots();
    }
    
    function slideNext() {
        if (isAnimating || sliderItems.length === 0) return;
        isAnimating = true;
        
        currentIndex = (currentIndex + 1) % sliderItems.length;
        
        const cards = sliderTrack.querySelectorAll('.slider-card');
        cards.forEach(card => {
            const position = parseInt(card.dataset.position);
            let newPosition = position - 1;
            if (newPosition < 0) newPosition = 2;
            
            card.dataset.position = newPosition;
            
            card.classList.remove('prev', 'active', 'next');
            if (newPosition === 0) card.classList.add('prev');
            if (newPosition === 1) card.classList.add('active');
            if (newPosition === 2) card.classList.add('next');
        });
        
        setTimeout(() => {
            isAnimating = false;
            refreshCardContent();
        }, 600);
    }
    
    function slidePrev() {
        if (isAnimating || sliderItems.length === 0) return;
        isAnimating = true;
        
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        
        const cards = sliderTrack.querySelectorAll('.slider-card');
        cards.forEach(card => {
            const position = parseInt(card.dataset.position);
            let newPosition = (position + 1) % 3;
            
            card.dataset.position = newPosition;
            
            card.classList.remove('prev', 'active', 'next');
            if (newPosition === 0) card.classList.add('prev');
            if (newPosition === 1) card.classList.add('active');
            if (newPosition === 2) card.classList.add('next');
        });
        
        setTimeout(() => {
            isAnimating = false;
            refreshCardContent();
        }, 600);
    }
    
    function refreshCardContent() {
        if (sliderItems.length === 0) return;
        
        const cards = sliderTrack.querySelectorAll('.slider-card');
        
        cards.forEach(card => {
            const position = parseInt(card.dataset.position);
            let itemIndex;
            
            if (sliderItems.length === 1) {
                itemIndex = 0;
            } else if (sliderItems.length === 2) {
                if (position === 0) itemIndex = 1;
                if (position === 1) itemIndex = 0;
                if (position === 2) itemIndex = 1;
            } else {
                if (position === 0) {
                    itemIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
                } else if (position === 1) {
                    itemIndex = currentIndex;
                } else if (position === 2) {
                    itemIndex = (currentIndex + 1) % sliderItems.length;
                }
            }
            
            const item = sliderItems[itemIndex];
            if (!item) return;
            
            card.dataset.index = itemIndex;
            card.dataset.category = item.category;
            
            const indexSpan = card.querySelector('.card-index');
            const titleEl = card.querySelector('.card-3d-title');
            const descEl = card.querySelector('.card-3d-desc');
            const categoryEl = card.querySelector('.card-3d-category');
            
            if (indexSpan) indexSpan.textContent = String(itemIndex + 1).padStart(2, '0');
            if (titleEl) titleEl.textContent = item.title;
            if (descEl) descEl.textContent = categoryDescriptions[item.category] || "Professional design work showcasing creativity and attention to detail.";
            if (categoryEl) categoryEl.textContent = getCategoryTag(item.category);
            
            const mediaContainer = card.querySelector('.card-media');
            if (mediaContainer) {
                const existingMedia = mediaContainer.querySelector('.card-3d-img, .card-3d-video');
                if (existingMedia) {
                    existingMedia.remove();
                }
                
                perfLoader.preloadMedia(item.image, item.type || 'image');
                
                if (item.type === 'video') {
                    const video = document.createElement('video');
                    video.className = 'card-3d-video';
                    video.src = item.image;
                    video.muted = true;
                    video.playsInline = true;
                    video.preload = 'metadata';
                    if (position === 1) {
                        video.setAttribute('autoplay', '');
                        video.setAttribute('loop', '');
                    }
                    mediaContainer.appendChild(video);
                } else {
                    const img = document.createElement('img');
                    img.className = 'card-3d-img';
                    img.src = item.image;
                    img.alt = item.title;
                    img.loading = 'lazy';
                    mediaContainer.appendChild(img);
                }
            }
        });
        
        updateIndicatorDots();
    }
    
    function updateIndicatorDots() {
        if (sliderItems.length === 0) return;
        
        const dots = document.querySelectorAll('.indicator-dots .dot');
        const totalItems = Math.min(sliderItems.length, 4);
        
        const indicatorDots = document.querySelector('.indicator-dots');
        if (indicatorDots.children.length !== totalItems) {
            indicatorDots.innerHTML = '';
            for (let i = 0; i < totalItems; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === currentIndex % totalItems) dot.classList.add('active');
                indicatorDots.appendChild(dot);
            }
        } else {
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentIndex % totalItems) {
                    dot.classList.add('active');
                }
            });
        }
    }
    
    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            slideNext();
        }, 4000);
    }
    
    function bindEvents() {
        const container = document.querySelector('.slider-3d-container');
        if (container) {
            container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
            container.addEventListener('mouseleave', startAutoSlide);
            container.addEventListener('touchstart', () => clearInterval(autoSlideInterval), { passive: true });
            container.addEventListener('touchend', () => {
                setTimeout(startAutoSlide, 3000);
            }, { passive: true });
            
            let touchStartX = 0;
            let touchEndX = 0;
            
            container.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            container.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        slideNext();
                    } else {
                        slidePrev();
                    }
                }
            }
        }
        
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.slider-card.active');
            if (card) {
                e.preventDefault();
                e.stopPropagation();
                
                const itemIndex = parseInt(card.dataset.index);
                const item = sliderItems[itemIndex];
                if (item) {
                    openModal(item.image, item.type || 'image', item.title);
                }
            }
        });
    }
    
    createCards();
    startAutoSlide();
    bindEvents();
    
    window.sliderControls = {
        next: slideNext,
        prev: slidePrev,
        setCategory: (category) => {
            currentCategory = category;
            currentIndex = 0;
            createCards();
            startAutoSlide();
        }
    };
}

// =========================================== //
// SCROLL TO TOP BUTTON
// =========================================== //

function initializeScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);
    
    const toggleScrollButton = () => {
        if (window.pageYOffset > 500) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    };
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', debounce(toggleScrollButton, 100));
    toggleScrollButton();
}

// =========================================== //
// OPTIMIZED PORTFOLIO FUNCTIONS
// =========================================== //

function initializePortfolio() {
    renderPortfolioItems('all');
    setupFilterButtons();
    setupImageModal();
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'portfolio-item scroll-animate';
    div.setAttribute('data-category', item.category);
    
    const categoryTag = getCategoryTagFixed(item.category);
    
    div.innerHTML = `
        <div class="portfolio-media">
            ${item.type === 'video' 
                ? `<video src="${item.image}" muted playsinline class="scroll-animate-video" preload="metadata" loop loading="lazy"></video>`
                : `<img src="${item.image}" alt="${item.title}" class="scroll-animate-image" loading="lazy">`}
            <div class="portfolio-overlay">
                <button class="view-project-btn" data-image="${item.image}" data-type="${item.type || 'image'}" data-title="${item.title}">
                    <i class="fas fa-expand"></i>
                    View Project
                </button>
            </div>
            <span class="portfolio-category-tag">${categoryTag}</span>
        </div>
        <div class="portfolio-item-content">
            <h3>${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
            <a href="#" class="view-details-btn" data-image="${item.image}" data-type="${item.type || 'image'}" data-title="${item.title}">
                View Details <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return div;
}

function getCategoryTagFixed(category) {
    const tags = {
        'motion': 'Motion Graphics',
        'promotional-flyer': 'Promotional',
        'birthday-flyer': 'Birthday',
        'event-flyer': 'Event',
        'club-flyer': 'Nightlife',
        'logo': 'Branding'
    };
    return tags[category] || 'Design';
}

function renderPortfolioItems(filter = 'all') {
    const portfolioContainer = document.getElementById('portfolio-items');
    if (!portfolioContainer) return;
    
    portfolioContainer.innerHTML = '';
    
    const fragment = document.createDocumentFragment();
    let itemsToShow = portfolioItemsData;
    
    if (filter !== 'all') {
        itemsToShow = portfolioItemsData.filter(item => item.category === filter);
    }
    
    itemsToShow.forEach((item, index) => {
        const element = createPortfolioItem(item);
        fragment.appendChild(element);
        
        if (index < 6) {
            perfLoader.preloadMedia(item.image, item.type || 'image');
        }
    });
    
    portfolioContainer.appendChild(fragment);
    
    setTimeout(observePortfolioVideos, 200);
    initializePortfolioAnimations();
}

function initializePortfolioAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (!target.classList.contains('jawdropping-animated')) {
                    target.classList.add('jawdropping-animated');
                }
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
        observer.observe(item);
    });
}

// =========================================== //
// OPTIMIZED FILTER BUTTONS
// =========================================== //

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (!filterButtons.length) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.classList.contains('active') || isFiltering) return;
            
            console.log('Filter clicked:', this.dataset.filter);
            
            filterButtons.forEach(b => {
                b.classList.remove('active');
            });
            
            this.classList.add('active');
            
            quickFilterPortfolio(this.dataset.filter);
        });
    });
}

// =========================================== //
// NAVIGATION
// =========================================== //

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !nav) return;
    
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    hamburger.classList.remove('toggle');
                    hamburger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', debounce(() => {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100));
}

// =========================================== //
// THEME TOGGLE
// =========================================== //

function initializeThemeToggle() {
    const toggleButton = document.getElementById('mode-toggle');
    if (!toggleButton) return;
    
    const body = document.body;
    const icon = toggleButton.querySelector('i');
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        body.classList.add('light-mode');
        icon.className = 'fas fa-sun';
    } else {
        body.classList.remove('light-mode');
        icon.className = 'fas fa-moon';
    }
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-sun';
            showNotification('Light Mode', 'Switched to light theme', 'sun');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-moon';
            showNotification('Dark Mode', 'Switched to dark theme', 'moon');
        }
    });
}

// =========================================== //
// TYPEWRITER EFFECT
// =========================================== //

function initializeTypewriter() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;
    
    const typewriterStrings = [
        "Visual Designer",
        "Motion Graphics Artist",
        "Brand Identity Specialist",
        "Creative Problem Solver",
        "Digital Experience Creator"
    ];
    
    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentString = typewriterStrings[stringIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentString.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % typewriterStrings.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    setTimeout(typeWriter, 1000);
}

// =========================================== //
// CONTACT FORM
// =========================================== //

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!contactForm) return;
    
    if (successMessage) {
        successMessage.style.display = 'none';
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        const name = this.querySelector('#name').value.trim();
        const email = this.querySelector('#email').value.trim();
        const projectType = this.querySelector('#project-type').value;
        const message = this.querySelector('#message').value.trim();
        
        if (!name || !email || !projectType || !message) {
            showNotification('Validation Error', 'Please fill all required fields', 'exclamation-circle');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Invalid Email', 'Please enter a valid email address', 'exclamation-circle');
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                this.style.display = 'none';
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.classList.add('jawdropping-animated');
                }
                
                showNotification('Message Sent Successfully!', 'I will get back to you within 24 hours.', 'check-circle');
                this.reset();
            } else {
                showNotification('Submission Error', 'Failed to send message. Please try again or contact me directly.', 'exclamation-circle');
            }
        } catch (error) {
            showNotification('Network Error', 'Please check your connection and try again.', 'exclamation-circle');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// =========================================== //
// IMAGE MODAL
// =========================================== //

let imageModal = null;
let currentMediaElement = null;
let currentImageSrc = '';
let currentTitle = '';

function setupImageModal() {
    if (!document.querySelector('.image-modal')) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal" aria-label="Close modal">&times;</button>
                <div class="modal-body"></div>
                <div class="modal-controls">
                    <button class="modal-btn download-btn">
                        <i class="fas fa-download"></i>
                        Download
                    </button>
                    <button class="modal-btn secondary fullscreen-btn">
                        <i class="fas fa-expand"></i>
                        Fullscreen
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        const closeBtn = modal.querySelector('.close-modal');
        const modalBody = modal.querySelector('.modal-body');
        const downloadBtn = modal.querySelector('.download-btn');
        const fullscreenBtn = modal.querySelector('.fullscreen-btn');
        
        closeBtn.addEventListener('click', () => {
            closeModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        downloadBtn.addEventListener('click', () => {
            if (currentImageSrc) {
                const link = document.createElement('a');
                link.href = currentImageSrc;
                link.download = currentTitle ? 
                    `${currentTitle.replace(/\s+/g, '_')}.${currentImageSrc.split('.').pop()}` : 
                    `download.${currentImageSrc.split('.').pop()}`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                showNotification('Download Started', 'Your file is being downloaded.', 'download');
            }
        });
        
        fullscreenBtn.addEventListener('click', () => {
            if (currentMediaElement) {
                if (currentMediaElement.requestFullscreen) {
                    currentMediaElement.requestFullscreen();
                } else if (currentMediaElement.webkitRequestFullscreen) {
                    currentMediaElement.webkitRequestFullscreen();
                } else if (currentMediaElement.msRequestFullscreen) {
                    currentMediaElement.msRequestFullscreen();
                }
            }
        });
    }
    
    imageModal = document.querySelector('.image-modal');
    
    document.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.view-project-btn, .view-details-btn');
        if (viewBtn) {
            e.preventDefault();
            e.stopPropagation();
            openModal(viewBtn.dataset.image, viewBtn.dataset.type, viewBtn.dataset.title);
        }
    });
}

function openModal(imageSrc, type, title = '') {
    if (!imageModal) setupImageModal();
    
    currentImageSrc = imageSrc;
    currentTitle = title;
    const modalBody = imageModal.querySelector('.modal-body');
    modalBody.innerHTML = '';
    
    perfLoader.preloadMedia(imageSrc, type === 'video' ? 'video' : 'image');
    
    if (type === 'video') {
        modalBody.innerHTML = `
            <video controls autoplay style="width:100%; height:auto;">
                <source src="${imageSrc}" type="video/mp4">
                Your browser does not support video.
            </video>
        `;
    } else {
        modalBody.innerHTML = `<img src="${imageSrc}" alt="${title}" style="width:100%; height:auto;">`;
    }
    
    currentMediaElement = modalBody.querySelector('video, img');
    
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = '';
        if (currentMediaElement && currentMediaElement.tagName === 'VIDEO') {
            currentMediaElement.pause();
        }
        currentMediaElement = null;
    }
}

// =========================================== //
// NOTIFICATION
// =========================================== //

function showNotification(title, message, icon) {
    const notification = document.createElement('div');
    notification.className = 'notification-popup';
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-text">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
            <button class="close-notification" aria-label="Close notification">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) notification.remove();
            }, 300);
        }
    }, 5000);
}

// =========================================== //
// PARTICLES
// =========================================== //

function initializeParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.alpha = Math.random() * 0.2 + 0.1;
            this.waveOffset = Math.random() * Math.PI * 2;
        }
        
        update(time) {
            this.x += this.speedX + Math.sin(time * 0.001 + this.waveOffset) * 0.1;
            this.y += this.speedY + Math.cos(time * 0.001 + this.waveOffset) * 0.1;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = 'var(--primary)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update(time);
            particle.draw();
        });
        
        animationId = requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    animateParticles(0);
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 200);
    });
}

// =========================================== //
// CLEANUP
// =========================================== //

window.addEventListener('beforeunload', () => {
    perfLoader.destroy();
    if (imageModal && imageModal.classList.contains('active')) {
        closeModal();
    }
});

// =========================================== //
// ACCESSIBILITY IMPROVEMENTS
// =========================================== //

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (imageModal && imageModal.classList.contains('active')) {
            closeModal();
        }
    }
    
    if (e.target.classList.contains('filter-btn')) {
        const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
        const currentIndex = filterButtons.indexOf(e.target);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % filterButtons.length;
            filterButtons[nextIndex].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + filterButtons.length) % filterButtons.length;
            filterButtons[prevIndex].focus();
        }
    }
});