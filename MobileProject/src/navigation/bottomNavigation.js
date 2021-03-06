import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs'

import { LinearGradient } from 'expo-linear-gradient';
import { HomeScreen } from "../screens";
import CustomAppBar from "../components/appbar/CustomAppbar"
import ProfileScreen from "../screens/profilescreen/ProfileScreen";
import BlogScreen from "../screens/blogscreen/BlogScreen";

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onPress={onPress}>
            <LinearGradient
            colors={['#333','#000','#474747']}
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
            }}>
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default function bottomNavigation () {
    return(
        <>
        <CustomAppBar/>
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false}}
        tabBarOptions={{
            inactiveBackgroundColor: '#000',
            activeBackgroundColor: '#000',
            showLabel: false,
        }}
        >
            <Tab.Screen
            name="Blog"
            component={BlogScreen}
            options={{
                tabBarIcon: (({focused}) => (
                    <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <Image
                        source={{uri: "https://img.icons8.com/ios-glyphs/2x/news.png"}}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? '#F56FAD' : '#fff'
                        }}
                        />
                        <Text style={{color: focused ? '#F56FAD' : '#fff'}}>
                            News 
                        </Text>
                    </View>
                ))
            }}
            />

            <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image
                        source={require('../assets/coinflip.gif')}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <LinearGradient colors={['#000', '#000', '#000']}>
                        <TabBarCustomButton
                          {...props}
                        />
                    </LinearGradient>
                   
                )
            }}
            />

            <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: (({focused}) => (
                    <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <Image
                        source={{uri: "https://img.icons8.com/material-sharp/2x/visible.png"}}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? '#F56FAD' : '#fff',
                        }}
                        />
                        <Text style={{color: focused ? '#F56FAD' : '#fff'}}>
                            Watch List
                        </Text>
                    </View>
                ))
            }}
            />
        </Tab.Navigator>
        </>
    )
}