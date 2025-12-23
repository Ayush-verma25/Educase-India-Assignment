# Project Setup
    
    To run this project, follow these steps:
    
    1. Extract the zip file.
    2. Run `npm install` to install dependencies.
    3. Run `npm run dev` to start the development server.


    🟣 PopX — Modern React App by Ronit Kumar Das
🚀 Overview

PopX is a sleek, mobile-responsive React application built by Ronit Kumar Das.
It provides a smooth onboarding flow — starting from a Welcome page to Login, Registration, and a personalized Profile interface.

The app focuses on clean UI, seamless routing, and component reusability using React and TailwindCSS.

🧭 Navigation Flow

The user journey in PopX follows these simple and intuitive steps:

🏠 1. Welcome Page (/)

First screen users see upon launching the app.

Presents two main options:

Login → Existing users can access their account.

Create Account → New users can register.

Simple, minimal design to match mobile-first UX.

🔑 2. Login Page (/login)

Users enter their email and password to sign in.

Form validation ensures that all fields are filled correctly.

Once logged in successfully → navigates to the Profile Page.

Includes “Back” and “Next” navigation buttons for testing and design consistency.

📝 3. Register Page (/register)

Allows users to create an account by providing:

Full Name

Phone Number

Email Address

Password

Company Name (optional)

Agency Selection (Yes/No)

Displays a success message once the form is submitted:

✅ “Account created successfully! Redirecting to profile...”

Automatically redirects to /profile after 2 seconds.

👤 4. Profile Page (/profile)

Displays a simple account view (mock user profile).

Includes a placeholder avatar section.

Provides navigation to settings or logout.

After logging out → user is redirected back to the Login Page.

⚙️ Tech Stack
Category	Tools
Frontend Framework	React (Vite)
Routing	React Router DOM
Styling	TailwindCSS
Icons	Lucide React
Build Tool	Vite
Deployment	Vercel
📂 Folder Structure
popx/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── NavigationButtons.jsx
│   ├── pages/
│   │   ├── Welcome.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md


🧑‍💻 How to Run Locally
1. Clone the Repository
2. https://github.com/Ronit12792/educase.git

cd popx-react

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

4. Open in Browser

Go to:
👉 http://localhost:5173

🌐 Deployment

The app can be easily deployed using Vercel, Netlify, or GitHub Pages.
For Vercel:

vercel --prod

✨ Key Features

Clean & Responsive Mobile-First Design

Smooth Page Navigation

Form Validation for Login & Register

Success Message after Account Creation

Modular Components (Reusable Form Inputs, Buttons)

Simple Profile Page with Logout Functionality

SEO-Friendly HTML Metadata

👨‍💻 Author

Ayush Verma
Frontend Developer | MERN Stack Developer
