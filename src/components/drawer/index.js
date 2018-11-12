import React, { Component } from 'react'

import { View , Text , PropTypes, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Content , ListItem , List } from 'native-base';
export default class Drawer extends Component {

    static propTypes = {
       // closeDrawer: PropTypes.func.isRequired
      };
    
  render() {

     
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>

            <Text onPress={ ()=>actions.homepage() }>Go to Scene 2</Text>


         </View>

         <View style={{flex:2,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>

         <Text onPress={ ()=>actions.homepage() }>Go to Scene 2</Text>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Menu 1</Text>
                        </ListItem>
                        <ListItem>
                        <Text>Menu 2</Text>
                    </ListItem>
                    </List>

                </Content>


         </View>


      </View>
    )
  }
  

}

const styles = StyleSheet.create({


    

});