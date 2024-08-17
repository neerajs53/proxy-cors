import  express  from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 2000;

app.use(cors());

app.get('/menu/:id', async (req, res) => {
     const id = req.params.id;
   try {
        
        const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1767&lng=78.0081&restaurantId=${id}`,{

            headers :{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            
            },
        });
       const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/', async (req, res) => {
   
   try {
        
        const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1767&lng=78.0081&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,{

            headers :{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            
            },
        });
       const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/item/:id', async (req, res) => {
     const id = req.params.id;
   try {
        
        const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1767&lng=78.0081&collection=${id}`,{

            headers :{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            
            },
        });
       const data = response.data;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
