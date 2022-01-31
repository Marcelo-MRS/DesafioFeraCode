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
import {leaguesTypedSelector} from '~/store/modules/leagues/reducer';
import {updateCountryRequest} from '~/store/modules/userPreferences/action';
import {countriesTypedSelector} from '~/store/modules/countries/reducer';
import {openModal, closeModal} from '~/store/modules/globalModal/action';

import {
  Container,
  PickerContainer,
  PickerButton,
  PickerImage,
  PickerIcon,
  PickerName,
  SelectsContainer,
  LeagueSelectContainer,
  LeagueSelectText,
} from './styles';

import { Country } from '~/store/modules/countries/types';
import {CountrySelectComponent, LeagueSelectComponent} from './components';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const {country} = userPreferencesTypedSelector(state => state.userPreferences);
  const {countries} = countriesTypedSelector(state => state.countries);
  const {leagues} = leaguesTypedSelector(state => state.leagues);

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

  const selectLeague = () => {
    ///
  }

  const openFlagModal = () => {
    dispatch(openModal({
      content: <CountrySelectComponent countries={countries} onPress={selectCountry} />
    }));
  }

  const openLeagueModal = () => {
    dispatch(openModal({
      content: <LeagueSelectComponent leagues={leagues} />
    }));
  }

  return (
    <Container>
      <PickerContainer>
        <PickerButton onPress={openFlagModal}>
          {
            country?.flag && <PickerImage uri={country.flag} fill="#000" />
          }
          <PickerName>{country?.name}</PickerName>
          <PickerIcon name="chevron-down" />
        </PickerButton>
      </PickerContainer>

      <SelectsContainer>
        <LeagueSelectContainer onPress={openLeagueModal}>
          <LeagueSelectText>Liga</LeagueSelectText>
          <PickerIcon name="chevron-down" />
        </LeagueSelectContainer>
      </SelectsContainer>
    </Container>
  );
};

export default Home;
