import type { NextApiRequest, NextApiResponse } from 'next'

export default async function users(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });
      const responseData = await response.json();

      res.status(response.status).json(responseData)
    } catch (error: any) {
      res.status(error.status).json(error.body)
    }
  }
}