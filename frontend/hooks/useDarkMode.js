
import useLocalStorage from "./useLocalStorage";
import { useState } from "react";

const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    return [darkMode, setDarkMode];
//       let value = !isDarkMode;

//       if(darkMode === value) {
//            setDarkMode(darkMode);
//   }    


}

export default useDarkMode;