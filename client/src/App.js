import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/Landing/LandingPage";
import HomePage from './pages/Home/HomePage';
import RecommendPage from "./pages/Recommend/RecommendPage";

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1500);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  }, []);

  return (
    <Router>
      <Routes>
        {isSplashVisible ? (
          <Route path="*" element={<LandingPage />} />
        ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/recommend" element={<RecommendPage />} />
            </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
