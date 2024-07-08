import { NextApiRequest, NextApiResponse } from 'next';

export default function handleContact(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  res.status(200).json({ message: 'Hello, world!' });
}
