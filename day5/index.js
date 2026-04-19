import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import movieRoutes from './routes/movieRoute.js'
dotenv.config()

const main = express()


main.use(cors())
main.use(express.json())

main.use('/api/movie',movieRoutes)

const PORT  = process.env.PORT || 3000



main.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})

// http://localhost:5000/api/movie