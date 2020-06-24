/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { ImageSourcePropType, Animated } from 'react-native';
import { Small, Original } from './styles';

interface Props {
    smallSource: ImageSourcePropType;
    source: ImageSourcePropType;
    aspectRatio: number;
    shouldLoad: boolean;
}

const LazyImage: React.FC<Props> = ({
    smallSource,
    source,
    aspectRatio,
    shouldLoad,
}) => {
    const opacity = new Animated.Value(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (shouldLoad) {
            setTimeout(() => {
                setLoaded(true);
            }, 1000);
        }
    }, [shouldLoad]);

    function handleAnimate() {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    return (
        <Small
            source={smallSource}
            ratio={aspectRatio}
            resizeMode="contain"
            blurRadius={2}
        >
            {loaded && (
                <Original
                    style={{ opacity }}
                    source={source}
                    ratio={aspectRatio}
                    resizeMode="contain"
                    onLoadEnd={handleAnimate}
                />
            )}
        </Small>
    );
};

export default LazyImage;
