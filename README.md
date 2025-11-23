# ✈️ Travel Recommendation Website
Author Github: [Faisal Hameed](https://github.com/faisalrbk)
**Coursera JavaScript Essential - Final Project**

A dynamic travel recommendation website that helps users discover ideal destinations based on their preferences. The website provides interactive displays with detailed descriptions and multimedia content for beaches, temples, and cities worldwide.

## 🌟 Project Overview

This website offers:
- **Personalized Recommendations**: Search and filter destinations by category
- **Rich Multimedia Content**: High-quality images and detailed descriptions
- **User-Friendly Navigation**: Intuitive interface with responsive design
- **Interactive Search**: Real-time search functionality with dynamic content loading

## 📋 Features Checklist (20 Points Total)

### ✅ Completed Requirements:

1. **GitHub Repository Public URL** (1 point) ✓
2. **Three Main Pages** (3 points) ✓
   - Home page (`index.html`)
   - About Us page (`about.html`)
   - Contact Us page (`contact.html`)
3. **Navigation Bar** (6 points) ✓
   - Present on all pages
   - Links to Home, About Us, and Contact Us
   - Search functionality with Search and Clear buttons
   - Responsive mobile menu
4. **Home Page Introduction** (1 point) ✓
   - Hero section with welcome message
   - Overview of website purpose
5. **About Us Page Elements** (2 points) ✓
   - Mission statement
   - Vision statement
   - Team section with members
   - Values section
6. **Contact Us Email Form** (1 point) ✓
   - Name, email, phone fields
   - Subject dropdown
   - Message textarea
   - Form validation
   - Success/error messages
7. **Beach Recommendations with Images** (2 points) ✓
   - 4 beaches with 2 images each displayed in rotation
   - Detailed descriptions
8. **Temple Recommendations with Images** (2 points) ✓
   - 4 temples with 2 images each displayed
   - Historical information
9. **Country Recommendations with Images** (2 points) ✓
   - 3 countries with 2 cities each
   - Multiple images per destination

## 🗂️ Project Structure

```
javascript essential/
├── index.html              # Home page with hero section and featured destinations
├── about.html              # About Us page with mission, vision, and team
├── contact.html            # Contact page with form and information
├── styles.css              # Complete stylesheet with responsive design
├── script.js               # JavaScript functionality for search and dynamic content
├── travel_recommendation_api.json  # Data file with all destinations
├── images/                 # Folder for local images (currently using external URLs)
│   └── README.md          # Guide for adding local images
└── README.md              # This file

```

## 🚀 How to Run Locally

1. **Clone or Download** this repository to your local machine

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**:
   - Direct: Open `index.html` in browser
   - Local server: Visit `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the `+` icon → `New repository`
3. Name it: `travel-recommendation-website`
4. **IMPORTANT**: Make it **Public**
5. Click `Create repository`

### Step 2: Upload Your Files

#### Option A: Using Git (Recommended)

```bash
# Navigate to your project folder
cd "e:\coursera\javascript essential"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Travel Recommendation Website"

# Link to GitHub repository (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/travel-recommendation-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. On your repository page, click `Add file` → `Upload files`
2. Drag and drop all your project files
3. Click `Commit changes`

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click `Settings` tab
3. Scroll down to `Pages` section (left sidebar)
4. Under `Source`, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click `Save`
6. Wait 2-3 minutes for deployment

### Step 4: Get Your URLs

Your website will be available at:
- **GitHub Repository URL**: `https://github.com/YOUR-USERNAME/travel-recommendation-website`
- **GitHub Pages URL**: `https://YOUR-USERNAME.github.io/travel-recommendation-website/`

**⚠️ IMPORTANT**: Always include `https://` prefix when submitting URLs!

## 🎨 Features Breakdown

### Navigation Bar
- Sticky navigation that stays visible while scrolling
- Logo and brand name
- Three main navigation links (Home, About Us, Contact Us)
- Search input field with Search and Clear buttons
- Responsive hamburger menu for mobile devices

### Home Page
- **Hero Section**: Eye-catching gradient background with main title and description
- **Quick Filters**: Buttons to filter by Beaches, Temples, or Countries
- **Dynamic Results**: Grid layout displaying destination cards
- **Features Section**: Highlights of website benefits
- **Footer**: Comprehensive footer with links and information

### About Us Page
- **Mission Section**: Statement of purpose with supporting image
- **Vision Section**: Future goals and aspirations
- **Team Section**: 4 team member cards with photos and roles
- **Values Section**: Core principles (Personalization, Quality, Trust, Sustainability)

### Contact Us Page
- **Contact Information**: Email, phone, address, and social media
- **Contact Form**: Full-featured form with validation
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Subject dropdown (required)
  - Message textarea (required)
  - Newsletter subscription checkbox
- **FAQ Section**: Common questions and answers
- **Form Validation**: Real-time validation with error messages

### Search Functionality
- Search by keyword across all categories
- Filter by category (Beaches, Temples, Countries)
- Dynamic content loading from JSON file
- Clear function to reset results
- Smooth scrolling to results

## 📊 Data Structure

The `travel_recommendation_api.json` file contains:

```json
{
  "countries": [
    {
      "id": 1,
      "name": "Country Name",
      "cities": [
        {
          "name": "City Name",
          "imageUrl": "URL",
          "description": "Description"
        }
      ]
    }
  ],
  "temples": [...],
  "beaches": [...]
}
```

**Total Destinations**:
- 3 Countries (6 cities total - 2 per country)
- 4 Temples
- 4 Beaches

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Dynamic functionality
- **Fetch API**: Loading JSON data
- **Responsive Design**: Mobile-first approach
- **External Images**: Unsplash API for high-quality photos

## 🎯 Project Requirements Met

| Requirement | Points | Status |
|------------|--------|--------|
| GitHub Repository Public URL | 1 | ✅ |
| Home, About Us, Contact Us Pages | 3 | ✅ |
| Navigation Bar on All Pages | 6 | ✅ |
| Home Page Introduction | 1 | ✅ |
| About Us Page Elements | 2 | ✅ |
| Contact Us Email Form | 1 | ✅ |
| Beach Recommendations (2 images) | 2 | ✅ |
| Temple Recommendations (2 images) | 2 | ✅ |
| Country Recommendations (2 images) | 2 | ✅ |
| **TOTAL** | **20** | **✅** |

## 📝 Submission Checklist

Before submitting your project:

- [ ] Make GitHub repository **PUBLIC**
- [ ] Enable GitHub Pages in repository settings
- [ ] Test GitHub Pages URL in browser
- [ ] Verify all pages load correctly
- [ ] Test search functionality
- [ ] Test contact form
- [ ] Check responsive design on mobile
- [ ] Ensure all images load properly

### URLs to Submit:

1. **Project Title**: Travel Recommendation Website
2. **GitHub Repository URL**: `https://github.com/msami22/TravelRecommendationWebsite`
3. **GitHub Pages URL**: `https://msami22.github.io/TravelRecommendationWebsite/`

**⚠️ Remember to include `https://` prefix!**

## 🐛 Troubleshooting

### Images Not Loading
- Check that `travel_recommendation_api.json` is in the root directory
- Verify external image URLs are accessible
- Check browser console for errors

### Search Not Working
- Ensure `script.js` is properly linked in HTML files
- Check that JSON file loads correctly
- Verify browser console for JavaScript errors

### GitHub Pages Not Deploying
- Wait 3-5 minutes after enabling Pages
- Check that repository is public
- Verify branch is set to `main` and folder is `/ (root)`
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

## 🎓 Learning Outcomes

This project demonstrates:
- DOM manipulation with JavaScript
- Asynchronous data fetching
- Event handling and user interactions
- Responsive web design principles
- Form validation and user feedback
- Project organization and documentation
- Version control with Git and GitHub
- Web deployment with GitHub Pages

## 👨‍💻 Author

Created as part of the Coursera JavaScript Essential Training final project.

## 📄 License

This project is created for educational purposes as part of the Coursera JavaScript Essential course.

---

**Good luck with your submission! 🚀**

If you have any questions, refer to the course materials or reach out to your instructor.
