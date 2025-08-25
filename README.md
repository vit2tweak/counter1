# Counter1

## What's New in v2.2.0
- Added useAuth custom hook for better authentication management
- Fixed authentication context issues
- Improved error handling
- Updated documentation

## Breaking Changes
- Authentication context now requires useAuth hook
- Login component updated to use new hook

## Migration Guide
If you're upgrading from v2.1.0:
1. Update imports to use new useAuth hook
2. Replace direct AuthContext usage with useAuth hook
3. Ensure AuthProvider is properly wrapped around your app

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`

## Available Scripts
- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Documentation
See program-note.md for detailed documentation.