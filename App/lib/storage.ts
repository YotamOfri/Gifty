// src/utils/asyncStorageUtils.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Saves data to AsyncStorage.
 * Automatically stringifies objects and arrays.
 * @param {string} key - The key to store the data under.
 * @param {any} value - The data to store.
 * @returns {Promise<void>} A promise that resolves when the data is saved.
 */
export const saveItem = async (key: string, value: any): Promise<void> => {
  try {
    // AsyncStorage only stores strings, so we stringify the value
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
    console.log(`AsyncStorage: Saved item with key "${key}"`);
  } catch (error: any) {
    // Use 'any' for error type if not specific Error type
    console.error(`AsyncStorage: Error saving item with key "${key}":`, error);
    // You might want to re-throw the error or handle it differently
    throw error;
  }
};

/**
 * Retrieves data from AsyncStorage.
 * Automatically parses the stored string back into its original type.
 * @param {string} key - The key of the data to retrieve.
 * @returns {Promise<any | null>} A promise that resolves with the retrieved data, or null if the key does not exist.
 */
export const getItem = async (key: string): Promise<any | null> => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    if (stringValue === null) {
      console.log(`AsyncStorage: No item found for key "${key}"`);
      return null; // Return null if the key doesn't exist
    }
    // Try to parse the string, handle potential errors
    try {
      const value: any = JSON.parse(stringValue); // Parse the string back to its original type
      if (!value) console.log(`AsyncStorage: No item found for key "${key}"`);

      return value;
    } catch (parseError: any) {
      console.warn(
        `AsyncStorage: Could not parse value for key "${key}". Returning raw string.`,
        stringValue,
        parseError
      );
      return stringValue; // Return the raw string if parsing fails
    }
  } catch (error: any) {
    // Use 'any' for error type if not specific Error type
    console.error(
      `AsyncStorage: Error retrieving item with key "${key}":`,
      error
    );
    // You might want to re-throw the error or handle it differently
    throw error;
  }
};

/**
 * Removes an item from AsyncStorage.
 * @param {string} key - The key of the item to remove.
 * @returns {Promise<void>} A promise that resolves when the item is removed.
 */
export const removeItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`AsyncStorage: Removed item with key "${key}"`);
  } catch (error: any) {
    // Use 'any' for error type if not specific Error type
    console.error(
      `AsyncStorage: Error removing item with key "${key}":`,
      error
    );
    throw error;
  }
};

/**
 * Clears all items from AsyncStorage.
 * Use with caution!
 * @returns {Promise<void>} A promise that resolves when all items are cleared.
 */
export const clearAllItems = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage: Cleared all items.");
  } catch (error: any) {
    // Use 'any' for error type if not specific Error type
    console.error("AsyncStorage: Error clearing all items:", error);
    throw error;
  }
};

// Optional: Get all keys
/**
 * Gets an array of all keys currently stored in AsyncStorage.
 * @returns {Promise<string[]>} A promise that resolves with an array of keys.
 */
export const getAllKeys = async (): Promise<string[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    console.log("AsyncStorage: All keys retrieved", keys);
    return [...keys]; // Create a new mutable array from the readonly array
  } catch (error: any) {
    // Use 'any' for error type if not specific Error type
    console.error("AsyncStorage: Error getting all keys:", error);
    throw error;
  }
};
