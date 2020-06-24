import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface PostInterface {
    id: number;
    image: string;
    description: string;
    aspectRatio: number;
    small: string;
    author: {
        name: string;
        avatar: string;
    };
}

export const Container = styled.View``;

export const FeedList = styled(FlatList as new () => FlatList<PostInterface>)``;

export const Post = styled.View`
    margin-top: 10px;
`;

export const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`;

export const Name = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
    size: 'small',
    color: '#999',
})`
    margin: 30px 0;
`;
