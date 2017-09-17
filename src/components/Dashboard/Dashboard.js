import React, {Component} from 'react';
import {MenuAnchor, Menu, MenuItem, MenuDivider, Button} from 'react-mdc-web/lib';

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
        <Button compact
          onClick={() => this.setState({open: true})} 
        >
         Show menu 
      </Button> 
        <MenuAnchor>
        <Menu
          open={this.state.open}
          onClose={() => this.setState({open: false})}
        >
          <MenuItem>
            Andromeda
          </MenuItem>
          <MenuItem>
            Black Eye Galaxy
          </MenuItem>
          <MenuItem>
            Bode's Galaxy
          </MenuItem>
          <MenuItem>
            Cartwheel Galaxy
          </MenuItem>
          <MenuDivider/>
          <MenuItem>
            Cosmos Redshift 7
          </MenuItem>
        </Menu>
      </MenuAnchor> 
    </div>
    );
  }
}

export default Dashboard;
