import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Icon = ({
    checkMark, 
    visible,
    iconBackground
    }) => {
    const { iconStyle, iconVisible } = styles;
    const iconMainStyle = [iconStyle];

    if(visible){
        iconMainStyle.push(iconVisible);
    }

    if(iconBackground){
        iconMainStyle.push({backgroundColor: iconBackground})
    }

    return (
        <View style={iconMainStyle}>
            { checkMark ? <Image resizeMode="contain" style={{width: 18}} source={require('./images/check.png')} /> : null }
        </View>
    )
}

export default Icon;