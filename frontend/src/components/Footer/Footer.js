import React from 'react'
import github_icon from "../../assets/github_icon.jpeg";
import linkedin_icon from "../../assets/linkedin_icon.jpeg";
import logo from '../../assets/logo.jpeg';



function Footer() {
  return (
    <div className='main-footer '>
      <div className='container mt-4' style={{ width: "100%" }}>
        <div className='row'>

          <div className='col-md-3'>
            <a href='/'><img style={{ width: "20%" }} src={logo} alt="logo"></img></a>
          </div>

          <div className='col-md-2 mt-1' style={{ paddingLeft: "4%" }}>
            <a href='https://github.com/frentprice/frentprice-web' target={"_blank"}><img style={{ width: "30%" }} src={github_icon} ></img></a>
          </div>
          <div className='col-md-2 mt-2' style={{ paddingLeft: "6%" }}>
            <span style={{ fontSize: "18px" }}>Bizi takip edin!</span>
          </div>
          <div className='col-md-5'>
            <a href='https://www.linkedin.com/in/melisvaran/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/zeynep-demirel/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/saltukyasar/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/mehmet-salih-%C3%B6nder-829633189/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/nurseda-diker-ab3852158/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/osman-tahir-kuzu-5629ab18b/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <a href='https://www.linkedin.com/in/sefa-enes-ergin/' target={'_blank'}><img style={{ width: "70px", paddingLeft: "30px" }} src={linkedin_icon}></img></a>
            <div style={{ fontSize: "9px", fontWeight: "bold" }}>
              <span style={{ paddingLeft: "2%" }}>Melis VARAN</span>
              <span style={{ paddingLeft: "3%" }}>Zeynep DEMİREL </span>
              <span style={{ paddingLeft: "3%" }}>Saltuk YAŞAR</span>
              <span style={{ paddingLeft: "3%" }}>Salih ÖNDER</span>
              <span style={{ paddingLeft: "3%" }}>Nurseda DİKER</span>
              <span style={{ paddingLeft: "1%" }}>Osman Tahir KUZU</span>
              <span style={{ paddingLeft: "1%" }}>Sefa Enes ERGİN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;