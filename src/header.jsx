import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = () => this.setState({open: !this.state.open});
    this.handleClose = () => this.setState({open: false});
  }


  render() {
    return (
      <div>
        <AppBar
            title="React & Material-UI Starter"
            onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
