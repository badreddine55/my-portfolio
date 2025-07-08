import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen bg-black">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;