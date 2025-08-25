# Counter1 Project Documentation

## Project Overview
Counter1 is a React-based application combining counter functionality, todo list management, and user management. The application features a comprehensive login system, user CRUD operations, tabbed interface, and local storage persistence.

## Current Features
- Full user management system
  - Create new users
  - Read user profiles
  - Update user information
  - Delete user accounts
  - Role-based access control
- Authentication system
  - JWT-based authentication
  - Session management via AuthContext
  - Input validation
  - Password hashing
- Tabbed interface with three main sections
- Counter Tab:
  - Increment/decrement counter
  - Customizable step amount
  - Input validation
- Todo Tab:
  - CRUD operations for tasks
  - Mark tasks as complete
  - Persistent storage
- User Management Tab:
  - User list view
  - User creation form
  - Edit user modal
  - Delete confirmation

## Technical Stack
- React 18.2.0
- React Router DOM 6.x
- Material-UI 5.x
- LocalStorage for data persistence
- JWT for authentication
- Bcrypt for password hashing
- ESLint for code quality
- Prettier for formatting

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Counter.js
│   │   ├── TodoList.js
│   │   ├── Login.js
│   │   ├── UserList.js
│   │   ├── UserForm.js
│   │   ├── UserEdit.js
│   │   └── TabPanel.js
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── UserContext.js
│   ├── services/
│   │   ├── userService.js
│   │   └── authService.js
│   ├── utils/
│   │   ├── validation.js
│   │   └── encryption.js
│   ├── App.js
│   └── index.js
```

## API Endpoints (LocalStorage-based)
- /api/users
  - GET: List all users
  - POST: Create new user
- /api/users/:id
  - GET: Get user details
  - PUT: Update user
  - DELETE: Remove user
- /api/auth
  - POST /login: User authentication
  - POST /logout: Session termination

## Database Schema (LocalStorage)
```javascript
User {
  id: string,
  username: string,
  password: string (hashed),
  email: string,
  role: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Configuration Details
- Development server: Port 3000
- JWT expiration: 24 hours
- Password requirements:
  - Minimum 8 characters
  - At least one uppercase
  - At least one number
- LocalStorage keys:
  - 'users': User data
  - 'todos': Todo items
  - 'userSession': Auth data

## Known Limitations
- Local storage only persistence
- Limited session management
- No email verification
- No password recovery

## Setup Instructions
1. Clone repository
2. Run `npm install`
3. Run `npm start`
4. Access at http://localhost:3000

## Recent Changes
v3.0.0
- Added complete user management system
- Implemented role-based access control
- Enhanced authentication security
- Added password hashing
- New user management interface

v2.2.0
- Added comprehensive code comments
- Improved error handling
- Enhanced input validation

## Future Enhancements
- Backend integration
- Database migration
- Email verification
- Password recovery
- Enhanced security features
- Activity logging
- User preferences
- Data export/import
