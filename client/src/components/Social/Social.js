import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Social.css'

class Social extends Component {
    render() {
        const { social } = this.props.bio.bio
        return (
            <div>
                <div className='social'>
                    <a href={social ? social.twitter : "https://twitter.com/josephakayesi"} target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter' /></a>
                    <a href={social ? social.facebook : "https://www.facebook.com/josephakayesi1"} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href={social ? social.linkedin : "https://www.linkedin.com/in/josephakayesi/"} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href={social ? social.github : "https://github.com/JosephAkayesi"} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href={social ? social.medium : "https://medium.com/@josephakayesi"} target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
                </div>
            </div>
        )
    }
}

Social.propTypes = {
    bio: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bio: state.bio
})

export default connect(mapStateToProps, {})(Social)
