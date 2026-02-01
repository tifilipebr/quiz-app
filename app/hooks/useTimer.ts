import { useCallback, useEffect, useRef, useState } from "react";

interface IUseTimer {
  initialTime: number;
  callback: (time: number) => void;
}

export const useTimer = ({ initialTime, callback }: IUseTimer) => {
  const [time, setTime] = useState(initialTime);
  const [mustRun, setMustRun] = useState(false);

  const callBackRef = useRef(callback);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Sincroniza a ref do callback
  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  // 1. Função de limpeza pura (apenas memória)
  const clearRefInterval = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // 2. stopTimer unificado
  const stopTimer = useCallback((timer?: number) => {
    setMustRun(false);
    clearRefInterval();

    if(timer!==undefined){
      callBackRef.current(timer);
    }else{
      // "Pesca" o tempo atual e avisa o callback
      setTime((current) => {
        callBackRef.current(current);
        return current;
      });
    }
  }, [clearRefInterval]); // Dependência estável

  // 3. useEffect simplificado
  useEffect(() => {
    if (mustRun) {
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            const finalTime = 0;
            stopTimer(finalTime);
            return finalTime;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return clearRefInterval;
  }, [mustRun, stopTimer, clearRefInterval]);

  const startTimer = useCallback(() => {
    setTime(initialTime);
    setMustRun(true);
  }, [initialTime]);

  return { startTimer, stopTimer, time };
};
