// import customersDal from '../dal/customers-dal.js';

const getAll = async () => {
    return await medicamentsDal.getAll()
}


const addMedcompanies = async (body) => {
   return await medicamentsDal.addMedicaments(
       body.name, body.weight, medcompaniesId)
}

