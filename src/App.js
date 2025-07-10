import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail1 = lazy(() => import("./components/Detail/ProjectDetail1"));

const ProjectDetail2 = lazy(() => import("./components/Detail/ProjectDetail2"));

const ProjectDetail3 = lazy(() => import("./components/Detail/ProjectDetail3"));
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
                <Route
          path="/ProjectDetail1"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen bg-black">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
                </div>
              }
            >
              <ProjectDetail1 />
            </Suspense>
          }
        />
        <Route
          path="/ProjectDetail2"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen bg-black">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
                </div>
              }
            >
              <ProjectDetail2 />
            </Suspense>
          }
        />
                <Route
          path="/ProjectDetail3"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen bg-black">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500"></div>
                </div>
              }
            >
              <ProjectDetail3 />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
