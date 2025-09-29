# Counter1

A modern, responsive counter application built with React and TypeScript. Features a clean interface with increment, decrement, and reset functionality, plus persistent storage to remember your count between sessions.

## 🚀 Features

- **Interactive Counter**: Increment, decrement, and reset counter values
- **Persistent Storage**: Counter value is saved to localStorage and restored on page reload
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript Support**: Full type safety and better development experience
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Error Handling**: Graceful handling of storage errors and loading states
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with gradients and animations
- **localStorage** - Client-side data persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd counter1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
counter1/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── components/
│   │   ├── Counter.tsx     # Main counter component
│   │   └── Counter.css     # Counter component styles
│   ├── hooks/
│   │   └── useCounter.ts   # Custom counter hook
│   ├── types/
│   │   └── counter.ts      # TypeScript type definitions
│   ├── utils/
│   │   └── storage.ts      # localStorage utilities
│   ├── App.tsx             # Main app component
│   ├── App.css             # App-level styles
│   ├── index.tsx           # App entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎯 Usage

### Basic Operations

- **Increment**: Click the "+" button or press the right arrow key
- **Decrement**: Click the "-" button or press the left arrow key
- **Reset**: Click the "Reset" button or press the "R" key

### Keyboard Shortcuts

- `→` (Right Arrow): Increment counter
- `←` (Left Arrow): Decrement counter
- `R`: Reset counter to zero

### Persistent Storage

The counter value is automatically saved to your browser's localStorage and will be restored when you reload the page or return to the application.

## 🧩 Components

### Counter Component
The main interactive component that displays the counter value and control buttons.

### useCounter Hook
A custom React hook that manages:
- Counter state (value, loading, error states)
- Increment/decrement/reset operations
- localStorage integration
- Error handling

### Storage Utilities
Helper functions for safe localStorage operations with error handling.

## 🎨 Styling

The application features:
- **Gradient Background**: Purple to blue gradient for visual appeal
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

The application is fully responsive and works on:
- iOS Safari
- Android Chrome
- Mobile browsers with JavaScript enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Deployment

To deploy this application:

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting service:
   - **Netlify**: Drag and drop the build folder
   - **Vercel**: Connect your repository for automatic deployments
   - **GitHub Pages**: Use the build folder contents
   - **Firebase Hosting**: Use Firebase CLI

## 🐛 Troubleshooting

### Counter not persisting
- Check if localStorage is enabled in your browser
- Ensure you're not in private/incognito mode
- Clear browser cache and try again

### Application not loading
- Verify all dependencies are installed (`npm install`)
- Check console for JavaScript errors
- Ensure you're using a supported browser version

## 📞 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include browser version and steps to reproduce