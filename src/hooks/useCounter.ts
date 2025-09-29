import { useState, useEffect, useCallback } from 'react';
import { CounterState, CounterActions } from '../types/counter';
import { saveCounterValue, loadCounterValue } from '../utils/storage';

interface UseCounterReturn extends CounterState, CounterActions {
  isLoading: boolean;
  error: string | null;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [count, setCount] = useState<number>(initialValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load counter value from storage on mount
  useEffect(() => {
    const loadCounter = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const savedValue = await loadCounterValue();
        if (savedValue !== null) {
          setCount(savedValue);
        } else {
          setCount(initialValue);
        }
      } catch (err) {
        console.error('Failed to load counter value:', err);
        setError('Failed to load saved counter value');
        setCount(initialValue);
      } finally {
        setIsLoading(false);
      }
    };

    loadCounter();
  }, [initialValue]);

  // Save counter value to storage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      const saveCounter = async () => {
        try {
          await saveCounterValue(count);
          // Clear any previous errors if save is successful
          if (error) {
            setError(null);
          }
        } catch (err) {
          console.error('Failed to save counter value:', err);
          setError('Failed to save counter value');
        }
      };

      saveCounter();
    }
  }, [count, isLoading, error]);

  const increment = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      // Check for potential overflow
      if (newCount > Number.MAX_SAFE_INTEGER) {
        setError('Counter value too large');
        return prevCount;
      }
      return newCount;
    });
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      // Check for potential underflow
      if (newCount < Number.MIN_SAFE_INTEGER) {
        setError('Counter value too small');
        return prevCount;
      }
      return newCount;
    });
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
    setError(null);
  }, [initialValue]);

  const setValue = useCallback((value: number) => {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      setError('Invalid counter value');
      return;
    }
    
    if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      setError('Counter value out of safe range');
      return;
    }
    
    setCount(value);
    setError(null);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
    isLoading,
    error
  };
};

export default useCounter;