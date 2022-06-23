import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomePage/style.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

function HomePage() {
    return (
        <div className='bk'>
            <div className="cover-container d-flex flex-column">
                <main className="px-3">
                    <h1 className='my-5'>FRENTPRİCE</h1>
                    <h3 className='my-5'>Get the best rental advice for your dream home !</h3>
                    <div className='my-5 '>
                        <Link to={"/map"}>
                        <Button className='position-absolute top-50 start-50 translate-middle py-3 px-5' variant="primary" size="lg">
                            İncele<span><FaChevronRight/></span>
                        </Button>
                        </Link>
                    </div>
                </main>
                <footer className="position-absolute bottom-0 start-50 translate-middle-x text-dark-50">
                   <Footer/>
                </footer>
            </div>
          </div>
    )
}

// HomePage.propTypes = {
//     location: PropTypes.string.isRequired,
//     setLocation: PropTypes.func.isRequired,
//     setLatitude: PropTypes.func,
//     setLongitude: PropTypes.func,
// }

export default HomePage
