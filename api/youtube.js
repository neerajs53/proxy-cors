import axios from 'axios';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { movieName } = req.query;
  if (!movieName) {
    return res.status(400).json({ error: 'Movie name is required' });
  }

  try {
    const API_KEY = process.env.GOOGLE_API_KEY;

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
        movieName + ' trailer'
      )}&key=${API_KEY}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching YouTube trailer:', error);
    res.status(500).json({ error: 'Failed to fetch trailer' });
  }
}
