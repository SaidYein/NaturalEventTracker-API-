import { useState } from "react";

const App = () => {
  const [name, setName] = useLocalStorage("user-name", "Rob");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Add real error handling here
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Add real error handling here
    }
  };
  return [storedValue, setValue];
};
