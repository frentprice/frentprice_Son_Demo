import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Main/Form/Form';
import Header from './Header/Header'
import '../HomePage/style.css'

import PropTypes from 'prop-types';

function HomePage({location,setLocation, setLatitude, setLongitude}) {
    return (
        <>
        <div className='bk'>
            <div className="cover-container d-flex flex-column">
                <Header></Header>
                <main className="px-3">
                    <h1 className='my-5'>FRENTPRİCE</h1>
                    <h3 className='my-5'>Get the best rental advice for your dream home !</h3>
                    <div className='my-5'>
                        <Form location= {location} setLocation = {setLocation} setLatitude={setLatitude} setLongitude={setLongitude}/>
                    </div>
                </main>
                <footer className="align-items-end text-dark-50">
                   
                </footer>
            </div>
          </div>
        </>
    )
}

HomePage.propTypes = {
    location: PropTypes.string.isRequired,
    setLocation: PropTypes.func.isRequired,
    setLatitude: PropTypes.func,
    setLongitude: PropTypes.func,
}

export default HomePage
