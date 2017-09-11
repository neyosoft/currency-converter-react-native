import React, { Component } from 'react';
import { View, Text, Keyboard, Animated } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component{
    constructor(props){
        super(props);

        this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
        
    }


    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardHide);
    }

    componentwillUnmount(){
        this.KeyboardShowShowListener.remove();
        this.KeyboardHIdehowListener.remove();
    }

    render(){
        
        const { containerStyle, containerImage, image, testStyle } = styles;
        const containerImageStyle = [
            containerImage,
            {width: this.containerImageWidth, height: this.containerImageWidth},
        ]
        const imageStyle = [
            image,
            {width: this.imageWidth}
        ]
        return (
            <View style={containerStyle}>
                <Animated.Image 
                    style={containerImageStyle} 
                    source={require('./images/background.png')}
                    resizeMode="contain"
                >
                    <Animated.Image 
                        style={imageStyle} 
                        source={require('./images/logo.png')}
                        resizeMode="contain"
                    />
                </Animated.Image>
    
                <Text style={testStyle}>Currency Converter</Text>
            </View>
        )

    }

    keyboardShow = () => {
        
        Animated.parallel([

            Animated.timing(this.containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION
            })

        ]).start();

    }

    keyboardHide = () => {
        Animated.parallel([

            Animated.timing(this.containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION
            })

        ]).start();
    }
}

export default Logo;