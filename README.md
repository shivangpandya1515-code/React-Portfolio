# 💼 Shivang — Developer Portfolio

A modern, responsive and professional developer portfolio website built with **React.js, Bootstrap 5, React Icons and CSS3**.

This portfolio is designed to showcase my skills, projects, professional information and contact details through a clean, modern and responsive dark-themed interface.

---

## 🌐 GitHub Link

**GitHub Repository:** 

---

## 📌 Project Overview

This project is a personal developer portfolio website created to showcase my frontend development skills and projects.

The website uses a modern dark UI with a purple gradient theme. It is developed using reusable React functional components and Bootstrap's responsive grid system.

The main goal of this project is to create a professional online portfolio that can be used to present my technical skills, projects and development experience.

---

## ✨ Features

* Modern dark-themed user interface
* Fully responsive design
* React.js component-based architecture
* Bootstrap 5 responsive grid system
* React Icons integration
* Bootstrap Icons integration
* Sticky navigation header
* Hero/Home section
* About Me section
* Skills section with progress bars
* Projects showcase
* Contact section
* Social media icons
* Hire Me button
* View My Work button
* Download CV button
* Responsive project cards
* Modern purple gradient design
* Clean and reusable component structure

---

# 🛠️ Technologies Used

## Frontend Technologies

* React.js
* JavaScript ES6+
* HTML5
* CSS3

## UI & Styling

* Bootstrap 5
* Bootstrap Icons
* React Icons
* CSS3 Gradients
* Bootstrap Utility Classes

## Development Tools

* Visual Studio Code
* Git
* GitHub
* Vite
* npm

---

# 📂 Project Structure

