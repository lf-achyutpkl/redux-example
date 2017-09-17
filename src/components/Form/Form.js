import React, {Component} from 'react';

class Form extends Component{

  constructor(){
    super();

    this.state = {
      isValid: true
    }
  }

  render(){
    return(
      <form onSubmit={this.handleForm}>
      {this.props.children}
      </form>
    );
  }

  handleForm = (event) => {
    event.preventDefault();
    console.log('submit button clicked')
    this.props.onSubmit();
  }
}

export default Form;
