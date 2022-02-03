import { League, Standing } from '~/store/modules/standings/types';
import { Teams } from '~/store/modules/teams/types';
/**
 * Action types
 */

    export enum UserPreferencesTypes {
        UPDATE_COUNTRY_REQUEST = '@userPreferences/UPDATE_COUNTRY_REQUEST',
        UPDATE_OFFLINE_ACCESS = '@userPreferences/UPDATE_OFFLINE_ACCESS ',
    }

/**
 * Data Types
 */

    export interface Country {
        name: string;
        code: string;
        flag: string;
    }

    export interface OffLineAccess {
        league?: League;
        standings?: Standing[];
        teams?: Teams[];
    }

/**
 * State types
 */

    export interface UserPreferencesState {
        country: Country;
        offLineAccess?: OffLineAccess
    }