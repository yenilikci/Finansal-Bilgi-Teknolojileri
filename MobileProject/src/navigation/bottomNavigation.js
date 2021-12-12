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
            colors={['#333','#000']}
            style={{
                width: 70,
                height: 70,
                borderRadius: 35
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
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: '#fff',
                borderTopColor: 'transparent',
                height: 100
            }
        }}>
            <Tab.Screen
            name="Blog"
            component={HomeScreen}
            options={{
                tabBarIcon: ((focused) => (
                    <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <Image
                        source={{uri: "https://img.icons8.com/ios/344/home.png"}}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#000' : '#a23d12'
                        }}
                        />
                        <Text style={{color: focused ? '#000' : '#a23d12'}}>
                            HOME
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
                        source={{uri: "https://img.icons8.com/nolan/2x/home-page.png"}}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton
                        {...props}
                    />
                )
            }}
            />

            <Tab.Screen
            name="Profile"
            component={HomeScreen}
            options={{
                tabBarIcon: ((focused) => (
                    <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <Image
                        source={{uri: "https://img.icons8.com/doodle/2x/user-male-skin-type-5.png"}}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: focused ? '#ddd' : '#000'
                        }}
                        />
                        <Text style={{color: focused ? '#000' : '#a23d12'}}>
                            HOME
                        </Text>
                    </View>
                ))
            }}
            />
        </Tab.Navigator>
        </>
    )
} 