import React, { useEffect, useState } from 'react';

import { ListItemComponent } from '~/components';
import { Country } from '~/store/modules/countries/types';

import { SelectContainer, FlatList, SearchInput } from './styles';

interface CountrySelectProps {
    countries?: Country[];
    onPress?: (country: Country) => void;
}

interface RenderItemProps {
    item: any;
    index: number;
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

    const renderItem = ({item, index}: RenderItemProps) => (
        <ListItemComponent item={item} text={item?.name} image={item?.flag} key={String(index)} onPress={onPress} />
    )

    return (
        <SelectContainer>
            <FlatList
                data={searchObj}
                renderItem={({item, index}) => renderItem({item, index})}
                ListHeaderComponent={<SearchInput onChangeText={searchCountry} placeholder='Buscar país' />}
                stickyHeaderIndices={[0]}
                extraData={searchObj}
            />
        </SelectContainer>
    );
}

export default CountrySelectComponent;