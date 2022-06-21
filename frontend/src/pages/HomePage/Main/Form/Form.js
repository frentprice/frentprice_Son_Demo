import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';


function Form({ location: value, setLocation: setValue, setLatitude, setLongitude }) {

    const [suggestions, setSuggestions] = useState([]);

    const onSubmissionHandler = (e) => {
        e.preventDefault();
        console.log(value);
        axios.get(`http://localhost:9000/${value}`)
            .then(res => {
                const { lat, long, location } = res.data;
                setLatitude(res.data.latitude);
                setLongitude(res.data.longitude);
                console.log(res.data);
            })
            .catch(error => {
                console.log('thre was an error', error);
            })
        setValue('');
    }

    const onChangeHandler = async (e) => {
        setValue(e?.target?.value);

        try {
            const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1IjoiZnJlbnRwcmljZSIsImEiOiJjbDNyY2s1cTQwa3R2M2lwZnRtYnprYW00In0.aHkOprVn5Q-3VcNAk4OyOA&autocomplete=true`;
            const response = await fetch(endpoint);
            const results = await response.json();
            setSuggestions(results?.features);
        } catch (error) {
            console.log("Error fetching data, ", error)
        }

    }
    const suggestionStyle = {
        background: "white",
        position: "absolute",
        width: "350px",
        padding: "10px",
        display: "block",
        margin: "45px 0px 0px 0px",
        listStyleType: "none"
    }
    return (
        <form onSubmit={onSubmissionHandler} className="d-flex justify-content-center">
            <input
                type={'text'}
                id="location"
                value={value}
                onChange={onChangeHandler}
                placeholder="Konum Örn.Sevim sokak"
                className='w-50 fs-4 rounded-4 border border-1'
                style={{ position: 'relative' }} />
            {
                suggestions?.length > 0 && (
                    <div className='suggestion-wrapper' style={suggestionStyle}>
                        <ul>
                            {suggestions.map((suggestion, index) => {
                                return (
                                    <li style={{ cursor: 'pointer', maxWidth: '400px' }} key={index} onClick={() => {
                                        setValue(suggestion.place_name);
                                        setSuggestions([]);
                                    }}>
                                        {suggestion.place_name}
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                )
            }
            <Link to={`/${value}`}>
                <Button
                    className='rounded-4'
                    size="lg"
                    variant='primary'
                >Ara</Button>
            </Link>

        </form>
    )
}

Form.propTypes = {
    location: PropTypes.string,
    setLocation: PropTypes.func,
    setLatitude: PropTypes.func,
    setLongitude: PropTypes.func,
}

export default Form