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
    // url: `https://tiny-tiny.herokuapp.com/collections/sa_tech_userdata_test3/${this.props.params.userID}`
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
