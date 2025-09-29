export interface CounterState {
  count: number;
  isLoading: boolean;
  error: string | null;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

export interface UseCounterReturn extends CounterState, CounterActions {}

export interface StorageResult {
  success: boolean;
  error?: string;
}

export interface CounterConfig {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  persistToStorage?: boolean;
  storageKey?: string;
}

export type CounterOperation = 'increment' | 'decrement' | 'reset' | 'set';

export interface CounterEvent {
  operation: CounterOperation;
  previousValue: number;
  newValue: number;
  timestamp: number;
}