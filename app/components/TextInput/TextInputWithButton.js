import React from 'react';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const TextInputWithButton = (props) => {
    const {buttonText, onClick, editable = true} = props
    const { 
        containerStyle, 
        containerDisabledStyle, 
        buttonContainerStyle, 
        buttonTextStyle, 
        borderStyle, 
        inputStyle,
        $buttonBackgroundColorBase,
        $buttonBackgroundColorModifier } = styles;

    // if(editable === false){
    //     containerStyle.push(containerDisabledStyle)
    // }

    const underlayColor = color($buttonBackgroundColorBase).darken($buttonBackgroundColorModifier);

    return (
        <View style={containerStyle}>
            <TouchableHighlight 
                style={buttonContainerStyle}
                onPress={onClick}
                underlayColor={underlayColor} 

            >
                <Text style={buttonTextStyle}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={borderStyle} />
            <TextInput
                style={inputStyle} 
                underlineColorAndroid="transparent"
                {...props}
            />
        </View>
    )
}


export default TextInputWithButton;