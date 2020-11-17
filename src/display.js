import React from 'react'
import {connect} from 'react-redux'

 class Display extends React.Component{
     render (){
         return(
             <div>
                 {this.props.currentNumber}
                 <br/>
                 {this.props.finalResult}
             </div>
         )
     }
 }
 const mapStateToProps = (state) => {
     console.log(state);
     return {
         currentNumber:state.currentNumber,
         finalResult:state.finalResult
     }
 }

 export default connect(mapStateToProps)(Display)