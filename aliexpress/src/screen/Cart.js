import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import * as themes from '../components/theme';


const styles = StyleSheet.create({
    logo: {
        resizeMode: 'cover',
    },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const Cart: () => React$Node = () => {
    
    const bg = {
        background: themes.COLORS.white
    };

    return (
        <View style={[styles.container,bg]}>
           <Text>Cart</Text>
        </View>
    )
}

export default Cart;