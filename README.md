# Counter1

## What's New in v3.0.0
- Added authentication system
- Protected routes implementation
- Login functionality
- Session management

## Setup
1. Clone the repository
2. Create .env file with required variables:
   ```
   REACT_APP_API_URL=http://localhost:3001
   REACT_APP_JWT_SECRET=your-secret-key
   ```
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Authentication
The application now requires users to log in before accessing the counter and todo features. Authentication is handled using JWT tokens and protected routes.

## Migration Notes
- Existing users will need to create accounts
- Local storage data structure has been updated
- API backend is required for authentication

## Known Issues
- Requires backend service for authentication
- Session expires after 24 hours

## License
MIT