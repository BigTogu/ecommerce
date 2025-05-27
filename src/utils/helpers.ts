/**
 * Adds an item to an array if it's not already present.
 */
export const addItem = <T>(array: T[], item: T): T[] => [...array, item];

/**
 * Removes an item from an array if it exists.
 */
export const removeItem = <T>(array: T[], itemToRemove: T): T[] => array.filter((item) => item !== itemToRemove);
