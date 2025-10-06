import { Component, createRef } from "react";


class MyRef extends Component {

  constructor(props) {
    super(props)

    this.state = {
       value: ""
    }

    this.myTitle = createRef()
    // console.log(this.myTitle)

    this.myInput = createRef()
  }

  // update = (event) => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }


  addFocus = () => {
    this.myInput.current.focus();
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   this.myTitle.current.style.color = "blue";
  // }

  // handleClick = () => {
  //   console.log(this.myInput.current.value)
  // }

  render() {
    return (
      <div>
        <input ref={this.myInput} type="text" />
      </div>
    )

  }
}
export default MyRef;
