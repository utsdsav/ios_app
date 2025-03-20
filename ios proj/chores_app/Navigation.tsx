import React from "react";
import { useState, useRef, useEffect } from "react";
import {NavigationContainer} from "@react-navigation/native";
// import { View, Animated, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  AnimatedTabBarNavigator,
  TabElementDisplayOptions, // optional
} from 'react-native-animated-nav-tab-bar'
// import Icon from 'react-native-vector-icons/Feather';
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//     parseIconFromClassName,
//   } from 'react-native-fontawesome';
import { Icon as ElementIcon } from 'react-native-elements'
import { observer } from "mobx-react";
import SecondRootTabView from "./SecondTabRootView";
import { useRootStore } from "./RootStore";
import AuthScreen from "./AuthScreen";
import ProfileScreen from "./ProfileScreen";
import TabThreeScreen from "./TabThreeScreen";
import CreateTask from "./screens/CreateTask";
import MyTask from "./screens/MyTasks";

// const Tab = createMaterialBottomTabNavigator();
const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator();


const Navigation = observer(() => {
    const rootStore = useRootStore()
    const [signedIn, setSignedIn] = useState(false)
    rootStore.setLoginStateFunc(setSignedIn)
    if (signedIn) {
        return (
            <NavigationContainer >
                <RootNavigator />
            </NavigationContainer>
        )
    } else {
        return <AuthScreen setSignedIn={setSignedIn} />
    }
})

export default Navigation;

const RootNavigator = observer(() => {
    return (
        <Stack.Navigator initialRouteName="Root">
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title:'Previous', animationEnabled: false, headerShown: false, gestureEnabled: false}} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Screen',  }}/> 
            <Stack.Screen name='TabThree' component={TabThreeScreen} options={{title: 'Friends'}} /> 
            <Stack.Screen name='CreateTask' component={CreateTask} options={{headerShown: false, gestureEnabled: false}}/>    
            {/* <Stack.Screen name='Home' component={HomeRootTabView} options={{animationEnabled: true, headerShown: false}} />
            <Stack.Screen name='Profile' component={ProfileRootTabView} options={{animationEnabled: true, headerShown: false}} />
            <Stack.Screen name='Community' component={CommunityRootTabView} options={{animationEnabled: true, headerShown: false}} />  */}
        </Stack.Navigator>
    )
})

function BottomTabNavigator() {

    return (
        <Tabs.Navigator
            initialRouteName="Root"
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                activeBackgroundColor: 'black',
                tabStyle: {
                    // borderWidth: 2,
                    // borderColor: '#889EFF'
                },
                labelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                }
            }}
            appearance={{
                whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
                whenActiveShow: TabElementDisplayOptions.BOTH,
                // whenActiveShow: TabElementDisplayOptions.BOTH,
                dotSize: "small",
                horizontalPadding: 20,
                topPadding: 10,
                floating: false,
                tabBarBackground: 'white'
                // shadow: true,
            }}
        >
            <Tabs.Screen 
                name="First"
                component={MyTask}
                options={{
                    tabBarIcon: ({ focused, color, size}) => (
                        <ElementIcon 
                            name='plus'
                            type='material-community'
                            color={focused ? color : 'black'}
                            size={size + 8}
                        />
                    ), title: 'Create Task'
                }}
            />
            <Tabs.Screen 
                name="Second"
                component={SecondRootTabView}
                options={{
                    tabBarIcon: ({ focused, color, size}) => (
                        <ElementIcon 
                            name='format-list-bulleted'
                            type='material-community'
                            color={focused ? color : 'black'}
                            size={size + 8}
                        />
                    ), title: "View My Tasks"
                }}
            />
        </Tabs.Navigator>
    )
}

