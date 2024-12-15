const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const createFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

const createFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};

const generateBackend = (basePath) => {
  console.log('Creating Express.js backend...');

  const folders = ['src', 'utils', 'models', 'controllers', 'routes', 'config'];
  folders.forEach((folder) => createFolder(path.join(basePath, folder)));

  // Ensure the routes folder exists before creating files
  createFolder(path.join(basePath, 'src', 'routes'));

  createFile(
    path.join(basePath, 'src', 'index.js'),
    `const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routes = require('./routes');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api', routes);

app.listen(process.env.PORT || 5000, () => {
  console.log(\`Server running on port \${process.env.PORT || 5000}\`);
});
`
  );

  createFile(
    path.join(basePath, 'src', 'routes', 'index.js'),
    `const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('API is working');
});

module.exports = router;
`
  );

  createFile(
    path.join(basePath, '.env'),
    `MONGO_URI=your_mongodb_uri
PORT=5000
`
  );

  console.log('Express.js backend created.');
};

const generateFrontend = (basePath) => {
  console.log('Creating Vite.js frontend...');

  execSync('npm create vite@latest frontend -- --template react', { cwd: basePath, stdio: 'inherit' });

  const frontendPath = path.join(basePath, 'frontend', 'src');
  const folders = ['components', 'shared', 'utils', 'context'];
  folders.forEach((folder) => createFolder(path.join(frontendPath, folder)));

  createFile(
    path.join(frontendPath, 'context', 'AppContext.js'),
    `import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
`
  );

  createFile(
    path.join(basePath, 'frontend', 'tailwind.config.js'),
    `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
`
  );

  console.log('Vite.js frontend created.');
};

const generateFullStackProject = (projectName) => {
  const projectPath = path.join(process.cwd(), projectName);
  createFolder(projectPath);

  console.log(`Generating full-stack project: ${projectName}`);
  
  // Backend
  const backendPath = path.join(projectPath, 'backend');
  createFolder(backendPath);
  generateBackend(backendPath);

  // Frontend
  generateFrontend(projectPath);

  console.log('Full-stack project created successfully.');
  console.log(`Navigate to ${projectName} and start coding!`);
};

// Export the functionality for the NPM module
module.exports = { generateFullStackProject };

// Example usage
if (require.main === module) {
  const projectName = process.argv[2] || 'my-fullstack-app';
  generateFullStackProject(projectName);
}
