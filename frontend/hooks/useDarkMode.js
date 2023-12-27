
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (darkMode, value) => {
      let value = !isDarkMode;

      if(darkMode === value) {
           setDarkMode(darkMode);
      }


}


useEffect = () => {

     setDarkMode(useDarkMode(), [value])
}