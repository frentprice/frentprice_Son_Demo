import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
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

export default function FavoritePage() {
  return (
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
            <div className="mt-5">
              <Link to="/profile">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black" }}
                >
                  <span style={{ color: "black" }}>Profil</span>
                </Button>
              </Link>
            </div>
            <div className="mt-5">
              <Button style={{ width: "60%" }}>
                <span style={{ color: "black", borderColor: "black" }}>
                  Favorilerim
                </span>
              </Button>
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
            Favorilerim
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
            <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
