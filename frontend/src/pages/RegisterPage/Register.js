import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import "./register.css";
import Footer1 from "../../components/Footer/Footer1";
//import { Link } from "react-router-dom";



const ColoredLine = ({ color }) => (
  <hr className='mt-2'
    style={{
      color,
      backgroundColor: color,
      height:4
    }}
  />
);
export default function Register() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(20, "İsim en fazla 15 karakterden oluşmalı")
      .required("Zorunlu"),
    lastName: Yup.string()
      .max(25, "Soyisim en fazla 15 karakterden oluşmalı")
      .required("Zorunlu"),
    email: Yup.string().email("Geçersiz email").required("Zorunlu"),
    password: Yup.string()
      .min(8, "Şifre en az 8 karakterden oluşmalı")
      .required("Zorunlu"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Şifreler aynı olmalı")
      .required("Zorunlu"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4 mx-auto">
              <div className="d-flex justify-content-center border border-primary">
                <h1 style={{fontFamily:"revert;"}}>FRENTPRICE</h1>
              </div>
              <div>
                <h1 className="my-4 font-weight-bold .display-4 d-flex justify-content-center">Üye Ol</h1>
                {console.log(formik.values)}
                <Form>
                  <TextField label="İsim" name="firstName" type="text" placeholder="İsim" />
                  <TextField label="Soyisim" name="lastName" type="text" placeholder="Soyisim" />
                  <TextField label="Email" name="email" type="text" placeholder="Email" />
                  <TextField label="Şifre" name="password" type="password" placeholder="Şifre" />
                  <TextField
                    label="Şifreyi Onaylayın"
                    name="confirmPassword"
                    type="password"
                    placeholder="Şifreyi Onaylayın"
                  />
                  <div style={{textAlign:"center"}}>
                  <button className="btn btn-primary mt-2  " type="submit">
                    Üye Ol
                  </button></div>
                  <div/>
                  <div/>
                </Form>
              </div>
            </div>
          </div>
         <ColoredLine color="#000"/>
         <Footer1></Footer1>
        </div>
      )}
    </Formik>
  );
}
