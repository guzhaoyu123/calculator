import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { changeNumber } from './action'

class SignButton extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('')
                    }}
                >AC</div>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('+')
                    }}
                >+</div>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('-')
                    }}
                >-</div>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('*')
                    }}
                >X</div>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('/')
                    }}
                >/</div>
                <div className='sign-color'
                    onClick={() => {
                        this.props.changeNumber('=')
                    }}
                >=</div>
            </Fragment>
        )
    }
}

export default connect(null, { changeNumber })(SignButton)