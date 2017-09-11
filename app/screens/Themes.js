import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStylesheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple'
})

export default class Themes extends Component {
    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Blue"
                    selected
                    checkMark={false}
                    iconBackground={styles.$blue}
                    onPress={() => this.handleThemePress(styles.$blue)}
                />
                <ListItem
                    text="Orange"
                    selected
                    checkMark={false}
                    iconBackground={styles.$orange}
                    onPress={() => this.handleThemePress(styles.$orange)}
                />
                <ListItem
                    text="Green"
                    selected
                    checkMark={false}
                    iconBackground={styles.$green}
                    onPress={() => this.handleThemePress(styles.$green)}
                />
                <ListItem
                    text="Purple"
                    selected
                    checkMark={false}
                    iconBackground={styles.$purple  }
                    onPress={() => this.handleThemePress(styles.$purple)}
                />
            </ScrollView>
        )
    }

    handleThemePress = (color) => {
        console.log('Changing theme color to ' + color);
        this.props.navigation.goBack();
    }
}