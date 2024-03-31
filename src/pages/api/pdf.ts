import type { NextApiRequest, NextApiResponse } from 'next'

export default async function pdf(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/api/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error('Erro ao gerar o PDF');
      }

      res.setHeader('Content-Disposition', `attachment; filename=${req.body.title}.pdf`);
      res.setHeader('Content-Type', 'application/pdf');

      const pdfData = await response.arrayBuffer();

      res.send(Buffer.from(pdfData));
    } catch (error: any) {
      res.status(error.status).json(error.body)
    }
  }
}