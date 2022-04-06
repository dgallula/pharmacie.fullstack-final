import express from 'express';
import { addMedcompanies, getAll } from '../business-logic/medCompanies-bl.js';

const medCompaniesRouter = express.Router();

medCompaniesRouter.get('/medCompanies', async (req, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

medCompaniesRouter.post('/medCompanies', async (req, res) => {
    let result = await addMedcompanies(req.body);

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
    medCompaniesRouter
}

