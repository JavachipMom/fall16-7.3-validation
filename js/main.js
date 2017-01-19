import React from 'react'
import { ajax } from 'jquery'
import Validator from 'validator'

export default React.createClass({
  componentDidMount() {
    // This component has been loaded into memory
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/fall16",
      dataType: "json",
      success: this.onAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },
  getInitialState(){

    return{
      isEmailValid: false
    }
  },
  onAjaxLoadSuccess(response){
    console.log(response);
  },
  onAjaxLoadError(response){

  },
  onEmailChange(e){
    // Returning True or False upon validation of text from input.
    var isEmail = Validator.isEmail(e.target.value);
    // This property of 'isEmailvalid' inside of state changes based on the
    // isEmail variable.  
    this.setState({isEmailValid:isEmail})
  },
  // Store data
  onSubmit(e){
    // on submit we want to prevent the page from refreshing
    e.preventDefault()
    // Get the Data
    // Send Data somewhere
  },

  render() {
    return(
      <section>
        <form className={this.state.isEmailValid ? "valid" : "invalid"}>
          <input type="email" onChange={this.onEmailChange} />
          <input type="submit" onSubmit={this.onSubmit} />
        </form>
      </section>
    )
  }
})
