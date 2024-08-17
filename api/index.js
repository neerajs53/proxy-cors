import axios from 'axios';
import cors from 'cors';

const corsHandler = cors({
  origin: '*', // Allows all origins. For better security, specify allowed origins.
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
});

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1767&lng=78.0081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
