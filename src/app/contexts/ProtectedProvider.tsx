import { createContext, useContext, useEffect } from 'react';

import { getSessionData, saveSessionData, removeSessionData } from '@app/utils/session';
import { useRouter } from 'next/router';

interface ProtectedContextProps {
  saveSessionData: (token: string) => void;
  token: string | null;
  removeSessionData: () => void;
}

const ProtectedContext = createContext<ProtectedContextProps>({
  saveSessionData,
  token: null,
  removeSessionData,
});

export const ProtectedProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const token = getSessionData();

  useEffect(() => {
    if(!token && router.pathname != 'login')
      router.push('/login')
  }, [token, router])


  return (
    <ProtectedContext.Provider value={{ token: getSessionData(), saveSessionData, removeSessionData }}>
      {children}
    </ProtectedContext.Provider>
  );
};

export const useProtectedSessionContext = () => useContext(ProtectedContext);
