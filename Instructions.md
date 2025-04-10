# Instructions.md

I want you to act as an expert in the field of web development. I will provide you with a task and you will provide me with a solution. I want you to only respond with a solution. Do not write explanations. Do not type anything else except a solution. The solution does not need to be perfect. It just needs to get the job done.

- The solution does not need to be perfect. It just needs to get the job done.
- Use the provided template to structure your response.
- Do not write explanations. Do not type anything else except a solution.
- Be terse
- Suggest solutions that I didn’t think about—anticipate my needs
- Treat me as an expert
- Be accurate and thorough
- Give the answer immediately. Provide detailed explanations and restate my query in your own words if necessary after giving the answer
- Value good arguments over authorities, the source is irrelevant
- Consider new technologies and contrarian ideas, not just the conventional wisdom
- No need to disclose you're an AI
- Split into multiple responses if one response isn't enough to answer the question. If I ask for adjustments to code I have provided you, do not repeat all of my code unnecessarily. Instead try to keep the answer brief by giving just a couple lines before/after any changes you make. Multiple code blocks are ok.
I want you to act as an expert in the field of web development. I will provide you with a task and you will provide me with a solution. I want you to only respond with a solution. Do not write explanations. Do not type anything else except a solution. The solution does not need to be perfect. It just needs to get the job done.

- The solution does not need to be perfect. It just needs to get the job done.
- Use the provided template to structure your response.
- Do not write explanations. Do not type anything else except a solution.
- Be terse
- Suggest solutions that I didn’t think about—anticipate my needs
- Treat me as an expert
- Be accurate and thorough
- Give the answer immediately. Provide detailed explanations and restate my query in your own words if necessary after giving the answer
- Value good arguments over authorities, the source is irrelevant
- Consider new technologies and contrarian ideas, not just the conventional wisdom
- No need to disclose you're an AI
- Split into multiple responses if one response isn't enough to answer the question. If I ask for adjustments to code I have provided you, do not repeat all of my code unnecessarily. Instead try to keep the answer brief by giving just a couple lines before/after any changes you make. Multiple code blocks are ok.

Below is an enhanced, production-ready starter template that you can download and start using immediately. This version has been fully rewritten for Vite + React with TypeScript, leverages Tailwind CSS for styling, integrates Shadcn UI for polished UI components, and uses Three.js (via a dedicated canvas component) to deliver dynamic, interactive 3D graphics. You can copy the code files into a repository and zip them up as your downloadable starter template.

Below is the complete project structure and code for each file:

---

## **Project Structure**

```git
my-portfolio-starter/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── Navigation.tsx
    │   ├── Hero.tsx
    │   ├── Grid.tsx
    │   └── ThreeCanvas.tsx
    └── styles/
        └── index.css
```

---

## **Configuration Files**

### package.json

```json
{
  "name": "my-portfolio-starter",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.154.0",
    "@shadcn/ui": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "typescript": "^4.9.5",
    "vite": "^4.0.0",
    "tailwindcss": "^3.2.7",
    "postcss": "^8.4.21",
    "autoprefixer": "^10.4.13",
    "@vitejs/plugin-react": "^3.0.0"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
});
```

### postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## **Source Files**

### src/main.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### src/App.tsx

```tsx
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Grid from './components/Grid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <section className="p-8">
          <Grid />
        </section>
      </main>
    </div>
  );
};

export default App;
```

### src/components/Navigation.tsx

```tsx
import React from 'react';
import { Button } from '@shadcn/ui/button';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="text-lg font-semibold">My Portfolio</div>
      <ul className="flex space-x-4">
        {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <Button variant="ghost" className="text-white">
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
```

### src/components/Hero.tsx

```tsx
import React from 'react';
import ThreeCanvas from './ThreeCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-800">
      <div className="absolute z-0 w-full h-full">
        {/* Three.js canvas background */}
        <ThreeCanvas />
      </div>
      <div className="relative z-10 text-center">
        <img
          className="w-32 h-32 rounded-full mx-auto border-2 border-white"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h1 className="mt-4 text-4xl font-bold">I&apos;m a Web Developer</h1>
        <p className="mt-2 text-lg">Building interactive interfaces with modern web technologies.</p>
      </div>
    </section>
  );
};

export default Hero;
```

### src/components/Grid.tsx

```tsx
import React from 'react';
import { Card } from '@shadcn/ui/card';

const projects = [
  { title: 'Project One', description: 'Responsive Grid Layout', year: '2022' },
  { title: 'Project Two', description: 'Modern Resume Portfolio', year: '2023' },
  { title: 'Project Three', description: 'Cinematic Movie Website', year: '2021' },
];

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <Card key={idx} className="p-4 bg-gray-700">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          <span className="mt-4 inline-block text-sm text-gray-300">
            {project.year}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default Grid;
```

### src/components/ThreeCanvas.tsx

```tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a simple rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeCanvas;
```

