import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  console.log("inside getSavedValue ");

  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    console.log("inside getSavedValue if");
    return savedValue;
  } else {
    console.log("inside else");
    if (initialValue instanceof Function) {
      console.log("inside if function");
      return initialValue();
    }
    return initialValue;
  }
};

const LocalStorage = (key, initialValue) => {
  console.log("inside local storage");

  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    console.log("inside useeffect");
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
export default LocalStorage;
