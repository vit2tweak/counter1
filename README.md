# Counter1

## What's New in v3.0.0
- Added authentication system with JWT
- Integrated Axios for API communication
- Added protected routes
- Improved error handling

## Breaking Changes
- Requires backend API endpoint configuration
- Authentication required for certain features

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create .env file in project root:
   ```
   REACT_APP_API_URL=your_api_endpoint
   ```
4. Start development server:
   ```bash
   npm start
   ```

## Environment Variables
- REACT_APP_API_URL: Backend API endpoint (required)

## Migration Guide
If upgrading from v2.x:
1. Add new environment variables
2. Update existing components to use authentication
3. Install new dependencies

## Documentation
See program-note.md for detailed documentation