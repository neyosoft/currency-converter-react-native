import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import Themes from '../screens/Themes';
import Options from '../screens/Option';
import CurrencyList from '../screens/CurrencyList';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Option'
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes'
        }
    }
}, {
    headerMode: 'screen'
});

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({navigation}) => ({
            headerTitle: navigation.state.params.title
        })
    }
})

export default StackNavigator({
    Home: {
        screen: HomeStack
    },
    CurrencyList: {
        screen: CurrencyListStack
        
    }
}, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
})