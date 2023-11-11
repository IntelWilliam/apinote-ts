import express from "express"
import cors from "cors" 
import "dotenv/config"
import { notesRouter } from "./routers/notes"

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(notesRouter)

app.listen(PORT, () => {
  console.log(`server listen in port ${PORT}`);
})

