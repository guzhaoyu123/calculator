import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { changeNumber } from './action'

class Number extends React.Component {

    getNumberButtonList = () => {
        let rst = [];
        for (let i = 9; i >= 0; i--) {
            rst.push(<div
                className='number-color'
                onClick={() => {
                    this.props.changeNumber(i)
                }}
                key={i}
            >{i}</div>)
        }
        return rst
    }

    render() {
        return (
            <Fragment>
                {this.getNumberButtonList()}
                <div className="number-color"
                    onClick={() => {
                        this.props.changeNumber('.')
                    }}   >.</div>
            </Fragment>

        )
    }
}

export default connect(null, { changeNumber })(Number)