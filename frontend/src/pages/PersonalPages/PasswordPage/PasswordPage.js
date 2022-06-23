import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button} from "react-bootstrap";
import { TextField } from '../../RegisterPage/TextField';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import logo from "../../../assets/logo.jpeg";


const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 4,
      }}
    />
  );


export default function PasswordPage({currentUser, handleLogout}) {
    // const validate = Yup.object({
    //     newPassword: Yup.string()
    //       .min(8, "Şifre en az 8 karakterden oluşmalı")
    //       .required("Zorunlu"),
    //     confirmNewPassword: Yup.string()
    //       .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalı")
    //       .required("Zorunlu"),
    //   });
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
       </nav>
      <Formik
      initialValues={{
        newPassword: "",
        confirmNewPassword: "",
      }}
      // validationSchema={validate}
    >
     
      {(formik) => (
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
            <div className="border border-light" style={{height:"80%",width:"90%",backgroundColor:"#e9e9e9",padding:"6%"}} >
          <div>
          <FontAwesomeIcon icon={ faUserCircle} size={"5x"}/>
          <span style={{position:"fixed",top:"170px",left:"270px"}}> {currentUser} </span>
          <div>
      <ColoredLine color="#000"/>
    </div>
    
          
            
            
          </div>
          <div className="mt-5">
            
          <Link to="/profile">
                <Button
                  variant="outline-primary"
                  style={{ width: "60%", borderColor: "black",marginLeft:"17%" }}
                >
                  <span style={{ color: "black" }}>Profil</span>
                </Button>
              </Link>
          </div>
          <div className="mt-5">
          <Link to="/favori">
          <Button variant="outline-primary" style={{width:"60%",borderColor:"black",marginLeft:"17%" }}><span style={{color:"black"}}>Favorilerim</span></Button>
              </Link>
          
          </div>
          <div className="mt-5">
          <Button style={{width:"60%",marginLeft:"17%"}}><span style={{color:"black"}}>Şifre Değiştir</span></Button>
          </div>
        </div>
            </div>
            <div class="col-md-8">
                <h2 style={{textAlign:"center",fontWeight:"bold"}}>Şifre Değiştir</h2>
                <div className="border border-dark mt-1 " style={{width:"60%",height:"70%",paddingLeft:"16%",paddingTop:"5%",marginLeft:"20%"}}>

                <Form>
                {/* <div  className='mt-3' style={{width:"70%",verticalAlign:"middle",float:"left"}}>
                 <label style={{widht:"auto",float:"left"}}>Mevcut Şifre</label> 
                <TextField label="Mevcut Şifre" name="password" type="password" disabled/>
                </div> */}
                <div className='mt-3' style={{width:"70%"}}>
                <TextField label="Şifre" name="newPassword" type="password" placeholder="Şifre" />
                </div>
                <div className='mt-4' style={{width:"70%"}}>
                  <TextField
                    label="Şifreyi Onaylayın"
                    name="confirmNewPassword"
                    type="password"
                    placeholder="Şifreyi Onaylayın"
                  /> 
                </div>
                </Form>  
              
            
            <div style={{paddingLeft:"18%",position:"fixed",top:"610px",right:"500px"}}>
                  <button className="btn btn-primary" type="submit">
                    Kaydet
                  </button></div>
                </div>
            </div>
        </div>
    </div>
   )}
   </Formik>
   </div>
   
 );
}
