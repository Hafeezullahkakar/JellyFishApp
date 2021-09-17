/** @format */

import "./App.css";
import HomepageApp from "./app_module/app homepage/HomepageApp";
import Footer from "./site_module/components/footer/Footer";
import Homepage from "./site_module/components/homepage/Homepage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <HomepageApp />
        {/* <Homepage />
        <Footer /> */}
    </Router>
      </div>
  );
}

export default App;
