# Setup
# 1. Create a new React app
npx create-react-app my-app

# 2. Change into the project directory
cd my-app

# 3. Install React Testing Library and Jest (Jest comes with CRA, but you can update/install if needed)
npm install --save-dev @testing-library/react @testing-library/jest-dom

# 4. (Optional) Install user-event for more advanced testing interactions
npm install --save-dev @testing-library/user-event

# 5. Start the development server
npm start

# 6. Run tests
npm test