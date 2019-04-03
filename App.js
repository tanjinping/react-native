import React, {Component} from 'react'
import {Text, View, Image, StatusBar, TouchableOpacity} from 'react-native'
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator
} from 'react-navigation'

//tab导航
class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar barStyle='dark-content' backgroundColor='green' translucent/>
                <Text>首页</Text>
                <Image source={require('./img/home.png')} style={{width: 30, height: 30}}/>
            </View>
        );
    }
}

class User extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>用户个人界面!</Text>
            </View>
        );
    }
}

//stack导航
class BigCar extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'green', alignItems: 'center'}}>
                <Text>BigCar?????????</Text>
                <TouchableOpacity style={{backgroundColor: 'black', height: 30, width: 30}}
                                  onPress={() => this.props.navigation.navigate('SmallCar', {bbq: 'fuck?'})}>

                </TouchableOpacity>
            </View>
        );
    }
}

class SmallCar extends Component {
    static navigationOptions = ({navigation}) => {

        return {
            title: navigation.state.params.bbq
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'yellow', alignItems: 'center'}}>
                <Text>{this.props.navigation.state.params.bbq}</Text>
            </View>
        );
    }
}

//抽屉式导航
class OnePage extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/*<StatusBar barStyle='dark-content' backgroundColor='green' translucent/>*/}
                <Text>OnePage</Text>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.toggleDrawer()
                } style={{backgroundColor: 'black', height: 30, width: 30}}/>

            </View>
        );
    }
}

class TwoPage extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>TwoPage</Text>
                <TouchableOpacity onPress={() =>
                    this.props.navigation.closeDrawer()
                } style={{backgroundColor: 'black', height: 30, width: 30}}/>
            </View>
        );
    }
}

const Drawer = createDrawerNavigator({
    OnePage: {
        screen: OnePage,
        navigationOptions: {
            drawerLabel: '第一个页面',
            drawerIcon: <Image source={require('./img/home.png')} style={{width: 30, height: 30}}/>
        }
    },
    TwoPage: {
        screen: TwoPage,
        navigationOptions: {
            drawerLabel: '第二个页面',
            drawerIcon: <Image source={require('./img/home.png')} style={{width: 30, height: 30}}/>
        }
    }
})

const
    Stack = createStackNavigator({
        BigCar: {
            screen: BigCar,
            navigationOptions: {
                title: 'BigCar'
            }
        },
        SmallCar: {
            screen: SmallCar,
            // navigationOptions: {
            //     title: 'SmallCar'
            // }
        }
    })

const Tabs = createBottomTabNavigator({
        home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: <Image source={require('./img/home.png')} style={{width: 30, height: 30}}/>
            }
        },
        user: {
            screen: User,
            navigationOptions: {
                tabBarLabel: '个人心中',
                tabBarIcon: <Image source={require('./img/home.png')} style={{width: 30, height: 30}}/>
            }
        }

    }, {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'blue',
            style: {
                height: 70,
                border: '1px solid black',
                shadowColor: 'rgb(0,0,0,0.24)'
            }
        }
    }
);

export default createAppContainer(Drawer);
