import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return{
      emailText: ""
    }
  },
  onEmailChange(e){
    // Set the state of emailText to value of email input
    // var emailInputValue =
    console.log(e.target.value);
  },
  render() {
    return(
      <section>
        <form>
          <input type="email" onChange={this.onEmailChange} />
          <input type="submit"/>
        </form>
      </section>
    )
  }
})
