import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import LandingPage from './pages/Landing/LandingPage';
import HomePage from './pages/Home/HomePage';
import RecommendPage from './pages/Recommend/RecommendPage';
import LocationInfoPage from './pages/LocationInfo/LocationInfoPage';
import './App.css';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatedRoutes isSplashVisible={isSplashVisible} />
    </Router>
  );
};

const AnimatedRoutes = ({isSplashVisible}) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      {isSplashVisible ? (
        <CSSTransition key="landing" timeout={300} classNames="fade">
          <Routes>
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </CSSTransition>
      ) : (
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recommend" element={<RecommendPage />} />
            <Route path="/locationInfo" element={<LocationInfoPage />} />
          </Routes>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default App;
