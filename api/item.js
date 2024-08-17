import axios from 'axios';

export default async function handler(req, res) {
  const id  = req.params.id;
  try {
    const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1767&lng=78.0081&collection=${id}`, {
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
