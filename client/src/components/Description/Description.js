import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Linkify from 'react-linkify'
import './Description.css';
import logo from './logo.png';


class Description extends Component {
    render() {
        const { bio } = this.props.bio
        return (
            <div className='description'>
                <h1>_</h1>
                <img className='logo' src={logo} alt="Joseph Akayesi" />
                <Linkify>
                    <p>{bio.introduction}</p>
                    <p>{bio.body}</p>
                    <p>{bio.conclusion}</p>
                </Linkify>
            </div>
        )
    }
}

Description.propTypes = {
    bio: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bio: state.bio
})

export default connect(mapStateToProps, {})(Description)