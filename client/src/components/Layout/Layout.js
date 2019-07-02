import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Description from '../Description/Description'
import Social from '../Social/Social'

class Layout extends Component {
    constructor() {
        super()

        this.state = {
            bio: {},
            ready: false
        }
    }

    render() {
        const { ready } = this.props.bio
        return (
            <div className={classnames('app', { ready: ready})}>
                <div className="appDescription">
                    <Description />
                </div>
                <div className="appSocial">
                    <Social />
                </div>
            </div>
        )
    }
}

Layout.propTypes = {
    bio: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    bio: state.bio
})

export default connect(mapStateToProps, {})(Layout)