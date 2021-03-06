import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'FeraCode',
      storage: AsyncStorage,
      whitelist: [
        'leagues',
        'countries',
        'seasons',
        'teams',
        'standings',
        'userPreferences'
      ],
    },
    reducers,
  );

  return persistedReducer;
};
