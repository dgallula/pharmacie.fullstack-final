import medicamentsDal from "../data-acces-layer/medicaments-dal.js"

const getAll = async () => {
    return await medicamentsDal.getAll()
}


const addMedicaments = async (body) => {
   return await medicamentsDal.addMedicaments(
       body.name, body.weight, body.medcompaniesId)
}

export{
    getAll,
    addMedicaments
}

