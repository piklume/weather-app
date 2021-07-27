import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './landing-page.styles.css';

import { selectCountryValues } from '../../redux/country/country.selector';
import MediaCard from '../card/card.component';

const LandingPage = ({ country }) => {

    // console.log('In Landingpage -', country);
    
    return (
        <div className='landing-page-container'>
            <MediaCard {...country} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    country: selectCountryValues
});

export default connect(mapStateToProps)(LandingPage);