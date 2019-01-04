import React from "react"
import {connect} from "react-redux"
// 引入action粘合剂
import {bindActionCreators} from "redux"
// 将自己的action引入：
import * as computers from "./action/computerAction.js"

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    console.log(computers)
    return <div>
      <button onClick={()=>{this.props.actions.ADD(5)}}>+</button>
      <p>{this.props.num}</p>
      {/* <button onClick={}>-</button> */}
    </div>
  }
}

export default connect(
  (state)=>{
    return {
      // 这里只需要在拿数据的时候改变下
      num:state.computerReducer.num
    }
  },
  (dispatch)=>({
    actions : bindActionCreators(computers,dispatch)
  })
)(App)

