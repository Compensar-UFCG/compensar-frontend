export function checkIsSessionExpiredAndRemoveToken(status: number) {
  if(status === 403) {
    if (typeof window !== 'undefined')
      localStorage?.removeItem('user-token');
  };
}

export const saveSessionData = (token: string) => {
  if (typeof window !== 'undefined')
    localStorage?.setItem('user-token', token);
};

export const getSessionData = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage?.getItem('user-token');
    console.log('data', data);
    
    if(!!data) return data
  }
  return null
};

export const removeSessionData = () => {
  if (typeof window !== 'undefined')
    localStorage?.removeItem('user-token');
};