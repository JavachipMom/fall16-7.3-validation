import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return{
      isEmailValid: false
    }
  },
  onEmailChange(e){
    // Set the state of emailText to value of email input
    // var emailInputValue =
    var isEmail = Validator.isEmail(e.target.value);
    this.setState({isEmailValid:isEmail})
  },
  render() {
    return(
      <section>
        <form className={this.state.isEmailValid ? "valid" : "invalid"}>
          <input type="email" onChange={this.onEmailChange} />
          <input type="submit"/>
        </form>
      </section>
    )
  }
})
