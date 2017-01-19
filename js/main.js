import React from 'react'
import { ajax } from 'jquery'
import Validator from 'validator'

export default React.createClass({
  // This method runs as soon as react loads into memory
  componentDidMount() {
    // This component has been loaded into memory
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/fall16",
      dataType: "json",
      success: this.onInitialAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },
  getInitialState(){
    // In here we are modeling out all the properties needed for our UI to work
    return{
      isEmailValid: false,
      emailValue: "",
      emailAddresses: []
    }
  },
  // When the response is the array of all objects in database
  onInitialAjaxLoadSuccess(response){
    this.setState({
      emailAddresses: response
    })
  },
  // When we are responded with the persisted object
  onPostAjaxLoadSuccess(response){
    this.setState({
      emailAddresses: this.state.emailAddresses.concat(response)
    })
  },
  onAjaxLoadError(response){
    // @TODO: Handle error...
  },
  // Both store the value inside of state and determin validity of value
  onEmailChange(e){
    // Create reference to text inside of email input
    var currentEmailInputValue = e.target.value;
    // Returning True or False upon validation of text from input.
    var isEmail = Validator.isEmail(currentEmailInputValue);
    // This property of 'isEmailvalid' inside of state changes based on the
    // isEmail variable.
    // Also setting the state of the current value
    this.setState({
      isEmailValid: isEmail,
      emailValue: currentEmailInputValue
    })
  },
  // Store data
  onSubmit(e){
    console.log("THIS IS SUBMITTING")
    // on submit we want to prevent the page from refreshing
    e.preventDefault()
    // Get the email input value from state
    var currentEmailValue = this.state.emailValue;
    var isEmailValid = this.state.isEmailValid;
    // Send Data somewhere IF THE EMAIL IS VALID
    if(isEmailValid){
      // Send the data to DB
      ajax({
        url: "https://tiny-tiny.herokuapp.com/collections/fall16",
        dataType: "json",
        type: "POST",
        data: {
          currentEmailValue
        },
        success: this.onPostAjaxLoadSuccess,
        error: this.onAjaxLoadError
      })
    }
  },
  render() {
    return(
      <section>
        <h2>Current Emails</h2>
        {
          this.state.emailAddresses.map((emailAddress, i)=>{
            return <span key={i}> { emailAddress.currentEmailValue } </span>
          })
        }
        <form className={this.state.isEmailValid ? "valid" : "invalid"}
              onSubmit={this.onSubmit}>
          <input type="email" onChange={this.onEmailChange} />
          <input type="submit" />
        </form>
      </section>
    )
  }
})
