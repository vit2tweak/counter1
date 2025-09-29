import { StorageResult } from '../types/counter';

const STORAGE_KEY = 'counter1_value';

/**
 * Saves the counter value to localStorage
 * @param value - The counter value to save
 * @returns Promise<StorageResult> - Result of the save operation
 */
export const saveCounterValue = async (value: number): Promise<StorageResult> => {
  try {
    if (typeof Storage === 'undefined') {
      return {
        success: false,
        error: 'localStorage is not supported in this environment'
      };
    }

    if (typeof value !== 'number' || !isFinite(value)) {
      return {
        success: false,
        error: 'Invalid value: must be a finite number'
      };
    }

    localStorage.setItem(STORAGE_KEY, value.toString());
    return { success: true };
  } catch (error) {
    console.error('Error saving counter value:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred while saving'
    };
  }
};

/**
 * Loads the counter value from localStorage
 * @param defaultValue - Default value to return if no stored value exists
 * @returns Promise<number> - The loaded counter value or default value
 */
export const loadCounterValue = async (defaultValue: number = 0): Promise<number> => {
  try {
    if (typeof Storage === 'undefined') {
      console.warn('localStorage is not supported, using default value');
      return defaultValue;
    }

    const storedValue = localStorage.getItem(STORAGE_KEY);
    
    if (storedValue === null) {
      return defaultValue;
    }

    const parsedValue = parseInt(storedValue, 10);
    
    if (isNaN(parsedValue) || !isFinite(parsedValue)) {
      console.warn('Invalid stored value, using default value');
      return defaultValue;
    }

    return parsedValue;
  } catch (error) {
    console.error('Error loading counter value:', error);
    return defaultValue;
  }
};

/**
 * Clears the stored counter value from localStorage
 * @returns Promise<StorageResult> - Result of the clear operation
 */
export const clearCounterValue = async (): Promise<StorageResult> => {
  try {
    if (typeof Storage === 'undefined') {
      return {
        success: false,
        error: 'localStorage is not supported in this environment'
      };
    }

    localStorage.removeItem(STORAGE_KEY);
    return { success: true };
  } catch (error) {
    console.error('Error clearing counter value:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred while clearing'
    };
  }
};

/**
 * Checks if localStorage is available and working
 * @returns boolean - True if localStorage is available
 */
export const isStorageAvailable = (): boolean => {
  try {
    if (typeof Storage === 'undefined') {
      return false;
    }

    const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gets the storage key used for the counter value
 * @returns string - The storage key
 */
export const getStorageKey = (): string => STORAGE_KEY;