import React, { useState, useRef, useCallback, useMemo } from 'react';

function useGetState<S>(initialState?: S) {
  const [state, setState] = useState(initialState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const getState = useCallback(() => stateRef.current, []);

  return [state, setState, getState];
}

export default useGetState;
