import React from 'react'
import { Link } from 'react-router-dom';
import github_icon from "../../assets/github_icon.jpeg";
import linkedin_icon from "../../assets/linkedin_icon.jpeg";
import logo from "../../assets/logo.jpeg";



function Footer1() {
  return (
    <div className='main-footer ' style={{marginTop:"370px"}}>
        <div className='container mt-5' style={{width:"100%"}}>
            <div className='row'>
                
                <div className='col-md-3 mt-5'>
                <a href='/'><img style={{width:"20%"}} src={logo} alt="logo"></img></a>
                </div>
                
                <div className='col-md-2 mt-5'style={{paddingLeft:"2%"}}>
                <a href='https://github.com/frentprice/frentprice_Son_Demo' target={"_blank"}><img style={{width:"30%"}} src={github_icon} ></img></a> 
                </div>
                <div className='col-md-2 mt-5' style={{paddingLeft:"4%"}}>
                <span style={{fontSize:"18px"}}>Bizi takip edin!</span>
                </div>
                <div className='col-md-5 mt-5'>
                <a href='https://www.linkedin.com/in/melisvaran/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/zeynep-demirel/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/saltukyasar/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/mehmet-salih-%C3%B6nder-829633189/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/nurseda-diker-ab3852158/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/osman-tahir-kuzu-5629ab18b/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <a href='https://www.linkedin.com/in/sefa-enes-ergin/' target={'_blank'}><img style={{width:"70px",paddingLeft:"30px"}} src={linkedin_icon}></img></a>
                <div style={{fontSize:"9px",fontWeight:"bold"}}>
                    <span style={{paddingLeft:"2%"}}>Melis VARAN</span>
                    <span style={{paddingLeft:"3%"}}>Zeynep DEMİREL </span>
                    <span style={{paddingLeft:"1%"}}>Saltuk YAŞAR</span>
                    <span style={{paddingLeft:"1%"}}>Salih ÖNDER</span>
                    <span style={{paddingLeft:"1%"}}>Nurseda DİKER</span>
                    <span style={{paddingLeft:"1%"}}>Osman KUZU</span>
                    <span style={{paddingLeft:"1%"}}>Sefa Enes ERGİN</span>
                </div>
                </div>
                

                
                

           
                
 
 

                
            </div>
        </div>
    </div>
  )
}

export default Footer1;
