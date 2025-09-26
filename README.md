<<<<<<< HEAD
# MentorLink - Professional Mentorship Platform

A comprehensive single-page application for connecting mentees with experienced mentors, featuring role-based authentication, interactive messaging, and career development tools.

## 🏗️ Project Structure

```
mentorlink/
├── index.html                 # Main landing page with all sections
├── assets/
│   └── images/
│       ├── logo.png          # Primary logo
│       └── logo1.png         # Secondary logo
├── css/
│   └── style.css            # Main stylesheet with complete design system
├── js/
│   └── script.js            # Core JavaScript functionality
├── pages/
│   ├── login.html           # Authentication page
│   ├── student_dashboard.html # Student user dashboard
│   ├── mentor_dashboard.html  # Mentor user dashboard
│   ├── mentors.html         # Mentor discovery page
│   ├── chat.html            # Messaging interface
│   ├── events.html          # Events and workshops
│   ├── resources.html       # Resource library
│   ├── skill_assessment.html # Career skill assessment
│   └── career_suggestions.html # AI-powered career recommendations
├── components/              # Reusable HTML components (future use)
└── README.md               # This file
```

## 🚀 Features

### Single-Page Landing Experience
- **Hero Section**: Compelling value proposition and call-to-action
- **About Section**: Company mission, statistics, and value highlights
- **How It Works**: Step-by-step process explanation
- **Services**: Comprehensive service offerings
- **Testimonials**: Social proof and user success stories
- **Contact**: Complete contact form and business information

### Authentication System
- **Demo Authentication**: No real credentials required
- **Role-Based Access**: Student and Mentor user types
- **Protected Routes**: Secure pages requiring authentication
- **Session Management**: LocalStorage-based session handling

### Core Functionality
- **Mentor Discovery**: Advanced search and filtering
- **Real-time Chat**: Messaging between mentors and mentees
- **Video Calls**: Integrated video session booking
- **Skill Assessment**: Interactive career evaluation tool
- **Event Management**: Workshop and webinar listings
- **Resource Library**: Curated career development materials

## 🎨 Design System

The project uses a consistent design system with:
- **Color Palette**: Primary blue (#007BFF), professional grays
- **Typography**: Work Sans for headings, Noto Sans for body text
- **Components**: Reusable cards, buttons, forms, and navigation
- **Responsive Design**: Mobile-first approach with breakpoints
- **Icons**: Font Awesome 6.4.0 integration

## 🔧 Technical Implementation

### CSS Architecture
- Modern CSS with custom properties (CSS variables)
- Flexbox and CSS Grid for layouts
- Smooth scroll behavior
- Responsive breakpoints for mobile/tablet/desktop

### JavaScript Features
- ES6+ modern JavaScript
- LocalStorage for demo authentication
- Dynamic DOM manipulation
- Event delegation and handling
- Smooth scrolling navigation

### Authentication Flow
1. User selects role (Student/Mentor) on login page
2. Any credentials accepted (demo mode)
3. Role stored in localStorage
4. Navigation dynamically updated based on auth state
5. Protected pages redirect to login if unauthenticated

## 🌐 Page Navigation

### Public Pages (No Authentication Required)
- `index.html` - Main landing page
- `pages/login.html` - Authentication portal
- `pages/mentors.html` - Browse mentors
- `pages/events.html` - View events
- `pages/resources.html` - Access resources

### Protected Pages (Authentication Required)
- `pages/student_dashboard.html` - Student control panel
- `pages/mentor_dashboard.html` - Mentor control panel
- `pages/chat.html` - Messaging interface
- `pages/skill_assessment.html` - Career assessment tool
- `pages/career_suggestions.html` - Personalized recommendations

## 🎯 Usage Instructions

### Development Setup
1. Clone or download the project
2. Open `index.html` in a modern web browser
3. No build process or server required (static site)

### Testing Authentication
1. Navigate to `pages/login.html`
2. Select "I'm a Student" or "I'm a Mentor"
3. Enter any email/password combination
4. Click "Log In" to access dashboard

### Navigation Testing
1. Use the main navigation to jump between sections
2. Test smooth scrolling behavior
3. Verify responsive design on different screen sizes
4. Test protected route redirects

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 992px
- **Desktop**: > 992px

Grid layouts automatically adjust for optimal viewing on all devices.

## 🔮 Future Enhancements

- Real authentication with backend integration
- Database-driven mentor/event/resource management
- Real-time chat with WebSocket implementation
- Video calling integration (WebRTC)
- Payment processing for premium features
- Advanced matching algorithms
- Push notifications
- Mobile app development

## 📄 License

This is a prototype/demo project. All rights reserved.

---

**MentorLink** - Connecting Ambition with Experience
=======
# 🌐 HCI Module Project – Group J  

![Project Banner](https://placehold.co/1200x300/2e026d/FFFFFF?text=HCI+Project+-+Group+J)

# 📝 Selected Problem Card: **P3 – Lack of mentors and career advice for students** 
 
## 🎯 Project Goal  

The goal of this activity is to design a **digital solution** that addresses a **real problem faced by Sri Lankans**. 
<br>

## 📖 Project Overview  
This repository contains the **prototype and design files** for our **Human-Computer Interaction (HCI) module project**.  
Our group (Group J) collaboratively designed a **web application prototype** that focuses on usability, accessibility, and modern design principles.  

The project highlights:  
- 🎨 **User-centered design** approach  
- 📱 **Responsive web layouts** for different devices  
- 🧩 **Interactive prototypes** included  
- 🔍 **Focus on HCI principles** such as consistency, feedback, and error prevention
  
### Why This Problem Matters in Sri Lanka  
- 🎓 Many students finish **university** without structured **career guidance**.  
- 🧭 Lack of **mentorship programs** and **accessible career advice**.  
- 📉 Absence of reliable information about **skills and career paths**.  
- 🤔 Leads to **uncertainty**, **unemployment**, and **skill–industry mismatches**.  

### 💡 Our Proposed Solution  
We propose a **digital guidance and skill-matching platform** that:  
- 👩‍🏫 Connects **students with mentors**.  
- 🛠️ Provides insights on **in-demand skills**.  
- 🎯 Suggests **career pathways** aligned with student interests.  
- 🎓 Shares updates on **workshops,events, internships, and job opportunities**.  

This platform aims to **bridge the gap** between **education and industry**, empowering Sri Lankan students to make better career decisions.  

---

⭐ *Empowering students with the right guidance for a brighter future!* 

## 👨‍👩‍👧‍👦 Group Members (Group J)

1. 🎓 **D.M.P.A. Wijekoon** – `32855`  
2. 🎓 **N.A.O.N. Perera** – `32098`  
3. 🎓 **W.A.I.N. Weerasinghe** – `34001`  
4. 🎓 **T.C.A. Fernando** – `32922`  
5. 🎓 **D.G.D.M. Samarasinghe** – `34170`  
6. 🎓 **K.E.I. Kovilawatththa** – `32500`  
7. 🎓 **K.L.Y.K. Lekamge** – `32476`  
8. 🎓 **B.A.H.T. Kumari** – `33061`  
9. 🎓 **D.P.S. Senarathne** – `32814`  
10. 🎓 **R.S.D. Senarathna** – `32837`
>>>>>>> edb19881563696441475f52b1c0467ff3c0f99b9
