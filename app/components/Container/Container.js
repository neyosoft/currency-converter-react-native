import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Container = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={ styles.containerStyle }>
                { children }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Container;