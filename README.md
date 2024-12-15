# Node-Vite-EasySetup

**Node-Vite-EasySetup** is an NPM package that allows you to quickly scaffold a full-stack application with an Express.js backend and a Vite-powered React frontend. The generated project structure is pre-configured with essential folders, files, and setups to streamline your development process.

## Features

- **Express.js Backend**:
  - Includes pre-configured folder structure: `src`, `utils`, `models`, `controllers`, `routes`, `config`
  - MongoDB connection with `.env` support
  - Example API route for quick start

- **Vite.js Frontend**:
  - React-based frontend using Vite for fast development
  - Pre-configured folders: `components`, `shared`, `utils`, `context`
  - Example `AppContext` setup for state management
  - TailwindCSS configuration included (optional)

## Installation

To use the package, you must first install it globally:

```bash
npm install -g node-vite-easysetup
```

## Usage

Run the following command to create a new full-stack project:

```bash
npx node-vite-easysetup <project-name>
```

Replace `<project-name>` with the desired name of your project. If no name is provided, the default project name will be `my-fullstack-app`.

### Example

```bash
node-vite-easysetup my-awesome-project
```

This will generate a folder structure like this:

```
my-awesome-project/
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │       └── index.js
│   ├── utils/
│   ├── models/
│   ├── controllers/
│   ├── config/
│   └── .env
├── frontend/
    ├── src/
    │   ├── components/
    │   ├── shared/
    │   ├── utils/
    │   ├── context/
    │       └── AppContext.js
    └── tailwind.config.js
```

## Project Details

### Backend

1. **Dependencies:**
   - Express.js
   - Mongoose
   - dotenv

2. **Features:**
   - MongoDB connection setup with `.env` configuration.
   - Basic Express.js setup including a sample route (`/api`).

3. **Environment Variables:**
   Define the following variables in `.env`:
   ```
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```

### Frontend

1. **Dependencies:**
   - React (via Vite template)
   - TailwindCSS (optional)

2. **Features:**
   - Organized folder structure for components, shared utilities, and context management.
   - Pre-configured TailwindCSS setup (editable via `tailwind.config.js`).

3. **Context Setup:**
   An example `AppContext` file is included for managing global state.

## Development

### Start Backend
Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
node src/index.js
```

### Start Frontend
Navigate to the `frontend` folder and install dependencies:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

### Full-stack Development
- Ensure the backend and frontend are running simultaneously.
- The backend API is accessible via `/api` from the frontend.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests on the [GitHub repository](#).

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Start building amazing full-stack apps faster with **Node-Vite-EasySetup**!

