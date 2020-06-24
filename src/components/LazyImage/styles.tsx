import styled from 'styled-components/native';
import { Animated } from 'react-native';

interface ImageProps {
    ratio: number;
}

export const Small = styled.ImageBackground<ImageProps>`
    width: 100%;
    aspect-ratio: ${props => props.ratio};
`;

// const Original = styled.Image<ImageProps>`
//     width: 100%;
//     aspect-ratio: ${props => props.ratio};
// `;

export const Original = Animated.createAnimatedComponent(styled.Image<
    ImageProps
>`
    width: 100%;
    aspect-ratio: ${props => props.ratio};
`);
