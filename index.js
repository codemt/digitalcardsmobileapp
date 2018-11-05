/** @format */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from './src/components/splashscreen/index';
class Main extends Component{

    constructor(props){




            super(props);
            this.state = { currentScreen : 'SplashScreen'};
            console.log('Start Doing Some Tasks')
            setTimeout(()=>{
                console.log('Done some tasks for 3 seconds')
                this.setState({currentScreen:'App'})
            },3000)
    
    




    }
    
    render(){


        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />;
        return mainScreen;







    }
}
AppRegistry.registerComponent('MySimpleApp', () => Main);