### src/styles/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add global styles or customizations below */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
```

---

### **Getting Started & Download Instructions**

1. **Clone or Download:**  
   Create a new folder (e.g. `my-portfolio-starter`), then add the above files in their respective directories. Alternatively, add the code to your preferred Git repository and clone it.

2. **Install Dependencies:**  
   Navigate to the project folder in your terminal and run:

   ```bash
   npm install
   ```

3. **Start Development Server:**  
   Launch the Vite development server with:

   ```bash
   npm run dev
   ```

   Your portfolio site should now be available at [http://localhost:3000](http://localhost:3000).

4. **Build for Production:**  
   When ready, compile a production build:

   ```bash
   npm run build
   ```

5. **Deploy:**  
   You can deploy your build output (found in the `dist` folder) to any static hosting provider such as Vercel, Netlify, or GitHub Pages.

---

Below is an enhanced, production-ready starter template that you can download and start using immediately. This version has been fully rewritten for Vite + React with TypeScript, leverages Tailwind CSS for styling, integrates Shadcn UI for polished UI components, and uses Three.js (via a dedicated canvas component) to deliver dynamic, interactive 3D graphics. You can copy the code files into a repository and zip them up as your downloadable starter template.

Below is the complete project structure and code for each file:

---

## **Project File Structure**

```bash
my-portfolio-starter/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── Navigation.tsx
    │   ├── Hero.tsx
    │   ├── Grid.tsx
    │   └── ThreeCanvas.tsx
    └── styles/
        └── index.css
```

---

## **Project Configuration**

## Package Configuration

```json
{
  "name": "my-portfolio-starter",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.154.0",
    "@shadcn/ui": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "typescript": "^4.9.5",
    "vite": "^4.0.0",
    "tailwindcss": "^3.2.7",
    "postcss": "^8.4.21",
    "autoprefixer": "^10.4.13",
    "@vitejs/plugin-react": "^3.0.0"
  }
}
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### Vite Configuration

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
});
```

### PostCSS Configuration

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Tailwind Configuration

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## **Application Source Files**

### Main Entry Point (main.tsx)

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Application Component (App.tsx)

```tsx
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Grid from './components/Grid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <section className="p-8">
          <Grid />
        </section>
      </main>
    </div>
  );
};

export default App;
```

### Navigation Component

```tsx
import React from 'react';
import { Button } from '@shadcn/ui/button';

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="text-lg font-semibold">My Portfolio</div>
      <ul className="flex space-x-4">
        {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <Button variant="ghost" className="text-white">
              {item}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
```

### Hero Component

```tsx
import React from 'react';
import ThreeCanvas from './ThreeCanvas';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-800">
      <div className="absolute z-0 w-full h-full">
        {/* Three.js canvas background */}
        <ThreeCanvas />
      </div>
      <div className="relative z-10 text-center">
        <img
          className="w-32 h-32 rounded-full mx-auto border-2 border-white"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h1 className="mt-4 text-4xl font-bold">I&apos;m a Web Developer</h1>
        <p className="mt-2 text-lg">Building interactive interfaces with modern web technologies.</p>
      </div>
    </section>
  );
};

export default Hero;
```

### Grid Component

```tsx
import React from 'react';
import { Card } from '@shadcn/ui/card';

const projects = [
  { title: 'Project One', description: 'Responsive Grid Layout', year: '2022' },
  { title: 'Project Two', description: 'Modern Resume Portfolio', year: '2023' },
  { title: 'Project Three', description: 'Cinematic Movie Website', year: '2021' },
];

const Grid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <Card key={idx} className="p-4 bg-gray-700">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          <span className="mt-4 inline-block text-sm text-gray-300">
            {project.year}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default Grid;
```

### Three.js Canvas Component

```tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a simple rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeCanvas;
```

### Global Styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can add global styles or customizations below */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
```

---

### **Setup & Installation Guide**

1. **Clone or Download:**  
   Create a new folder (e.g. `my-portfolio-starter`), then add the above files in their respective directories. Alternatively, add the code to your preferred Git repository and clone it.

2. **Install Dependencies:**  
   Navigate to the project folder in your terminal and run:

   ```bash
   npm install
   ```

3. **Start Development Server:**  
   Launch the Vite development server with:

   ```bash
   npm run dev
   ```

   Your portfolio site should now be available at [http://localhost:3000](http://localhost:3000).

4. **Build for Production:**  
   When ready, compile a production build:

   ```bash
   npm run build
   ```

5. **Deploy:**  
   You can deploy your build output (found in the `dist` folder) to any static hosting provider such as Vercel, Netlify, or GitHub Pages.

---

By following these instructions, you now have an enhanced starter template that blends modern UI/UX design with interactive 3D elements—all built with Vite, React with TypeScript, Three.js, Tailwind CSS, and Shadcn UI. Enjoy building out your portfolio and feel free to extend the code to match your creative vision!
