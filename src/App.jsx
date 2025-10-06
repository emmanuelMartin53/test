import {Component, createRef} from 'react'
import './App.css'
import MyRef from './MyRef'

class App extends Component {

  constructor(props) {
    super(props)

   this.refComp = createRef()
  }


  handleClick = () => {
    this.refComp.current.addFocus()
  }


  render () {
    return (
        <div className="App">
          <MyRef ref={this.refComp} />

          <button onClick={this.handleClick}>Valider</button>
        </div>
    )
  }
}

export default App
