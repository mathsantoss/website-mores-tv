import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// createRoot(document.getElementById("root")!).render(<App />);


import './App.css'

createRoot(document.getElementById("root")!).render(
  <div className="overflow-x-hidden w-full">
    <App />
  </div>
);