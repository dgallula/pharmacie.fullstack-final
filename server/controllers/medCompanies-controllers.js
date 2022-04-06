import express from 'express';
// import { addMedcompanies, getAll, deleteCustomer } from '../bl/customers-bl.js';

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
    let result = await addMedCompanies(req.body);

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

