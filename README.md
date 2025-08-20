# Counter1

## What's New in v3.0.0
- Added user authentication system
- Protected routes for authenticated users
- New login page with Material-UI components
- Enhanced security with JWT token-based authentication

## Authentication Credentials
- Username: ai-gen-user
- Password: Pen555Bottle++

## Getting Started
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser
5. Log in using the provided credentials

## Features
- Secure authentication system
- Counter with customizable step amount
- Todo list with persistent storage
- Material-UI components for modern UI

## Technical Stack
- React 18.2.0
- React Router DOM 6.x
- Material-UI 5.x
- JWT authentication
- LocalStorage for data persistence

## Migration Notes
- Users will need to log in to access the application
- Existing todo data will persist after upgrade
- No database migration required

## Known Issues
- Authentication uses hardcoded credentials
- Session persistence on page reload not implemented

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.