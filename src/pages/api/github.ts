import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.PTERODACTYL_API_KEY;
const PANEL_URL = process.env.PTERODACTYL_PANEL_URL;
const SERVER_ID = process.env.PTERODACTYL_SERVER_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  // Verify push event to main branch
  if (!data.ref || data.ref !== 'refs/heads/main') {
    return res.status(400).json({ error: 'Invalid event' });
  }

  try {
    const response = await fetch(
      `${PANEL_URL}/api/client/servers/${SERVER_ID}/power`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ signal: 'restart' }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to restart server');
    }

    return res.status(200).json({ message: 'Server restarted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to restart server' });
  }
}
