import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

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
              {/* <FontAwesomeIcon icon={faUserCircle} size={"5x"} /> */}
              <span>Kullanıcı Adı Soyadı</span>
              <div>
                <ColoredLine color="#000" />
              </div>
            </div>
            <div className="mt-5">
            <Button
                variant="outline-primary"
                style={{ width: "60%", borderColor: "black" }}
              >
                <span style={{ color: "black" }}>Profil</span>
              </Button>
            </div>
            <div className="mt-5">
            <Button style={{ width: "60%" }}>
                <span style={{ color: "black",borderColor:"black" }}>Favorilerim</span>
              </Button>
            </div>
            <div className="mt-5">
              <Button
                variant="outline-primary"
                style={{ width: "60%", borderColor: "black" }}
              >
                <span style={{ color: "black" }}>Şifre Değiştir</span>
              </Button>
            </div>
          </div>
        </div>
        <div class="col-md-8">
            <h2 style={{textAlign:"center",fontWeight:"bold"}}>Favorilerim</h2>
            <div className="border border-dark mt-5" style={{width:"90%",height:"80%",borderStyle:"solid",padding:"2%",marginLeft:"5%"}}>

            </div>
        </div>


      </div>
    </div>
  );
}
