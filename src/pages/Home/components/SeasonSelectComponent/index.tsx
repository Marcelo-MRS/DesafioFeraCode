import React from 'react';

import { ListItemComponent } from '~/components';

import { SelectContainer, FlatList } from './styles';

interface SeasonsSelectProps {
    seasons?: number[];
    onPress?: (season: number) => void;
}

interface RenderItemProps {
    item: any;
    index: number;
}

const SeasonSelectComponent: React.FC<SeasonsSelectProps> = ({seasons, onPress}) => {

    const renderItem = ({item, index}: RenderItemProps) => (
        <ListItemComponent item={item} text={item} key={String(index)} onPress={onPress} />
    )

    return (
        <SelectContainer>
            <FlatList
                data={seasons}
                renderItem={({item, index}: any) => renderItem({item, index})}
            />
        </SelectContainer>
    );
}

export default SeasonSelectComponent;