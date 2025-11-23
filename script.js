// Travel Recommendation Website JavaScript
// Coursera JavaScript Essential Final Project

// Global variables
let travelData = null;

// Load travel data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTravelData();
    setupEventListeners();
    setupMobileMenu();
    
    // Load featured destinations on home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadFeaturedDestinations();
    }
});

// Load travel data from JSON file
async function loadTravelData() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        if (!response.ok) {
            throw new Error('Failed to load travel data');
        }
        travelData = await response.json();
        console.log('Travel data loaded successfully');
    } catch (error) {
        console.error('Error loading travel data:', error);
        showError('Failed to load travel destinations. Please try again later.');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }

    // Search input - Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterResults(filter);
            
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Footer filter links
    const footerFilters = document.querySelectorAll('.footer-filter');
    footerFilters.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            // Navigate to home page if not already there
            if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
                window.location.href = 'index.html';
                sessionStorage.setItem('filterOnLoad', filter);
            } else {
                filterResults(filter);
                document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Check for stored filter on page load
    const storedFilter = sessionStorage.getItem('filterOnLoad');
    if (storedFilter) {
        sessionStorage.removeItem('filterOnLoad');
        setTimeout(() => {
            filterResults(storedFilter);
        }, 500);
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (!searchTerm) {
        showError('Please enter a search term');
        return;
    }

    if (!travelData) {
        showError('Travel data is still loading. Please try again.');
        return;
    }

    // Search logic
    let results = [];
    
    // Check for category keywords
    if (searchTerm.includes('beach') || searchTerm === 'beaches') {
        results = travelData.beaches;
        updateResultsTitle('Beach Destinations');
    } else if (searchTerm.includes('temple') || searchTerm === 'temples') {
        results = travelData.temples;
        updateResultsTitle('Temple Destinations');
    } else if (searchTerm.includes('country') || searchTerm === 'countries') {
        // Show all cities from all countries
        results = [];
        travelData.countries.forEach(country => {
            results = results.concat(country.cities);
        });
        updateResultsTitle('Country Destinations');
    } else {
        // Search in all categories
        results = searchAllCategories(searchTerm);
        updateResultsTitle(`Search Results for "${searchInput.value}"`);
    }

    displayResults(results);
    
    // Scroll to results
    document.getElementById('recommendations').scrollIntoView({ behavior: 'smooth' });
}

// Search all categories
function searchAllCategories(searchTerm) {
    let results = [];

    // Search beaches
    const beachResults = travelData.beaches.filter(beach =>
        beach.name.toLowerCase().includes(searchTerm) ||
        beach.description.toLowerCase().includes(searchTerm)
    );
    results = results.concat(beachResults);

    // Search temples
    const templeResults = travelData.temples.filter(temple =>
        temple.name.toLowerCase().includes(searchTerm) ||
        temple.description.toLowerCase().includes(searchTerm)
    );
    results = results.concat(templeResults);

    // Search countries and cities
    travelData.countries.forEach(country => {
        if (country.name.toLowerCase().includes(searchTerm)) {
            results = results.concat(country.cities);
        } else {
            const cityResults = country.cities.filter(city =>
                city.name.toLowerCase().includes(searchTerm) ||
                city.description.toLowerCase().includes(searchTerm)
            );
            results = results.concat(cityResults);
        }
    });

    return results;
}

// Filter results by category
function filterResults(category) {
    if (!travelData) {
        showError('Travel data is still loading. Please try again.');
        return;
    }

    let results = [];

    switch(category) {
        case 'beaches':
            results = travelData.beaches;
            updateResultsTitle('Beach Destinations');
            break;
        case 'temples':
            results = travelData.temples;
            updateResultsTitle('Temple Destinations');
            break;
        case 'countries':
            travelData.countries.forEach(country => {
                results = results.concat(country.cities);
            });
            updateResultsTitle('Country Destinations');
            break;
    }

    displayResults(results);
}

// Display results
function displayResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');

    if (!resultsContainer) return;

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    resultsContainer.style.display = 'grid';
    noResults.style.display = 'none';

    // Display each result
    results.forEach(item => {
        const card = createResultCard(item);
        resultsContainer.appendChild(card);
    });
}

// Create result card
function createResultCard(item) {
    const card = document.createElement('div');
    card.className = 'result-card';

    card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}" class="result-image" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800'">
        <div class="result-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
    `;

    return card;
}

// Load featured destinations (for home page)
function loadFeaturedDestinations() {
    if (!travelData) {
        setTimeout(loadFeaturedDestinations, 500);
        return;
    }

    // Show a mix of beaches, temples, and cities
    const featured = [
        ...travelData.beaches.slice(0, 2),
        ...travelData.temples.slice(0, 2),
        ...travelData.countries[0].cities.slice(0, 2)
    ];

    displayResults(featured);
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }

    // Remove active state from filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Reset to featured destinations on home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        updateResultsTitle('Featured Destinations');
        loadFeaturedDestinations();
    }
}

// Update results title
function updateResultsTitle(title) {
    const resultsTitle = document.getElementById('resultsTitle');
    if (resultsTitle) {
        resultsTitle.textContent = title;
    }
}

// Show error message
function showError(message) {
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');

    if (resultsContainer && noResults) {
        resultsContainer.style.display = 'none';
        noResults.style.display = 'block';
        noResults.innerHTML = `<p>${message}</p>`;
    } else {
        alert(message);
    }
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    showFormMessage('Thank you for contacting us! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        const formMessage = document.getElementById('formMessage');
        if (formMessage) {
            formMessage.style.display = 'none';
        }
    }, 5000);
}

// Show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Utility function to get local time for destinations (bonus feature)
function getLocalTime(timezone) {
    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date());
}
