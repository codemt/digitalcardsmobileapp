import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label , Button , Body, CheckBox ,ListItem, Text , View } from 'native-base';
import { StyleSheet , Image } from 'react-native';
export default class LoginPage extends Component {
  render() {

              return (


              
                <Container style={styles.container}>
              
                <Content>
                  <Form style={styles.form}>
                  <Image source={require('../../assets/images/batlogo.png')} style={styles.title} />
                    <Item fixedLabel>
                      <Label style={{ color : 'red' }}>Username</Label>
                      <Input  style={{ color: 'white'}} />
                    </Item>
                    <Item fixedLabel last>
                      <Label style={{ color : 'red' }}>Password</Label>
                      <Input   style={{ color: 'white'}}  />
                    </Item>
                    <Button full bordered light  style={styles.button}>
                    <Text style={{ color: 'red',textAlign:'center'}}> Sign Up/Sign In </Text>
                  </Button>
                  </Form>
                  <Text style={{ color: 'red',textAlign:'center',marginTop:10}}>Or</Text>
                  <Text style={{ color: 'white',textAlign:'center',marginTop:10,marginBottom:10}}>Sign in With</Text>
                  <View style={styles.social}> 
                        <Button block style={{ marginRight: 10,width:175,height:50 }}><Text> Facebook </Text></Button>
                        <Button danger style={{ marginRight: 10,width:175,height:50 }} ><Text> Google </Text></Button>         
                  </View>  
                  <ListItem>
                  <CheckBox checked={false} />
                  <Body>
                    <Text style={{color : 'white' }}>Discussion with Client</Text>
                  </Body>
                </ListItem>
                </Content>
              </Container>
              )
  }
}
const styles = StyleSheet.create({


    form : { 


        backgroundColor: 'black',
        marginTop : 60,
        

    },
    container : {



        backgroundColor : 'black'

    },
    title: {

      // resizeMode : 'contain',
      //  paddingTop : 100,
        alignSelf: 'center',
        height:100,
        //width:400

  },
  button : {

      marginTop : 15,
      width:400,
      alignSelf: 'center',
      backgroundColor : 'black'


  },
  social : {

      flex:  1 ,
      flexDirection: 'row',
      padding: 15,
      alignSelf: 'center',
      paddingBottom: 10,
     // justifyContent:'space-between'


  }

});