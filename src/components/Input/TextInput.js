import React, {Component} from 'react';

import styles from './styles';

class TextInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: true
    }
  }


  render(){
    console.log('on submit: ', this.props.siteData)
    return(
      <div>
        <label>
          <span style={this.props.labelStyle}>{this.props.label}</span>
          <input 
            type = 'text'
            value = {this.props.value}
            onChange = {this._handleOnChange} 
            style = {this.props.textInputStyle}
          />
        </label>
        { this.state.error &&
          <div style={styles.error}>{this.props.errorMessage}</div>
        }
      </div>
    )
  }

  _handleOnChange = (event) => {
    let data = event.target.value;
    console.log(this.props.validations);
    this.props.onChange(event.target.value);
  }

  _setErrorState = () => {
    if(this.props.setErrorState){ 
      this.props.setErrorState(false)
    }
  }
}

TextInput.defaultProps = {
}

export default TextInput;
