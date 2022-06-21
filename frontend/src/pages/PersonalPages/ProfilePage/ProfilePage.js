import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";



const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 4,
    }}
  />
);

export default function ProfilePage() {
  

  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(
    myStorage.getItem("currentUser")
  );
  const handleLogout = () => {
    myStorage.removeItem("user");
    setCurrentUser(null);
  };
  return (
    <div>
      {currentUser ? (
        
        <div className="buttons">
          <Dropdown
          //   style={{ float: "right", }}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {currentUser}
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
      ) : (
        
        <div className="buttons">
          <Dropdown
          //   style={{ float: "right", }}
          >
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {currentUser}
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
      ) }

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div
              className="border border-light"
              style={{
                height: "130%",
                width: "90%",
                backgroundColor: "#e9e9e9",
                padding: "6%",
              }}
            >
              <div>
                <FontAwesomeIcon icon={faUserCircle} size={"5x"} />
                <span>Kullanıcı Adı Soyadı</span>
                <div>
                  <ColoredLine color="#000" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button style={{ width: "60%" }}>
                <span style={{ color: "black" }}>Profil</span>
              </Button>
            </div>
            <div className="mt-5">
              <Link to="/favori">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black" }}
                >
                  <span style={{ color: "black" }}>Favorilerim</span>
                </Button>
              </Link>
            </div>
            <div className="mt-5">
              <Link to="/password">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black" }}
                >
                  <span style={{ color: "black" }}>Şifre Değiştir</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Üyelik Bigileri
          </h2>
          <div
            className="border border-dark mt-5"
            style={{
              width: "90%",
              height: "80%",
              borderStyle: "solid",
              padding: "2%",
              marginLeft: "5%",
            }}
          >
            <div className="mt-4">
              <label htmlFor="firstName" style={{ fontSize: "20px" }}>
                Ad
                {currentUser}
              </label>
            </div>
            <div className="mt-5">
              <label htmlFor="lastName" style={{ fontSize: "20px" }}>
                Soyad
              </label>
            </div>
            <div className="mt-5">
              <label htmlFor="email" style={{ fontSize: "20px" }}>
                Mail Adresi
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
