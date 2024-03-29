import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';

const ICON_SIZE = 23;
const ICON_COLOR = '#868686';
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Option extends Component{

    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />

                <ListItem
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon = {<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon = {<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
                />
                <Separator />
            </ScrollView>
        )
    }

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes');
    }

    handleSitePress = () => {
        Linking.openURL('http://fixer.io')  
            .catch( () => {
                this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now.");
            })
    }
}

export default connectAlert(Option);