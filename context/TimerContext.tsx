import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TimerContextType {
  duration: number, 
  setDuration: Dispatch<SetStateAction<number>>,
}

export const TimerConstexte = createContext<TimerContextType>({
  duration: 0,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [ duration, setDuration ] = useState(10);
  return (
    <TimerConstexte.Provider value={{duration, setDuration}}>
      {children}
    </TimerConstexte.Provider>
  )
}

export default TimerProvider;