# Furever Match

Furever Match is an application that helps connect people with animals available for adoption.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Frontend Setup](#frontend-setup)
- [Android Studio Setup](#AndroidStudio-setup)

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (preferably version 16 or higher)
- Ionic CLI
- Android Studio

### Frontend Setup

1. From the project root:

   cd furever-match

2. Install the dependencies:

   npm install

3. Start the frontend application:

   npm run serve
   ionic serve

The application should now be running at http://localhost:<port>.

### Android Studio Setup

1. From the project root:

   cd furever-match
   
2. Add the android folder: 

   npx cap add android

3. Sync the Android project:

   npx cap sync android

4. Open the project on Android Studio:

   npx cap open Android

5. Once the project is open in Android Studio, you can run it either on an Android Emulator or a physical Android device.
