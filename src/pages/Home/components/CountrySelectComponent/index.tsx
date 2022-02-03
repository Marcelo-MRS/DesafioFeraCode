import React, { useEffect, useState } from 'react';

import { ListItemComponent, SearchInputComponent } from '~/components';
import { Country } from '~/store/modules/countries/types';
import { NotFoundComponent } from '../';

import { SelectContainer, FlatList } from './styles';

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
        let newSearchObj = countries?.filter(e => {
            let countryName = e.name.replace(/[^\w ]/g, '').toLocaleLowerCase();
            let searchstring = value.replace(/[^\w ]/g, '').toLocaleLowerCase();
            return countryName.includes(searchstring);
        });
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
                extraData={searchObj}
                stickyHeaderIndices={[0]}
                keyboardShouldPersistTaps="always"
                ListHeaderComponent={<SearchInputComponent onChangeText={searchCountry} placeholder='Buscar país' />}
                ListFooterComponent={() => (
                    <>
                        {
                            (searchObj && searchObj.length === 0) && <NotFoundComponent text='Nenhum país encontrado' />
                        }
                    </>
                )}
            />
        </SelectContainer>
    );
}

export default CountrySelectComponent;