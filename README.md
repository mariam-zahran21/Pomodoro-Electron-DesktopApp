# Pomodoro Electron Desktop App

A minimalist, premium Pomodoro timer built with Electron. This app features a frameless pink aesthetic, custom window controls, and built-in sound alerts.
![Pomodoro App](https://raw.githubusercontent.com/mariam-zahran21/Pomodoro-Electron-DesktopApp/main/dufhdjk.PNG)
## Features
- **Frameless Design**: A sleek, minimal interface.
- **Custom Controls**: Integrated Minimize and Close buttons.
- **Sound Alerts**: Procedural sound effects when the timer starts and finishes.
- **Portable Version**: Can be built into a single executable file for your desktop.

## Prerequisites
Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mariam-zahran21/Pomodoro-Electron-DesktopApp.git
   cd Pomodoro-Electron-DesktopApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Command Lines

### Run in Development
To launch the app and start using it immediately:
```bash
npm start
```

### Build for Desktop (Windows)
To create a portable `.exe` file that you can place on your desktop:
```bash
npm run dist
```
*Note: If you encounter a "symbolic link" error during build, try running your terminal as **Administrator** or enabling **Developer Mode** in Windows Settings.*

## Project Structure
- `main.js`: Electron's main process configuration.
- `preload.js`: Bridge between the system and the web storage.
- `index.html`: The app's structure.
- `styles.css`: The "Pink Aesthetic" styling.
- `script.js`: Timer logic and sound generation.
- `icon.png`: Custom app icon.


