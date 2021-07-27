import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './landing-page.styles.css';

import { selectCountryValues } from '../../redux/country/country.selector';
import MediaCard from '../card/card.component';
import CustomizedDialogs from '../dialog-box/dialog-box.components';
// import { fetchWeatherStart } from '../../redux/country/country.action';

const LandingPage = ({ country }) => {

    // console.log('In Landingpage -', country);
    const [showDialog, setShowDialog] = useState(false);

    const handelClick = () => {
        setShowDialog(true);
    }

    const handleClose = () => {
        setShowDialog(false);
    }
    
    return (
        <div className='landing-page-container'>
            <MediaCard {...country} handelClick={handelClick} />
            {
                (showDialog === true) ?
                <CustomizedDialogs open={showDialog} handleClose={handleClose}/> : null
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    country: selectCountryValues
});


export default connect(mapStateToProps)(LandingPage);