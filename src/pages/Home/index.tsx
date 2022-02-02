import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {countriesActions, userPreferencesActions, seasonsActions, leaguesActions, standingsActions} from '~/store/modules/'

import {userPreferencesTypedSelector} from '~/store/modules/userPreferences/reducer';
import {leaguesTypedSelector} from '~/store/modules/leagues/reducer';
import {countriesTypedSelector} from '~/store/modules/countries/reducer';
import {seasonsTypedSelector} from '~/store/modules/seasons/reducer';
import {standingsTypedSelector} from '~/store/modules/standings/reducer';

import {openModal, closeModal} from '~/store/modules/globalModal/action';

import { Country } from '~/store/modules/countries/types';
import { Leagues } from '~/store/modules/leagues/types';

import {CountrySelectComponent, LeagueSelectComponent, SeasonSelectComponent} from './components';
import { ButtonComponent, SelectComponent } from '~/components';

import {
  Container,
  PickerContainer,
  PickerButton,
  PickerImage,
  PickerIcon,
  PickerName,
  SelectsContainer,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedLeague, setSelectedLeague] = useState<Leagues | null>(null);
  const [selectedSeason, setSelectedSeason] = useState<number | undefined>(undefined);
  const [disableButton, setDisableButton] = useState<boolean>(false);

  const {country} = userPreferencesTypedSelector(state => state.userPreferences);
  const {countries} = countriesTypedSelector(state => state.countries);
  const {leagues} = leaguesTypedSelector(state => state.leagues);
  const {seasons} = seasonsTypedSelector(state => state.seasons);
  const {loading: standingLoading} = standingsTypedSelector(state => state.standings);

  const inicializar = () => {
    if (countries?.length === 0) {
      dispatch(countriesActions.countriesRequest());
    }
    if ((leagues?.length === 0) || (leagues?.[0].country.code !== country.code)) {
      dispatch(leaguesActions.leaguesRequest({code: country.code}));
    }
    if (seasons?.length === 0) {
      dispatch(seasonsActions.seasonsRequest());
    }
  }

  useEffect(() => {
    inicializar();
  }, []);

  useEffect(() => {
    if (selectedLeague && selectedSeason) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [selectedLeague, selectedSeason]);

  const selectCountry = (newCountry: Country) => {
    dispatch(userPreferencesActions.updateCountryRequest(newCountry));
    dispatch(closeModal());
  }

  const selectLeague = (newLeague: Leagues) => {
    setSelectedLeague(newLeague);
    dispatch(closeModal());
  }

  const selectSeason = (newSeason: number) => {
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

  const onSearchStanding = () => {
    dispatch(standingsActions.standingsRequest({
      league: selectedLeague?.league.id,
      season: selectedSeason,
    }))
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
          text={selectedSeason ? String(selectedSeason) : ''}
          onPress={openSeasonModal}
          placeholder='Selecione a temporada'
        />
        <ButtonComponent
          text='Botão'
          onPress={onSearchStanding}
          disabled={disableButton}
          loading={standingLoading}
        />
      </SelectsContainer>
    </Container>
  );
};

export default Home;