```
portfolio/
│
├── public/
│   ├── Hero-img.jpeg
│   ├── Bike-project.png
│   ├── E-commerce.png
│   └── Library Manegement System.png
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Footer.jsx
│   │   └── Style.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧩 Website Sections

## 1. Header

The Header component provides the main navigation of the portfolio website.

### Includes

* Shivang Logo
* Home
* About
* Skills
* Projects
* Contact
* Hire Me button

The header uses Bootstrap's `sticky-top` class to remain visible while scrolling.

The navigation links use section IDs to move users directly to different sections of the website.

---

## 2. Home Section

The Home section is the main hero section of the portfolio.

It introduces the developer with a professional headline and short description.

### Includes

* Web Developer badge
* Developer introduction
* Shivang name
* Professional tagline
* Short introduction
* View My Work button
* Download CV button
* Technologies I Work With
* Developer image

### Technologies Displayed

* HTML
* CSS
* JavaScript
* React
* Git

---

## 3. About Section

The About section provides information about the developer and highlights important professional statistics.

### Includes

* About Me badge
* Professional introduction
* Experience information
* Projects completed
* Happy clients
* Client satisfaction
* Learn More About Me button

The section uses Bootstrap's responsive row and column system to create a clean two-column layout.

---

## 4. Skills Section

The Skills section displays the developer's technical skills using technology icons and Bootstrap progress bars.

### Skills

| Technology | Level |
| ---------- | ----- |
| HTML       | 95%   |
| CSS        | 90%   |
| JavaScript | 85%   |
| Bootstrap  | 90%   |
| React      | 75%   |
| Git        | 85%   |

Each skill contains:

* Technology icon
* Skill name
* Skill percentage
* Progress bar

---

# 🚀 Projects Section

The Projects section showcases some of my recent development projects.

Each project card contains:

* Project image
* Project number
* Project name
* Project description
* GitHub repository link

---

## 01 — Bike Project

A Royal Enfield inspired bike e-commerce platform.

### Description

The Bike Project is a web-based project inspired by the Royal Enfield motorcycle website. It provides a modern interface for displaying bike-related information and products.

### Technologies

* HTML
* CSS
* JavaScript

### GitHub Repository

https://github.com/shivangpandya1515-code/Bike-Project.git

---

## 02 — E-Commerce Platform

A JavaScript-based e-commerce platform containing multiple products.

### Description

The E-Commerce project demonstrates product listing and shopping-related functionality using JavaScript.

### Technologies

* HTML
* CSS
* JavaScript

### GitHub Repository

https://github.com/shivangpandya1515-code/Java-Script-Final-Project.git

---

## 03 — Library Management System

A Library Management System for managing and displaying book information.

### Description

This project provides a simple interface for managing library-related information and displaying available books.

### Technologies

* HTML
* CSS
* JavaScript

### GitHub Repository

https://github.com/shivangpandya1515-code/Library-Management-System.git

---

# 📱 Responsive Design

The website is designed to work across multiple screen sizes.

### Supported Devices

* Mobile phones
* Tablets
* Laptops
* Desktop computers

Bootstrap responsive classes are used throughout the project to create adaptable layouts.

Examples of responsive Bootstrap classes used in the project include:

* `col-12`
* `col-md-6`
* `col-lg-4`
* `d-none`
* `d-lg-block`
* `text-center`
* `text-lg-start`
* `justify-content-center`
* `justify-content-lg-start`

---

# 🎨 Design System

The portfolio follows a modern dark-themed design with purple gradient highlights.

### Primary Background

#020817

### Secondary Background

#030c23

### Card Background

#07101f

### Primary Purple

#6d5dfc

### Secondary Purple

#8b5cf6

### Text Gray

#9ca3af

### Gradient

linear-gradient(to right, #6d5dfc, #f45cf6)

The gradient is mainly used for important buttons and visual highlights.

---

# ⚛️ React Component Architecture

The application follows a reusable component-based architecture.

```
App
│
├── Header
│
├── Home
│
├── About
│
├── Skills
│
├── Projects
│
└── Footer
```

The main `App.jsx` file imports and renders all major website components.

This structure improves:

* Code organization
* Reusability
* Maintainability
* Scalability
* Component management

---

# 🔗 Navigation System

The website uses HTML section IDs for navigation.

### Sections

* #home
* #about
* #skills
* #projects
* #contact

Navigation links are connected to these section IDs.

For example:

`<a href="#projects">Projects</a>`

This allows users to navigate directly to the Projects section.

---

# 📦 Installation & Setup

Follow the steps below to run this project on your local computer.

## Step 1 — Clone the Repository

```
git clone YOUR_GITHUB_REPOSITORY_URL
```

## Step 2 — Open the Project Folder

```
cd portfolio
```

## Step 3 — Install Dependencies

```
npm install
```

## Step 4 — Install Bootstrap

```
npm install bootstrap
```

## Step 5 — Install React Icons

```
npm install react-icons
```

## Step 6 — Install Bootstrap Icons

```
npm install bootstrap-icons
```

## Step 7 — Start the Development Server

```
npm run dev
```

The project will start using the Vite development server.

---

# 📦 Main Dependencies

The project uses the following major dependencies:

* React
* React DOM
* Bootstrap
* Bootstrap Icons
* React Icons

The exact package versions depend on the project's `package.json` file.

---

# 🖼️ Project Assets

The portfolio uses custom image assets for the Home and Projects sections.

### Assets

* Hero-img.jpeg
* Bike-project.png
* E-commerce.png
* Library Manegement System.png

These images are used to improve the visual presentation of the portfolio and project cards.

---

# 📚 Learning Outcomes

By developing this project, I practiced and improved my understanding of:

* React.js
* JSX
* Functional Components
* Component-Based Architecture
* Bootstrap 5
* Responsive Web Design
* CSS3
* React Icons
* Bootstrap Icons
* Git
* GitHub
* Vite
* npm
* Frontend UI Development
* Website Layout Design
* Responsive Grid Systems

---

# 🎯 Project Goals

The main goals of this portfolio project are:

1. Create a professional developer portfolio.
2. Showcase frontend development skills.
3. Display completed projects.
4. Practice React component architecture.
5. Learn responsive design using Bootstrap.
6. Improve UI and UX design skills.
7. Create a professional online developer presence.
8. Provide contact information for professional communication.

---

# 💻 Development

To run the project in development mode:

```
npm run dev
```
---

# 👨‍💻 Author

## Shivang Pandya

**Web Developer | React Developer**

I am a passionate web developer interested in creating modern, responsive and user-friendly web applications using frontend technologies.

### Technical Skills

* HTML
* CSS
* JavaScript
* Bootstrap
* React.js
* Git
* GitHub

---

# 📬 Contact

### Email

[shivangpandya1515@gmail.com](mailto:shivangpandya1515@gmail.com)

### Phone

+91 9909560450

### GitHub

https://[github.com/shivangpandya1515-codethis](https://github.com/shivangpandya1515-code)

---

# ⭐ Support

If you like this project, please consider giving the repository a ⭐ on GitHub.

Your support and feedback are appreciated.

---

© 2026 Shivang Pandya. All Rights Reserved.