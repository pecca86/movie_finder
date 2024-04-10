import { useState, useEffect } from 'react';

export const useLocalStorageState = (initialState, key) => {

    const [value, setValue] = useState(() => {
        const storeValue = localStorage.getItem(key);
        return JSON.parse(storeValue) || initialState;
      });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};