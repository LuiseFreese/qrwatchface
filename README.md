# QR Watchface

A modern, Apple-inspired web app for generating QR codes to use as custom Apple Watch faces. Super handy when socializing - have your LinkedIn (or website) QR code right at your wrist when you want to connect with people easily.

![image of Luise's wrist with an Apple watch showing her QR code](/public/watch_pic.png)

## Purpose

QR Watchface lets you create a QR code for any URL or text and display it on your Apple Watch face. This makes it easy to share links, contact info, event details, or anything else scannable: right from your wrist. Why do we need an app for that? If you want to not only show your QR code but also the time, we need to employ some sorcery 🪄 - this is what this app does: Adding some space around the QR code so that it fits your watch.

![watchface website](/media/qrwatchface-screenshot.png)

## Key Features

- Instantly generate a QR code for any input
- Customize QR and background colors with live accessibility contrast feedback (WCAG 4.5:1)
- Live preview updates as you type and adjust colors
- Download a high-resolution, watch-optimized image with 4:5 aspect ratio, QR at 70% scale, bottom-aligned for clock space
- Step-by-step instructions for setting the QR as your Apple Watch face
- Clean, Apple-style UI with dark mode support

## Architecture

The project is built with React and is fully modularized for maintainability and scalability. Each logical section of the UI is a separate component.

### Component Structure

- `App.js` :  Main entry point, handles routing and global state (e.g., dark mode)
 - `QRCodeGenerator.js`: Main home page component, integrates the QR form and live preview
 - `HomeForm.js`: Handles user input, QR & background color pickers, accessibility checks, live preview, and download logic
 - `HomeHeader.js`: Page title
 - `HomeImage.js`: Apple Watch hero image
 - `HomeDescription.js`: Feature description
 - `HomeFooter.js`: Footer with author info
- `InstructionsPage.js`: Instructions for setting the QR as a watchface
  - `InstructionsHeader.js`: Instructions page title
  - `InstructionsSection.js`: Step-by-step guide and links
  - `StepList.js`: List of steps for the user
- `QRCodeGenerator.css`:  All styling, including dark mode and responsive design

### Routing

- `/` :  Home (QR code generator)
- `/instructions` :  Step-by-step Apple Watch setup guide

### QR Code Generation

- Uses [`qr-code-styling`](https://github.com/kozakdenys/qr-code-styling) for rounded modules, gradient support, and live preview
- Custom QR & background colors are applied in real time
- Accessibility contrast checks enforce WCAG 4.5:1, warning on low contrast
- Downloaded PNG is padded, scaled (70% QR size), bottom-aligned, and exported at a 4:5 aspect ratio for Apple Watch faces

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to launch the app locally
4. Open [http://localhost:3000](http://localhost:3000) in your browser
