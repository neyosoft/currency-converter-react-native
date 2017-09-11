import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $underlayColor: '$border',
    rowStyle: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white',
    },
    textStyle: {
        fontSize: 16,
        color: '$darkText'
    },
    separatorStyle: {
        marginLeft: 20,
        backgroundColor: '$border',
        height: StyleSheet.hairlineWidth
    },
    iconStyle:{
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconVisible: {
        backgroundColor: '$primaryBlue'
    }
})