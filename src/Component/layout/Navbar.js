import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {
    
    // By default argument if not any argument given
    static defaultProps = 
    {
        title: "Github-Finder",
        icon : "fab fa-github"
    };

    // define argument types
    static propTypes = {
        title : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1> <i className={this.props.icon}></i> {this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
