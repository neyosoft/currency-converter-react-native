import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({onClick}) => {

    const { containerStyle, iconStyle, buttonStyle } = styles;

    return (
        <View style={containerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={onClick}>
                <Image style={iconStyle} resizeMode="contain" source={require('./images/gear.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Header;