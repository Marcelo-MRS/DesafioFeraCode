import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {countriesActions, userPreferencesActions, seasonsActions, leaguesActions, standingsActions} from '~/store/modules/'


import {userPreferencesTypedSelector} from '~/store/modules/userPreferences/reducer';
import {leaguesTypedSelector} from '~/store/modules/leagues/reducer';
import {countriesTypedSelector} from '~/store/modules/countries/reducer';
import { seasonsTypedSelector } from '~/store/modules/seasons/reducer';
import { standingsTypedSelector } from '~/store/modules/standings/reducer';

import {openModal, closeModal} from '~/store/modules/globalModal/action';

import {
  Container,
  PickerContainer,
  PickerButton,
  PickerImage,
  PickerIcon,
  PickerName,
  SelectsContainer,
} from './styles';

import { Country } from '~/store/modules/countries/types';
import { Leagues } from '~/store/modules/leagues/types';

import {CountrySelectComponent, LeagueSelectComponent, SeasonSelectComponent, StandingComponent} from './components';
import { SelectComponent } from '~/components';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedLeague, setSelectedLeague] = useState<Leagues | null>(null)
  const [selectedSeason, setSelectedSeason] = useState<string>('')

  const {countries} = countriesTypedSelector(state => state.countries);
  const {country} = userPreferencesTypedSelector(state => state.userPreferences);
  const {leagues} = leaguesTypedSelector(state => state.leagues);
  const {seasons} = seasonsTypedSelector(state => state.seasons);
  const {standings} = standingsTypedSelector(state => state.standings);

  const inicializar = () => {
    if (countries?.length === 0) {
      dispatch(countriesActions.countriesRequest());
    }
    if (leagues?.length === 0) {
      dispatch(leaguesActions.leaguesRequest({code: country.code}));
    }
    if (seasons?.length === 0) {
      dispatch(seasonsActions.seasonsRequest());
    }
    if (standings?.length === 0) {
      dispatch(standingsActions.standingsRequest(2019, 39));
    }
  }

  useEffect(() => {
    inicializar();
  }, []);

  const selectCountry = (newCountry: Country) => {
    dispatch(userPreferencesActions.updateCountryRequest(newCountry));
    dispatch(closeModal());
  }

  const selectLeague = (newLeague: Leagues) => {
    setSelectedLeague(newLeague);
    dispatch(closeModal());
  }

  const selectSeason = (newSeason: string) => {
    setSelectedSeason(newSeason);
    dispatch(closeModal());
  }

  const openFlagModal = () => {
    dispatch(openModal({
      content: <CountrySelectComponent countries={countries} onPress={selectCountry} />
    }));
  }

  const openLeagueModal = () => {
    dispatch(openModal({
      content: <LeagueSelectComponent leagues={leagues} onPress={selectLeague} />
    }));
  }

  const openSeasonModal = () => {
    dispatch(openModal({
      content: <SeasonSelectComponent seasons={seasons} onPress={selectSeason} />
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
        <SelectComponent
          text={selectedLeague?.league?.name}
          onPress={openLeagueModal}
          placeholder='Selecione a liga'
        />
        <SelectComponent
          text={selectedSeason}
          onPress={openSeasonModal}
          placeholder='Selecione a temporada'
        />
      </SelectsContainer>
      {/* <StandingComponent standings={standings}/> */}
    </Container>
  );
};

export default Home;
