import React, { Component } from 'react'
import { View , Text  } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { Container, Header , Content, Left, Icon } from 'native-base';

 class AboutUs extends Component {

    navigate() {
            this.props.navigation.openDrawer();
      }
  render() {
    return (
                    <Toolbar
                    leftElement="menu"
                    onLeftElementPress={ () => this.navigate()}
                    centerElement="Searchable"
                    searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    }}
                    rightElement={{
                        menu: {
                            icon: "more-vert",
                            labels: ["item 1", "item 2"]
                        }
                    }}
                    onRightElementPress={ (label) => { console.log(label) }}
                />


        )
  }
}
export default AboutUs