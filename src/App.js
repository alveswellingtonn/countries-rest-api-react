import "./app.css";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import AllCountries from './components/AllCountries/AllCountries';
import CountryInfo from './components/CountryInfo/CountryInfo'

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;