import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/PersonalPages/ProfilePage/ProfilePage";
import FavoritePage from "./pages/PersonalPages/FavoritePages/FavoritePage";
import PasswordPage from "./pages/PersonalPages/PasswordPage/PasswordPage";
import MapPage from "./pages/MapPages/MapPage";
function App() {

  const myStorage = window.localStorage;

  const [currentUser, setCurrentUser] = useState(
    myStorage.getItem("currentUser")
  );
  const handleLogout = () => {
    myStorage.removeItem("user");
    setCurrentUser(null);
  };
  console.log(currentUser)
  
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MapPage currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout} myStorage={myStorage}/>} />
          <Route path="/profile" element={<ProfilePage currentUser={currentUser} handleLogout={handleLogout}/>} />
          <Route path="/favori" element={<FavoritePage currentUser={currentUser} handleLogout={handleLogout}/>} />
          <Route path="/password" element={<PasswordPage currentUser={currentUser} handleLogout={handleLogout}/>} />
        </Routes>
      </Router>
  );
}

export default App;
