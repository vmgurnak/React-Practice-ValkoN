import { Heading } from 'components';
import { Route, Routes } from 'react-router-dom';

import Country from 'pages/Country';
import Home from 'pages/Home';
import SearchCountry from 'pages/SearchCountry';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<Country />} />
      <Route path="/country/:countryId" element={<SearchCountry />} />
    </Routes>
  );
};

export default App;
