import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './teste/paginas/login.js'
import Home from './src/pages/home.js'
import Config from './src/pages/conf.js'
import Index from './teste/paginas/index.js'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
	return(
		 <Tab.Navigator
		    initialRouteName="Home"
		    activeColor={"#fff"}
		    barStyle= {{ backgroundColor: "#55585b"}}

		
         >
		        <Tab.Screen 
		            name="Home"
		            component={Home}
		            options= {{
		            	tabBarLabel: 'Home',
		            	tabBarIcon: (color) =>(
		            		 <Icon name= "home" color='#886796' size={26} />
		            		)
		            }}
		        />

		        <Tab.Screen 
                    name="Info"
                    component={Config}
                    options= {{
		            	tabBarLabel: 'Home',
		            	tabBarIcon: (color) =>(
		            		 <Icon name= "menu" color='#886796' size={26} />
		            		)
		            }}
                />


        </Tab.Navigator>
	);

};

const Router = () => {
	return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
               
                <Stack.Screen
	                name="Login"
	                component={Login}
	                options={{ headerShown: false }}
                />

                <Stack.Screen
	                name="Home"
	                component={HomeTabs}
                />

                 <Stack.Screen
	                name="Index"
	                component={Index}
                />

              
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;


          

