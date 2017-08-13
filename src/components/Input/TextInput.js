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
    return(
      <div>
        <label>
          <span style={this.props.labelStyle}>{this.props.label}</span>
          <input 
            type = 'text'
            value = {this.props.value}
            onChange = {this._handleOnChange} 
            style = {this.props.textInputStyle}
            minLength = {this.props.minLength} 
            maxLength = {this.props.maxLength}
          />
        </label>
        { this.state.error &&
          <div style={styles.error}>{this.props.errorMessage}</div>
        }
      </div>
    )
  }

  _handleOnChange = (event) => {
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
