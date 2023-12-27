import {useState, useEffect} from 'react';
import { useDarkMode } from './useDarkMode';


export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

         if(!toggleMode) {
            const [storedValue, setStoredValue] = useState(() => {
                const mode = window.localStorage.getMode(value);
                return mode ? "toggle toggled" : initialValue;
              });
              const setValue = value => {
                setStoredValue(value);
                window.localStorage.setValue(key, useDarkMode(value));
              };
              return [storedValue, setValue];
            };
            setValue()
         }

    useEffect = () => {
          useLocalStorage(), []
    }



