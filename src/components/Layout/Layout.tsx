import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HOME } from "../../constants/routes";
import Header from "../Header";
import Home from "../../pages/Home";

const Layout = () => (
  <Router>
    <Header />
    <Routes>
      <Route path={HOME} element={<Home />} />
    </Routes>
  </Router>
);

export default Layout;
