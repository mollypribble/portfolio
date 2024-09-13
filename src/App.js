import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import MainDisplay from './components/mainDisplay';
import PortfolioContent from './components/portfolioContent';
import LandingPage from './components/landingPage';

function App() {

  return (
    <BrowserRouter>
      <MainDisplay />
    </BrowserRouter>
);
}

export default App;
