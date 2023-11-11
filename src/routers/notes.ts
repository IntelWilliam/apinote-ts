import { Router, Request, Response } from "express";

const notesRouter = Router()

//GET => http://localhost:3500/notes
notesRouter.get('/notes', (req:Request, res:Response) => {
  res.send({data: 'esta esa la data de esta ruta'})
})



export {notesRouter} 