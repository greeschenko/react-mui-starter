import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/action/get-app';

const Container = () => (
  <Card>
    <CardHeader
      title="Oleksiy Hryshchenko"
      subtitle="full-stack web developer"
      avatar="https://avatars7.githubusercontent.com/u/2754533?v=4&s=460"
    />
    <FloatingActionButton
        backgroundColor="#a4c639"
        secondary={true}
        className="main_btn"
        onTouchTap={() => window.open('https://github.com/greeschenko/react-mui-starter')}
    >
        <ContentAdd />
    </FloatingActionButton>
    <CardText>
        <p>
            My frontent starter with React and Material-UI.
        </p>
        <p>
            Include webpack-dev-server and can be launch in Vagrant container
        </p>
        <p>components:</p>
        <div className="componentlist_item">
            <ul>
                <li>"babel-core": "^6.25.0"</li>
                <li>"babel-loader": "^7.1.1"</li>
                <li>"babel-preset-es2015": "^6.24.1"</li>
                <li>"babel-preset-react": "^6.24.1"</li>
                <li>"babel-preset-react-hmre": "^1.1.1"</li>
                <li>"babel-preset-stage-0": "^6.24.1"</li>
                <li>"babel-preset-stage-1": "^6.24.1"</li>
                <li>"css-loader": "^0.28.4"</li>
                <li>"file-loader": "^0.11.2"</li>
                <li>"font-awesome": "^4.7.0"</li>
                <li>"jquery": "^3.2.1"</li>
            </ul>
        </div>
        <div className="componentlist_item">
            <ul>
                <li>"material-ui": "^0.18.6"</li>
                <li>"node-sass": "^4.5.3"</li>
                <li>"react": "^15.6.1"</li>
                <li>"react-dom": "^15.6.1"</li>
                <li>"react-hot-loader": "^1.3.1"</li>
                <li>"react-tap-event-plugin": "^2.0.1"</li>
                <li>"resolve-url-loader": "^2.1.0"</li>
                <li>"sass-loader": "^6.0.6"</li>
                <li>"style-loader": "^0.18.2"</li>
                <li>"webpack": "^3.2.0"</li>
                <li>"webpack-dev-server": "^2.5.1"</li>
            </ul>
        </div>
    </CardText>
  </Card>
);

export default Container;
