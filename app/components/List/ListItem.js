import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
    text, 
    onPress, 
    selected = false, 
    checkMark = true, 
    visible = true, 
    customIcon = null,
    iconBackground
    }) => {
    const { rowStyle, textStyle, $underlayColor } = styles;

    return (
        <TouchableHighlight onPress={onPress} underlayColor={$underlayColor}>
        <View style={rowStyle}>
            <Text style={textStyle}>{text}</Text>
            { selected ? <Icon checkMark={checkMark} visible={visible} iconBackground={iconBackground} /> : <Icon /> }
            { customIcon }
        </View>
        </TouchableHighlight>
    )
} 

export default ListItem;