import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconCode from 'material-ui/svg-icons/action/code';

const instructionIcon = <IconCode />;
const githubIcon = <FontIcon className="fa fa-github"></FontIcon>;
const forkIcon = <FontIcon className="fa fa-code-fork"></FontIcon>;




class Footer extends Component {
    constructor(){
        super();
        //this.state = {
            //selectedIndex: 0,
        //};
        //this.select = (index) => this.setState({selectedIndex: index});
    }

    render() {
        return (
            <Paper zDepth={1}>
            <BottomNavigation>
                <BottomNavigationItem
                    label="How Install"
                    icon={instructionIcon}
                    onTouchTap={() => alert('Under dev')}
                />
                <BottomNavigationItem
                    label="I on github"
                    icon={githubIcon}
                    onTouchTap={() => window.open('https://github.com/greeschenko')}
                />
                <BottomNavigationItem
                    label="Fork This"
                    icon={forkIcon}
                    onTouchTap={() => window.open('https://github.com/greeschenko/react-mui-starter#fork-destination-box')}
                />
            </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer;
