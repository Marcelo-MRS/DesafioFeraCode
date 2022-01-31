/**
 * Action types
 */

    export enum UserPreferencesTypes {
        UPDATE_COUNTRY_REQUEST = '@userPreferences/UPDATE_COUNTRY_REQUEST',
    }

/**
 * Data Types
 */

    export interface Country {
        name: string;
        code: string;
        flag: string;
    }

/**
 * State types
 */

    export interface UserPreferencesState {
        country: Country;
    }