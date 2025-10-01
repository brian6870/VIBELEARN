# VibeLearn Mini - Interactive E-Learning Platform

A modern, interactive e-learning platform built with vanilla JavaScript, featuring beautiful animations, user authentication, and comprehensive course management.


## 🚀 Features

### ✨ Core Features
- **Interactive Course Browser** - Browse available courses with beautiful card layouts
- **Lesson Progress Tracking** - Track your progress through individual lessons and courses
- **User Authentication** - Google Sign-in integration for personalized learning
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### 🎯 Learning Experience
- **Dual Learning Modes** - Switch between detailed lesson content and interactive flashcards
- **Rich Lesson Content** - Comprehensive tutorials with code examples and explanations
- **Interactive Flashcards** - Study key concepts with flip-card functionality
- **Progress Visualization** - Visual progress bars and completion badges
- **Achievement Celebrations** - Confetti animations when completing courses

### 🎨 User Interface
- **Modern Glassmorphism Design** - Beautiful translucent elements with backdrop filters
- **Animated Background** - Floating bubbles create an engaging learning environment
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Dark Theme** - Easy-on-the-eyes color scheme optimized for learning

## 📚 Available Courses

### 1. Introduction to HTML
- Lesson 1: What is HTML?
- Lesson 2: Basic HTML Tags
- Lesson 3: Creating Links and Navigation
- Lesson 4: HTML Forms and Inputs
- Lesson 5: Semantic HTML Elements

### 2. CSS Fundamentals
- Lesson 1: CSS Selectors and Properties
- Lesson 2: The Box Model
- Lesson 3: CSS Positioning
- Lesson 4: Flexbox Layout
- Lesson 5: Responsive Design with Media Queries

### 3. JavaScript Basics
- Lesson 1: Variables and Data Types
- Lesson 2: Functions and Scope
- Lesson 3: DOM Manipulation
- Lesson 4: Event Handling
- Lesson 5: Introduction to ES6 Features

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Authentication**: Google Identity Services
- **Storage**: Browser localStorage for progress persistence
- **Animations**: Canvas Confetti, CSS Animations
- **Icons**: Emoji-based icon system
- **Fonts**: Inter font family

## 🎮 How to Use

### Getting Started
1. **Sign In**: Click the Google Sign-in button to authenticate
2. **Browse Courses**: View all available courses on the homepage
3. **Select a Course**: Click "View Course" to see course details
4. **Start Learning**: Click "Study Lesson" to begin a lesson

### Learning Modes
- **📖 Lesson Content**: Read detailed explanations with code examples
- **🎴 Study Flashcards**: Test your knowledge with interactive flip cards
- **Toggle Between Modes**: Use the mode buttons to switch views

### Progress Tracking
- **Lesson Completion**: Mark lessons as complete individually
- **Course Progress**: Visual progress bar shows overall completion
- **Automatic Saving**: Progress is automatically saved to your account
- **Achievement Badges**: Earn badges for completed courses

## 📁 Project Structure
vibelearn-mini/
│
├── index.html          # Main HTML file
├── style.css           # Complete styling with animations
├── script.js           # Application logic and functionality
│
├── 📋 Features:
│   ├── User authentication
│   ├── Course management
│   ├── Progress tracking
│   ├── Lesson content
│   ├── Flashcards system
│   └── Responsive design
│
└── 🎨 Design:
    ├── Glassmorphism UI
    ├── Animated background
    ├── Smooth transitions
    └── Mobile-responsive
    
## 🚀 Installation & Setup

### Local Development
1. Clone or download the project files
2. Ensure all three files are in the same directory:
   - `index.html`
   - `style.css` 
   - `script.js`
3. Open `index.html` in a modern web browser
4. Sign in with Google to start learning

### Browser Requirements
- Modern browser with ES6+ support
- JavaScript enabled
- localStorage support
- Google Sign-in access

## 🔧 Customization

### Adding New Courses
Edit the `coursesData` array in `script.js`:

```javascript
{
    id: 4,
    title: "Your Course Title",
    description: "Course description...",
    shortDescription: "Brief description...",
    image: "https://picsum.photos/400/200?random=4",
    completed: false,
    lessons: [
        {
            title: "Lesson 1: Your Lesson",
            completed: false,
            content: `Your lesson content with HTML...`,
            notes: [
                { front: "Question?", back: "Answer!" }
            ]
        }
    ]
}