import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
    containerStyle: {
        position: 'absolute',
        left: 0, 
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 20
        }
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    iconStyle: {
        width: 18
    }
})