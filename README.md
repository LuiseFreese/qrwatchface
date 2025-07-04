# QR Watchface

A modern, Apple-inspired web app for generating QR codes to use as custom Apple Watch faces. Super handy when socializing - have your LinkedIn (or website) QR code right at your wrist when you want to connect with people easily.

**🚀 Use it now: [https://qrwatchface.netlify.app/](https://qrwatchface.netlify.app/)**

![image of Luise's wrist with an Apple watch showing her QR code](/public/watch_pic.png)

## Purpose

QR Watchface lets you create a QR code for any URL or text and display it on your Apple Watch face. This makes it easy to share links, contact info, event details, or anything else scannable: right from your wrist. Why do we need an app for that? If you want to not only show your QR code but also the time, we need to employ some sorcery 🪄 - this is what this app does: Adding some margin around the QR code so that it fits your watch.

## Key Features

- Instantly generate a QR code for any input
- Download a high-resolution, watch-optimized image
- Step-by-step instructions for setting the QR as your Apple Watch face
- Clean, Apple-style UI with dark mode support
- No installation required - works in any browser

## How to Use

1. Visit [https://qrwatchface.netlify.app/](https://qrwatchface.netlify.app/)
2. Enter your URL, text, or contact information
3. Download the generated QR code image
4. Follow the step-by-step instructions to set it as your Apple Watch face
5. Enjoy your custom QR watchface!

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

## Contributing

Want to contribute to QR Watchface? Great! Here's how to get started:

### Development Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to launch the app locally
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Pull Requests

Feel free to submit pull requests for bug fixes, new features, or improvements. Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is open source and available under the [MIT License](LICENSE).

Documentation written with GitHub Copilot 😛

