import { checkIsSessionExpiredAndRemoveToken } from "@app/utils/session";

export default async function fetchQuestions(token: string) {
  try {
    const response = await fetch('/api/questions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    });
    
    checkIsSessionExpiredAndRemoveToken(response.status);
    
    if(response.ok) {
      const responseData = await response.json();
      return responseData
    }
    return []
  } catch (error: any) {
    return error
  }
}