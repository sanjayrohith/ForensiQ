# ForesiQ

This is a web application built with Vite, React, TypeScript, and Shadcn UI.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd ForesiQ
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server, run:

```bash
npm run dev
```

This will start the development server at `http://localhost:8080`.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the code.
- `npm run preview`: Starts a local server to preview the production build.
- `npm test`: Runs the tests.
- `npm test:watch`: Runs the tests in watch mode.

## Project Structure

```
.
├── public/
│   └── ... # Static assets
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── ... # Shadcn UI components
│   │   └── ... # Custom components
│   ├── hooks/
│   │   └── ... # Custom hooks
│   ├── lib/
│   │   └── ... # Utility functions
│   ├── pages/
│   │   └── ... # Page components
│   ├── test/
│   │   └── ... # Test files
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

