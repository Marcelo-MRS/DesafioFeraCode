import React, { useEffect, useState } from 'react';
import { CardItemComponent, SearchInputComponent } from '~/components';

import { Leagues } from '~/store/modules/leagues/types';
import {NotFoundComponent} from '../';

import { SelectContainer, FlatList } from './styles';

interface CountrySelectProps {
    leagues?: Leagues[];
    onPress?: (any: any) => void;
}

const LeagueSelectComponent: React.FC<CountrySelectProps> = ({leagues, onPress}) => {
    const [searchObj, setSearchObj] = useState<Leagues[] | undefined>([]);

    useEffect(() => {
        setSearchObj(leagues);
    }, [])

    const searchLeague = (value: string) => {
        let newSearchObj = leagues?.filter((e: any) => {
            let leagueName = e.league.name.replace(/[^\w ]/g, '').toLocaleLowerCase();
            let searchstring = value.replace(/[^\w ]/g, '').toLocaleLowerCase();
            return leagueName.includes(searchstring);
        });
        setSearchObj(newSearchObj);
    }

  return (
    <SelectContainer>
        <FlatList
            data={searchObj}
            renderItem={({item, index}) => <CardItemComponent item={item} key={String(index)} onPress={onPress} />}
            numColumns={2}
            keyboardShouldPersistTaps="always"
            ListHeaderComponent={<SearchInputComponent onChangeText={searchLeague} placeholder='Buscar liga' />}
            stickyHeaderIndices={[0]}
            ListFooterComponent={() => (
                <>
                    {
                        (searchObj && searchObj.length === 0) && <NotFoundComponent text='Nenhuma liga encontrada' />
                    }
                </>
            )}
        />
    </SelectContainer>
  );
}

export default LeagueSelectComponent;