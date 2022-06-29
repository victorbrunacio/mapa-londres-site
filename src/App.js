import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./Pages.Style/Global.Style";

import Home from "./Pages/Home";
import Map from "./Pages/Map";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
  <Router>
    <GlobalStyle/>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="*"  element={<ErrorPage />} />
    </Routes>
   
  </Router>
  );
}

export default App;
