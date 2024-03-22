export default function checkIsSessionExpiredAndRemoveToken(status: number) {
  if(status === 403) {
    if (typeof window !== 'undefined')
      localStorage?.removeItem('user-token');
  };
}