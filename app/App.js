import React from "react"
import Computer from "./computer.js"

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return <div>
      <Computer></Computer>
    </div>
  }
}

export default App

