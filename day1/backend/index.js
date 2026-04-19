import dotenv from 'dotenv';
import http from 'http';

dotenv.config();


// console.log(process);

const PORT = process.env.PORT || 5000;

// console.log(`Server is running on port ${PORT}`);         

const app = http.createServer((req, res) => {
   
    res.end('Welcome to the Node.js server!');
    res.write("successfully connected to the server");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})