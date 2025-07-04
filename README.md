# QR Watchface

A modern, Apple-inspired web app for generating QR codes to use as custom Apple Watch faces.

## Purpose

QR Watchface lets you create a QR code for any URL or text and display it on your Apple Watch face. This makes it easy to share links, contact info, event details, or anything else scannable: right from your wrist.

## Key Features

- Instantly generate a QR code for any input
- Download a high-resolution, watch-optimized image
- Step-by-step instructions for setting the QR as your Apple Watch face
- Clean, Apple-style UI with dark mode support

## Architecture

The project is built with React and is fully modularized for maintainability and scalability. Each logical section of the UI is a separate component.

### Component Structure

- `App.js` :  Main entry point, handles routing and global state (e.g., dark mode)
- `QRCodeGenerator.js`: Home page, manages QR code state and composition
  - `HomeHeader.js`: Page title
  - `HomeImage.js`: Apple Watch hero image
  - `HomeDescription.js`: Feature description
  - `HomeForm.js`: Input, QR code rendering, and download button
  - `HomeFooter.js`:  Footer with author info
- `InstructionsPage.js`: Instructions for setting the QR as a watchface
  - `InstructionsHeader.js`: Instructions page title
  - `InstructionsSection.js`: Step-by-step guide and links
  - `StepList.js`: List of steps for the user
- `QRCodeGenerator.css`:  All styling, including dark mode and responsive design

### Routing

- `/` :  Home (QR code generator)
- `/instructions` :  Step-by-step Apple Watch setup guide

### QR Code Generation

- Uses [`qrcode.react`](https://github.com/zpao/qrcode.react) for fast, reliable QR rendering
- Downloaded images are padded and scaled for optimal watchface appearance

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to launch the app locally
4. Open [http://localhost:3000](http://localhost:3000) in your browser
