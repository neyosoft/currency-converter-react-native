import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    containerStyle: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        marginRight: 11
    },

    textStyle: {
        color: '$white',
        fontSize: 14,
        fontWeight: '300',
        paddingVertical: 20
    }
});

export default styles;