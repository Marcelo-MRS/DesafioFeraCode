import React, {useEffect} from 'react';
import {Text, TouchableOpacity, ScrollView, ListRenderItemInfo} from 'react-native';
import {useDispatch} from 'react-redux';

// import {leaguesRequest} from '~/store/modules/leagues/action'
import {countriesActions, userPreferencesActions} from '~/store/modules/'
// import {countriesRequest} from '~/store/modules/countries/action'
import {seasonsRequest} from '~/store/modules/seasons/action'
import {teamsRequest} from '~/store/modules/teams/action'
import {standingsRequest} from '~/store/modules/standings/action'


import {userPreferencesTypedSelector} from '~/store/modules/userPreferences/reducer';
import {updateCountryRequest} from '~/store/modules/userPreferences/action';
import {countriesTypedSelector} from '~/store/modules/countries/reducer';
import {openModal, closeModal} from '~/store/modules/globalModal/action';

import {ListItemComponent} from '~/components';

import {
  Container,
  PickerContainer,
  PickerButton,
  PickerImage,
  PickerIcon,
  PickerName,
} from './styles';

import { Country } from '~/store/modules/countries/types';
import CountrySelectComponent from './components/CountrySelectComponent';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {country} = userPreferencesTypedSelector(state => state.userPreferences);
  const {countries} = countriesTypedSelector(state => state.countries);

  useEffect(() => {
    dispatch(countriesActions.countriesRequest())
    // dispatch(seasonsRequest())
    // dispatch(teamsRequest(50))
    // dispatch(standingsRequest(2020, 39))
  }, []);

  const selectCountry = (newCountry: Country) => {
    dispatch(userPreferencesActions.updateCountryRequest(newCountry));
    dispatch(closeModal());
  }

  const openFlagModal = () => {
    dispatch(openModal({
      content: <CountrySelectComponent countries={countries} onPress={selectCountry} />
    }));
  }

  return (
    <Container>
      <PickerContainer>
        <PickerButton onPress={openFlagModal}>
          {
            country?.flag && <PickerImage uri={country.flag} />
          }
          <PickerName>{country?.name}</PickerName>
          <PickerIcon name="chevron-down" />
        </PickerButton>
      </PickerContainer>
    </Container>
  );
};

export default Home;
