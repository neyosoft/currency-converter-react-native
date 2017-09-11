import React, { Component } from 'react';
import { Text, View, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import {ListItem, Separator} from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';



class CurrencyList extends Component{
    render(){

        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={ ({item}) => {
                        return (
                            <ListItem 
                                text={item}
                                selected={item === TEMP_CURRENT_CURRENCY}
                                onPress={ this.handlePress }
                            />
                        )
                    }}
                    keyExtractor={item=> item}
                    ItemSeparatorComponent={Separator} 
                />
            </View>
        )

    }

    handlePress = () => {
        this.props.navigation.goBack(null);
    }
}

export default CurrencyList;