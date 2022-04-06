import express from 'express';
import { addMedicaments, getAll } from '../business-logic/medicaments-bl.js';

const medicamentsRouter = express.Router();

medicamentsRouter.get('/medicaments', async (req, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

medicamentsRouter.post('/medicaments', async (req, res) => {
    let result = await addMedicaments(req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }

        res.send(result)
    }
})

export {
    medicamentsRouter
}
