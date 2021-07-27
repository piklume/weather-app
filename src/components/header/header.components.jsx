import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import PrimarySearchAppBar from '../app-bar/app-bar.components';

import { fetchCountryStart } from '../../redux/country/country.action';


const Header = ({ fetchCountryStart }) => {

    const [searchField, setSearchField] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled((searchField.length > 0) ? false : true);
    },[searchField]);

    const handelChange = event => {
        event.preventDefault();

        setSearchField(event.target.value);
    }

    const handelSubmit = event => {
        event.preventDefault();
        // console.log(searchField);

        fetchCountryStart(searchField);
    }

    return (
        <div className='header-container'>
            <PrimarySearchAppBar handelChange={handelChange} handelSubmit={handelSubmit} value={searchField} isDisabled={isDisabled}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCountryStart: (searchText) => dispatch(fetchCountryStart(searchText))
});

export default connect(null, mapDispatchToProps)(Header);