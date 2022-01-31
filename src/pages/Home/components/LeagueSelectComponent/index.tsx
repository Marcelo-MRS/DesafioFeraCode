import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CardItemComponent } from '~/components';

import { Leagues } from '~/store/modules/leagues/types';

import { SelectContainer, FlatList, SearchInput } from './styles';

interface CountrySelectProps {
    leagues?: Leagues[]
}

const LeagueSelectComponent: React.FC<CountrySelectProps> = ({leagues}) => {
    const [searchObj, setSearchObj] = useState<Leagues[] | undefined>([]);

    useEffect(() => {
        setSearchObj(leagues);
    }, [])

    const searchLeague = (value: string) => {
        let newSearchObj = leagues?.filter((e: any) => e.league.name.includes(value));
        setSearchObj(newSearchObj);
    }

  return (
    <SelectContainer>
        <FlatList
            data={searchObj}
            renderItem={({item, index}) => <CardItemComponent item={item} key={String(index)} />}
            ListHeaderComponent={<SearchInput placeholder='Buscar liga' onChangeText={searchLeague} />}
            stickyHeaderIndices={[0]}
            numColumns={2}
        />
    </SelectContainer>
  );
}

export default LeagueSelectComponent;