# TWOWAGER - Casino Website

## Overview
TWOWAGER is an online platform providing access to sportsbooks, casinos, poker, and horse betting. It features multiple gaming categories including sports, casino games, and horse racing. This repository hosts the code for the TWOWAGER website, built using React.js and React Router.

---

## Features

- **Home Page**: Displays introductory content with video backgrounds for different gaming categories.
- **Casino Page**: Dedicated section for casino games.
- **Sports Page**: Section showcasing various sports betting options.
- **Horses Page**: Section for horse racing bets.
- **Responsive Navigation**: Includes a Navbar with dynamic routing for various pages.
- **Video Integration**: Uses embedded videos as clickable items for engaging content.
- **User Engagement**: Provides access to join the platform via a dedicated "Join Now" button that opens a link in a new iframe.

---

## Technologies Used

- **React.js**: JavaScript library for building the user interface.
- **React Router**: For managing page navigation and routing.
- **CSS**: Styling for components and pages.
- **HTML5 Video**: For embedding interactive videos on the homepage.

---

## Project Structure

```bash
├── src/
│   ├── components/
│   │   ├── Casino.jsx
│   │   ├── Header.jsx
│   │   ├── MainHeader.jsx
│   │   ├── HorsesBanner.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── casino/
│   │   │   └── Casino.jsx
│   │   ├── sports/
│   │   │   └── Sport.jsx
│   │   ├── horses/
│   │   │   └── Horses.jsx
│   └── App.jsx
└── public/
    ├── index.html
    └── assets/
        └── images/
        └── videos/
