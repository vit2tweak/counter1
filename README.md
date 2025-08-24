# Counter1

## What's New in v3.0.0
- Added user authentication system
- Integrated cloud synchronization
- Added Axios for API communication
- Updated all dependencies to latest versions

## Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with:
   ```
   REACT_APP_API_URL=your_api_url
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Migration Notes
- Version 3.0.0 requires a backend API for authentication
- Users need to create an account to use cloud features
- Local storage is still used as fallback for offline mode

## Documentation
See program-note.md for detailed documentation