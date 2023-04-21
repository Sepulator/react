import { useEffect, useRef, useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T): [T, (newValue: T) => void] {
  const inputRef = useRef<T>();
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    inputRef.current = storedValue;
  }, [storedValue]);

  useEffect(() => {
    return () => {
      window.localStorage.setItem(key, JSON.stringify(inputRef.current));
    };
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
