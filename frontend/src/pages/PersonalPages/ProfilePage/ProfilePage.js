import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import axios from "axios";



const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 4,
    }}
  />
);

export default function ProfilePage({currentUser, currentUserId, handleLogout}) {
 
  const [user, setUser] = useState({
    _id: "",
    username: "",
    surname: "",
    mail: ""
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/users/${currentUserId}`);
        setUser(res.data);
        console.log(res.data.surname)
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  console.log(currentUserId);


  return (
    <div>
      <nav className="border-bottom border-secondary" style={{padding: '10px'}}>
      <div style={{fontSize:"30px"}}>
        <a href="/" style={{textDecoration:"none"}}>
        <img style={{width:"70px",paddingLeft:"30px"}} src={logo}></img>
           <span style={{paddingLeft:"10px"}}>FRENTPRICE</span>
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
      ) }
</nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
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
              <div>
                <FontAwesomeIcon icon={faUserCircle} size={"5x"} />
                <span style={{position:"fixed",top:"170px",left:"270px"}}>{user.username +" " }</span>
                <div>
                  <ColoredLine color="#000" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button style={{ width: "60%" ,marginLeft:"17%"}}>
                <span style={{ color: "black" }}>Profil</span>
              </Button>
            </div>
            <div className="mt-5">
              <Link to="/favori">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black" ,marginLeft:"17%"}}
                >
                  <span style={{ color: "black" }}>Favorilerim</span>
                </Button>
              </Link>
            </div>
            <div className="mt-5">
              <Link to="/password">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black" ,marginLeft:"17%"}}
                >
                  <span style={{ color: "black" }}>Şifre Değiştir</span>
                </Button>
              </Link>
            </div>
          </div>
          </div>
        
        <div className="col-md-8">
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
                Ad:
               <span style={{color:"black"}}><span>{user.username}</span></span>
              </label>
            </div>
            <div className="mt-5">
              <label htmlFor="lastName" style={{ fontSize: "20px" }}>
                Soyad: 
              </label>
              <span>{user.surname}</span>
            </div>
            <div className="mt-5">
              <label htmlFor="email" style={{ fontSize: "20px" }}>
                Mail Adresi:
              </label>
              <span>{user.mail}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

