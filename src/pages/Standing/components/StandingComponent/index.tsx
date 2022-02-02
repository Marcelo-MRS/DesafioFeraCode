import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';

import { ListItemComponent } from '~/components';
import { League, Standing , Standings} from '~/store/modules/standings/types';

import { SelectContainer, FlatList, SearchInput } from './styles';

interface StandingProps {
    standings?: Standings[];
    onPress?: (standing: Standing) => void;
}

interface RenderItemProps {
    item: any;
    index: number;
}

const StandingComponent: React.FC<StandingProps> = ({standings, onPress}) => {
    const [standing, setStanding] = useState<Standings[] | undefined>([]);

    console.tron.log(standings)
    const renderItem = ({item, index}: RenderItemProps) => (
        <View>
            <Text>{item.rank}</Text>
        </View>
        
    )

    return (
        <SelectContainer>
            <FlatList
                data={standings}
                renderItem={({item, index}) => renderItem({item, index})}
                // ListHeaderComponent={<SearchInput onChangeText={searchCountry} placeholder='Buscar país' />}
                // stickyHeaderIndices={[0]}
                // extraData={searchObj}
            />
        </SelectContainer>
    );
}

export default StandingComponent;