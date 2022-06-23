import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Button} from "react-bootstrap";
import { TextField } from '../../RegisterPage/TextField';
import * as Yup from "yup";
import { Formik, Form } from "formik";
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


export default function PasswordPage({currentUser, handleLogout}) {
    const validate = Yup.object({
        newPassword: Yup.string()
          .min(8, "Şifre en az 8 karakterden oluşmalı")
          .required("Zorunlu"),
        confirmNewPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalı")
          .required("Zorunlu"),
      });
  return (
    <Formik
      initialValues={{
        newPassword: "",
        confirmNewPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
            <div className="border border-light" style={{height:"130%",width:"90%",backgroundColor:"#e9e9e9",padding:"6%"}} >
          <div>
          <FontAwesomeIcon icon={ faUserCircle} size={"5x"}/>
          <span>Kullanıcı Adı Soyadı</span>
          <div>
      <ColoredLine color="#000"/>
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
          <Link to="/favori">
          <Button variant="outline-primary" style={{width:"60%",borderColor:"black"}}><span style={{color:"black"}}>Favorilerim</span></Button>
              </Link>
          
          </div>
          <div className="mt-5">
          <Button style={{width:"60%"}}><span style={{color:"black"}}>Şifre Değiştir</span></Button>
          </div>
        </div>
            </div>
            <div class="col-md-8">
                <h2 style={{textAlign:"center",fontWeight:"bold"}}>Şifre Değiştir</h2>
                <div className="border border-dark mt-5 " style={{width:"60%",height:"90%",paddingLeft:"16%",paddingTop:"5%",marginLeft:"20%"}}>

                <Form>
                <div style={{width:"60%",verticalAlign:"middle",float:"left"}}>
                <label style={{widht:"auto",float:"left"}}>Mevcut Şifre</label>
                <TextField name="password" type="password" disabled/>
                </div>
                <div style={{width:"60%"}}>
                <TextField label="Şifre" name="newPassword" type="password" placeholder="Şifre" />
                </div>
                <div style={{width:"60%"}}>
                  <TextField
                    label="Şifreyi Onaylayın"
                    name="confirmNewPassword"
                    type="password"
                    placeholder="Şifreyi Onaylayın"
                  /> 
                </div>
                </Form>  
              
            
            <div style={{paddingLeft:"18%"}}>
                  <button className="btn btn-primary mt-3  " type="submit">
                    Kaydet
                  </button></div>
                </div>
            </div>
        </div>
    </div>
   )}
   </Formik>
 );
}
