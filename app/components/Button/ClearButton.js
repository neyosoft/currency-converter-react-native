import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


const ClearButton = ({text, onClick}) => {
    const { containerStyle, wrapper, textStyle, iconStyle } = styles;
    return (
        <TouchableOpacity style={containerStyle} onPress={onClick}>
            <View style={wrapper}>
                <Image resizeMode="contain" style={iconStyle} source={require('./images/icon.png')} />
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ClearButton;