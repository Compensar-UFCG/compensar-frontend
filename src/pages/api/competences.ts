import type { NextApiRequest, NextApiResponse } from 'next'

export default async function competences(
  _: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(`${process.env.BASE_API_URL}/api/competences`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const responseData = await response.json();
    res.status(response.status).json(responseData)
  } catch (error: any) {
    res.status(error.status).json(error.body)
  }
}