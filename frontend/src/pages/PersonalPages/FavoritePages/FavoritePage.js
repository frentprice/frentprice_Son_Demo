/* eslint-disable array-callback-return */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../../assets/logo.jpeg";
import axios from "axios";
import { Star } from "@material-ui/icons";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 4,
    }}
  />
);


export default function FavoritePage({ currentUser, handleLogout }) {
  const [favori, setFavori] = useState([]);


  useEffect(() => {
    const getFavorite = async () => {
      try {
        const res = await axios.get("/favori/favori");
        console.log(res.data);
        setFavori(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFavorite();
  }, []);

  console.log(favori);
  return (
    <div>
      <nav className="border-bottom border-secondary" style={{ padding: '10px' }}>
        <div style={{ fontSize: "30px" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img style={{ width: "70px", paddingLeft: "30px" }} src={logo}></img>
            <span style={{ paddingLeft: "10px" }}>FRENTPRICE</span>
          </a>
        </div>
        {currentUser ? (

          <div className="buttons">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {currentUser}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">Profil</Dropdown.Item>
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
            <Dropdown
            //   style={{ float: "right", }}
            >
              <Dropdown.Toggle variant="primary" id="dropdown-basic">

              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">Profil</Dropdown.Item>
                <Dropdown.Item href="/favori">Favorilerim</Dropdown.Item>
                <Dropdown.Item href="/password">Şifre Değiştir</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" onClick={handleLogout}>
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div
              className="border border-light"
              style={{
                height: "75%",
                width: "90%",
                backgroundColor: "#e9e9e9",
                padding: "6%",
              }}
            >
              <div>
                <FontAwesomeIcon icon={faUserCircle} size={"5x"} />
                <span style={{ position: "fixed", top: "170px", left: "270px" }}> {currentUser} </span>
                <div>
                  <ColoredLine color="#000" />
                </div>
              </div>
              <div className="mt-5">
                <Link to="/profile">
                  <Button
                    variant="outline-primary"
                    style={{ width: "60%", borderColor: "black", marginLeft: "17%" }}
                  >
                    <span style={{ color: "black" }}>Profil</span>
                  </Button>
                </Link>
              </div>
              <div className="mt-5">
                <Button style={{ width: "60%", marginLeft: "17%" }}>
                  <span style={{ color: "black", borderColor: "black" }}>
                    Favorilerim
                  </span>
                </Button>
              </div>
              <div className="mt-5">
                <Link to="/password">
                  <Button
                    variant="outline-primary"
                    style={{ width: "60%", borderColor: "black", marginLeft: "17%" }}
                  >
                    <span style={{ color: "black" }}>Şifre Değiştir</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              Favorilerim
            </h2>
            <div
              className="border border-dark mt-5"
              style={{
                width: "90%",
                height: "100%",
                borderStyle: "solid",
                padding: "2%",
                marginLeft: "5%",
              }}
            >
              {
                favori.map((fav) => (
                  (fav.username == currentUser) ? (
                    <div className="card border border-primary mb-2" style={{width: "18rem;",height:"250px"}}>
                    <div className="card-body">
                      <h5 className="card-title">{fav.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{Array(fav.rating).fill(<Star className="star" />)}</h6>
                      <p className="card-text"><b>3+1</b> : {fav.desc3}</p>
                      <p className="card-text"><b>2+1</b> : {fav.desc2}</p>
                      <p className="card-text"><b>1+1</b> : {fav.desc1}</p>
                      <p className="card-text"><b>1+0</b> : {fav.desc0}</p>
                    </div>
                  </div>
                   
                  ):null
                 
                ))
              }
            </div>
          </div>



        </div>
      </div>
    </div>

  );
}
