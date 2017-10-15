import React, {Component} from 'react';
import SimpleForm from '../ReduxForm/SimpleForm';

class Dashboard extends Component{
  constructor(){
    super();

    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div>
        <div style={{ padding: 15 }}>
          <h2>Simple Form</h2>
          <SimpleForm onSubmit={(data) => console.log(data)} />
      </div>
    </div>
    );
  }
}

export default Dashboard;
