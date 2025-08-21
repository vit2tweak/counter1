# Counter1 Project Documentation

## Project Overview
Counter1 is a React-based application that combines counter functionality with a todo list manager, now featuring secure authentication and protected routes.

## Current Features
- User Authentication:
  - Login/Register functionality
  - Protected routes
  - JWT token-based authentication
  - Session management
- Tabbed interface with two main sections
- Counter Tab:
  - Increment/decrement counter
  - Customizable step amount
  - Input validation
- Todo Tab:
  - CRUD operations for tasks
  - Mark tasks as complete
  - Persistent storage using localStorage

## Technical Stack
- React 18.2.0
- React Router DOM 6.x
- Material-UI 5.x
- JWT for authentication
- LocalStorage for data persistence
- Axios for API calls

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── TodoList.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── ProtectedRoute.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── services/
│   │   └── auth.service.js
│   ├── App.js
│   ├── App.css
│   └── index.js
```

## API Endpoints
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout
- GET /api/auth/verify

## Configuration Details
- JWT_SECRET in .env file
- API_URL in .env file
- Local development server runs on port 3000

## Setup Instructions
1. Clone repository
2. Create .env file with required variables
3. Run `npm install`
4. Run `npm start`

## Known Limitations
- Todo data still stored locally
- No password recovery
- Session expires after 24 hours

## Recent Changes
v3.0.0
- Added authentication system
- Implemented protected routes
- Added login/register functionality
- Created AuthContext for state management

v2.0.1
- Previous updates...

## Future Enhancements
- OAuth integration
- Password recovery
- Email verification
- User profiles
- Cloud synchronization
