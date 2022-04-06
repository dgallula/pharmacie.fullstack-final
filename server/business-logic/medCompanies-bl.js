import medCompaniesDal from "../data-acces-layer/medCompanies-dal.js"

 const getAll = async () => {
      return await medCompaniesDal.getAll()
  }

 
 const addMedcompanies = async (body) => {
     return await medCompaniesDal.addMedCompanies(
         body.name)

 }

 export {
     getAll,
     addMedcompanies
 }

 