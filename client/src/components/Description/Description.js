import React, { Component } from 'react'
import './Description.css';
import logo from './logo.png';


class Description extends Component {
    render() {
        const { bio } = this.props
        return (
            <div className='description'>
                <h1>_</h1>
                <img className='logo' src={logo} alt="JosephAkayesi" />
                <p>{bio.introduction}</p>
                <p>{bio.body}</p>
                <p>{bio.conclusion}</p>
            </div>
        )
    }
}

export default Description