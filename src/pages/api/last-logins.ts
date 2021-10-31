import { NextApiRequest, NextApiResponse } from 'next';

const lastLogins = [
  {
    name: 'ante',
    location: [45.802414365566015, 15.925945198108467],
    date: new Date().toISOString(),
  },
  {
    name: 'mislav',
    location: [45.502414365566015, 15.925945198108467],
    date: new Date().toISOString(),
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method === 'GET') {
    return res.status(200).json({ lastLogins });
  }

  if (method === 'POST') {
    return res.status(200).json({ name: 'John Doe' });
  }

  return res.status(404).end();
}
