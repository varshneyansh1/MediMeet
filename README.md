# MediMeet  

MediMeet is a React Native application designed to provide an intuitive user interface for booking online doctor appointments. The app focuses on a responsive and engaging front-end experience with features like appointment scheduling, search functionality, and a top doctors listing page.  

---

## Features   
- **Appointment Scheduling**: Schedule appointments with available slots and a calendar view.  
- **Top Doctors List**: Displays doctors as cards with a search bar and infinite scrolling for easy navigation.  
- **Search Functionality**: Allows users to search for doctors by name or specialty.  
- **Booking Feedback**: Displays toast messages for successful appointment bookings and Snackbar/Alert messages for user feedback on other actions.  

---

## Tech Stack  

- **Framework**: React Native   
- **UI Components**: Custom React Native components  

---



## Installation  

### Prerequisites  

Ensure you have the following installed:  

- Node.js (v16 or higher)  
- npm (v7 or higher) or yarn  
- A mobile emulator (or a physical device for testing)  

### Clone the Repository  

```bash  
git clone https://github.com/your-username/MediMeet.git  
cd MediMeet  


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
# Folder Structure
MediMeet/  
├── src/  
│   ├── assets/  
│   │   └── images/  
│   │       └── logo.png  # Example image file  
│   ├── components/  
│   │   ├── DoctorCard.js       # Component for displaying doctor details  
│   │   ├── DoctorProfile.js    # Component for doctor profile page  
│   │   └── SearchBar.js        # Search bar component  
│   ├── constants/  
│   │   └── colors.js           # File for storing color constants  
│   ├── data/  
│   │   └── doctors.js          # Static data for the list of doctors  
│   ├── screens/  
│   │   ├── HomeScreen.js       # Home screen implementation  
│   │   ├── AppointmentScreen.js # Appointment screen implementation  
│   │   └── DoctorDetailScreen.js # Doctor detail screen implementation  
│   ├── context/  
│   │   └── AppContext.js       # Context API setup for managing global state  
│   └── App.js                  # Main entry point for the application  
├── package.json                # Dependencies and scripts  
└── README.md                   # Documentation  
