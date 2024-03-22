import type { NextApiRequest, NextApiResponse } from 'next'

export default async function questions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/questions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${req.headers.authorization}`,
      }
    });
    const responseData = await response.json();
    res.status(response.status).json(responseData)
  } catch (error: any) {
    res.status(error.status).json(error.body)
  }
}