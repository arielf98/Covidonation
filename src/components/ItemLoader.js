import React, { useState } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const ItemLoader = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));

    Animated.timing(progress, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
        iterations: -1,
      }).start();

    return(
        <LottieView source={require('../lottie/42892-loading-animation-3-dots.json')} progress={progress} style={styles.anim} />
    )

}

export default ItemLoader

const styles = StyleSheet.create({
    anim:
    {
        width:125
    }
})
