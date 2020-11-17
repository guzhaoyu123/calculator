import React from 'react'
import './appStyle.css'
import Display from './display'
import Number from './numberButton'
import SignButton from './signButton'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Display />
                <SignButton />
                <Number />
            </div>

        )
    }
}

export default App