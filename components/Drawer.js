import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import InicioScreen from './Inicio';
import DialogScreen from './DialogScreen';
const state=true;

const Inicio = createStackNavigator({
    Inicio: {
        screen: InicioScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () =>navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerRight:<Text>   
                            <Icon2
                            name="circle-with-plus"
                            size={35}
                            color="#FFF"
                             />
                        </Text>,
           
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }
  
});

/*const Todo = createStackNavigator({
    Todo: {
        screen: InicioScreen,
      ç
        navigationOptions: ({navigation}) => ({
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color="#FFF"
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
            headerStyle: {backgroundColor: '#E73536'},
            headerTintColor: 'white'
        })
    }
  
});//*/



const DrawerRaiz = createDrawerNavigator({
    David_List: {
        screen: Inicio
    },
    New_Todo: {
        screen: Inicio
    },
    Done: {
        screen: Inicio
    }
}, {
    drawerBackgroundColor: '#E73536',
    contentOptions: {
        activeTintColor: 'white'
    }
});

export default DrawerRaiz;