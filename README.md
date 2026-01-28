# ForesiQ

**Explainable AI for Document Forensics**

ForensiQ is an AI-assisted document forensics platform designed to help organizations verify the authenticity of digital and scanned documents before acceptance or legal use. It is designed to assist humans, not replace them, making it practical, ethical, and deployable.

## Key Features

- **Explainable AI Verdicts**: Clear reasoning behind every authenticity decision
- **Human-Centric Design**: Augments human expertise rather than replacing it
- **Multi-Format Support**: Analyzes PDFs, images, and scanned documents
- **Forensic Metadata Analysis**: Deep inspection of hidden document properties
- **Tamper Detection**: Pixel-level analysis for visual manipulations
- **Audit-Ready Reports**: Compliance-focused documentation for legal use

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [React](https://reactjs.org/) - User interface library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Modern React component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

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

- `npm run dev`: Starts the development server
- `npm run build`: Builds the application for production
- `npm run build:dev`: Builds in development mode
- `npm run lint`: Lints the code using ESLint
- `npm run preview`: Starts a local server to preview the production build
- `npm test`: Runs the test suite
- `npm test:watch`: Runs tests in watch mode

## Ethics & Principles

ForensiQ is built on the principle of **human-AI collaboration**:

- **Transparency**: Every AI decision includes clear explanations and confidence scores
- **Human Oversight**: Final decisions always remain with human experts
- **Bias Mitigation**: Regular auditing and diverse training data to reduce algorithmic bias
- **Privacy First**: Documents can be processed without permanent storage
- **Accessibility**: Designed for users with varying technical expertise

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

