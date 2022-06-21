import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/PersonalPages/ProfilePage/ProfilePage";
import FavoritePage from "./pages/PersonalPages/FavoritePages/FavoritePage";
import PasswordPage from "./pages/PersonalPages/PasswordPage/PasswordPage";
import MapPage from "./pages/MapPages/MapPage";
function App() {
  
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MapPage/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favori" element={<FavoritePage />} />
          <Route path="/password" element={<PasswordPage />} />
        </Routes>
      </Router>
  );
}

export default App;
