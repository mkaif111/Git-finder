import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Navbar = ({icon,title}) => {
    
   
    
        return (
            <nav className="navbar bg-primary">
                <h1> <i className={icon}></i> {title}</h1>
            </nav>
        );
    
}
 // By default argument if not any argument given
Navbar.defaultProps = 
 {
     title: "Github-Finder",
     icon : "fab fa-github"
 };

 // define argument types
Navbar.propTypes = {
     title : PropTypes.string.isRequired,
     icon : PropTypes.string.isRequired
 };


export default Navbar
