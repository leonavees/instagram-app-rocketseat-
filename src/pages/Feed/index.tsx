import React, { useState, useEffect, useCallback } from 'react';

import LazyImage from '~/components/LazyImage';

import {
    Container,
    FeedList,
    Post,
    Header,
    Avatar,
    Name,
    Description,
    Loading,
} from './styles';

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

const Feed: React.FC = () => {
    const [feed, setFeed] = useState<PostInterface[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState<number[]>([]);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`
        );

        const data = (await response.json()) as PostInterface[];
        const totalItems = Number(response.headers.get('X-Total-Count'));

        setTotal(Math.floor(totalItems / 5));
        setFeed(shouldRefresh ? data : [...feed, ...data]);
        setPage(pageNumber + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);
        await loadPage(1, true);
        setRefreshing(false);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(
            changed.map(({ item }: { item: PostInterface }) => item.id)
        );
    }, []);

    return (
        <Container>
            <FeedList
                data={feed}
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                onViewableItemsChanged={handleViewableChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
                ListFooterComponent={loading ? <Loading /> : <></>}
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>

                        <LazyImage
                            shouldLoad={viewable.includes(item.id)}
                            aspectRatio={item.aspectRatio}
                            smallSource={{ uri: item.small }}
                            source={{ uri: item.image }}
                        />
                        <Description>{item.description}</Description>
                    </Post>
                )}
            />
        </Container>
    );
};

export default Feed;
