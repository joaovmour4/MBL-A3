import React, { createContext, ReactNode, useState } from 'react';

interface Context {
    moeda: string
    dolar: number
    euro: number
    refresh: boolean
}
interface AppProviderProps {
    children: ReactNode
}

interface Data {
  USDBRL: {
    bid: string
  },
  EURBRL: {
    bid: string
  }
}

interface AppContextType {
    sharedState: Context
    setSharedState: (value: Context) => void
    refreshFn: () => void
  }

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [sharedState, setSharedState] = useState<Context>({moeda: 'dolar'} as Context)
  const [refresh, setRefresh] = useState<boolean>(true)

  const refreshFn = () => {
    setRefresh(prevState => !prevState)
  }

  React.useEffect(()=> {
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`)
      .then(response => response.json())
      .then((data: Data) => {
        setSharedState(prevValue => {
          return {
            moeda: prevValue.moeda,
            dolar: parseFloat(data.USDBRL.bid),
            euro: parseFloat(data.EURBRL.bid),
            refresh: false
          }
        })
      })
  }, [refresh])

  return (
    <AppContext.Provider value={{ sharedState, setSharedState, refreshFn }}>
      {children}
    </AppContext.Provider>
  );
};

export type { Context }
export default AppContext
