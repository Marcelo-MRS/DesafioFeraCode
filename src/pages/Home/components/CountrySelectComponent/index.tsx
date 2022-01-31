import React, { useEffect, useState } from 'react';

import { ListItemComponent } from '~/components';
import { Country } from '~/store/modules/countries/types';

import { SelectContainer, FlatList, SearchInput } from './styles';

interface CountrySelectProps {
    countries?: Country[];
    onPress?: (country: Country) => void;
}

const CountrySelectComponent: React.FC<CountrySelectProps> = ({countries, onPress}) => {
    const [searchObj, setSearchObj] = useState<Country[] | undefined>([]);

    useEffect(() => {
        setSearchObj(countries);
    }, [])

    const searchCountry = (value: string) => {
        let newSearchObj = countries?.filter(e => e.name.includes(value));
        setSearchObj(newSearchObj);
    }

  return (
    <SelectContainer>
        <FlatList
            data={searchObj}
            renderItem={({item, index}) => <ListItemComponent item={item} key={String(index)} onPress={onPress} />}
            ListHeaderComponent={<SearchInput onChangeText={searchCountry} placeholder='Buscar país' />}
            stickyHeaderIndices={[0]}
        />
    </SelectContainer>
  );
}

export default CountrySelectComponent;