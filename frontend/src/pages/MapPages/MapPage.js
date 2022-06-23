import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "../../app.css";
import axios from "axios";
import { format } from "timeago.js";
import Register from "../../components/Register";
import Login from "../../components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg';

export default function MapPage({ currentUser, setCurrentUser, handleLogout, myStorage,showRegister,setShowRegister, showLogin, setShowLogin }) {

  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc3, setDesc3] = useState(null);
  const [desc2, setDesc2] = useState(null);
  const [desc1, setDesc1] = useState(null);
  const [desc0, setDesc0] = useState(null);
  const [rating, setRating] = useState(null);
 
  const [viewport, setViewport] = useState({
    width: "56vw",
    height: "100vh",
    latitude: 40.23,
    longitude: 28.8428,
    zoom: 14,
  });

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [long, lat] = e.lngLat;
    setNewPlace({
      lat,
      long,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUser,
      title,
      desc3,
      desc2,
      desc1,
      desc0,
      rating,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentUser);

  return (
    <div className="App">
      <nav className="border-bottom border-secondary" style={{padding: '30px'}}>
        <div style={{fontSize:"30px"}}>
        <img style={{width:"70px",paddingLeft:"30px"}} src={logo}></img>
           <span style={{paddingLeft:"10px",color:"blue"}}>FRENTPRICE</span>
        </div>
      {currentUser ? (
        <div className="buttons">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {currentUser}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">
                Profil
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/favori">Favorilerim</Dropdown.Item>
              <Dropdown.Item as={Link} to="/password">Şifre Değiştir</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="/" onClick={handleLogout}>
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ) : (

        <div className="buttons">
          <button className="button login" onClick={() => setShowLogin(true)}>
            Login
          </button>
          <button
            className="button register"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
        </div>
      )
      }
      </nav>
     
      <main className="row">
        <aside className="col-5 d-flex justify-content-center" style={{ height: "100%" }}>
          {pins.map((p) => (
            <>
              {p._id === currentPlaceId && (
                <div
                  latitude={p.lat}
                  longitude={p.long}
                  closeButton={true}
                  closeOnClick={false}
                  anchor="left"
                  style={{ float: "left", position: "absolute" }}
                  onClose={() => setCurrentPlaceId(null)}
                >
                  <div className="card w-100 border-primary ms-5 mt-4 px-5">
                    <label>Sokak</label>
                    <h4 className="place">{p.title}</h4>
                    <label>3+1</label>
                    <p className="desc">{p.desc3}</p>
                    <label>2+1</label>
                    <p className="desc">{p.desc2}</p>
                    <label>1+1</label>
                    <p className="desc">{p.desc1}</p>
                    <label>1+0</label>
                    <p className="desc">{p.desc0}</p>
                    <label>Sokak Hayat Standartı</label>
                    <div className="stars">
                      {Array(p.rating).fill(<Star className="star" />)}
                    </div>
                    <label>Information</label>
                    <span className="username">
                      Created by <b>{p.username}</b>
                    </span>
                    <span className="date">{format(p.createdAt)}</span>
                  </div>
                </div>
              )}
            </>
          ))}
        </aside>
        <section className="col-7">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onDblClick={handleAddClick}
          transitionDuration="200"
        >
          {pins.map((p) => (
            <>
              <Marker
                latitude={p.lat}
                longitude={p.long}
                offsetLeft={-viewport.zoom * 1.5}
                offsetTop={-viewport.zoom * 3}
              >
                <Room
                  style={{
                    fontSize: viewport.zoom * 3,
                    color: p.username === currentUser ? "tomato" : "slateblue",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                />
              </Marker>
            </>
          ))}

          {newPlace && (
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              anchor="left"
              onClose={() => setNewPlace(null)}
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>Sokak</label>
                  <input
                    placeholder="Sokağı giriniz"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>3+1</label>
                  <textarea
                    placeholder="3+1 evlerin ortalama kira değeri"
                    onChange={(e) => setDesc3(e.target.value)}
                  />
                  <label>2+1</label>
                  <textarea
                    placeholder="2+1 evlerin ortalama kira değeri"
                    onChange={(e) => setDesc2(e.target.value)}
                  />
                  <label>1+1</label>
                  <textarea
                    placeholder="1+1 evlerin ortalama kira değeri"
                    onChange={(e) => setDesc1(e.target.value)}
                  />
                  <label>1+0</label>
                  <textarea
                    placeholder="1+0 evlerin ortalama kira değeri"
                    onChange={(e) => setDesc0(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button className="submitButton" type="submit">
                    Pin Ekle
                  </button>
                </form>
              </div>
            </Popup>
          )}
       
          <div style={{ position: "relative", marginTop: "30%" }}>
            {showRegister && <Register setShowRegister={setShowRegister} />}
            {showLogin && (
              <Login
                setShowLogin={setShowLogin}
                myStorage={myStorage}
                setCurrentUser={setCurrentUser}
              />
            )}
          </div>
        </ReactMapGL>
        </section>
        
      </main>
    </div>
  );
}

