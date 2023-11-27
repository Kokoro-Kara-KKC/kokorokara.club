import React from 'react'
import ReactDOM from 'react-dom'

const main = document.body

class Basic extends React.Component {
  render(){
    return <div> Welcome to Kokoro Kara Central! </div>
  }
}

ReactDOM.render(<Basic />, main)
