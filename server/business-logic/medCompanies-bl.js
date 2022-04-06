// import customersDal from '../dal/customers-dal.js';

 const getAll = async () => {
      return await medCompaniesDal.getAll()
  }

 
 const addMedcompanies = async (body) => {
     return await medCompaniesDal.addMedcompanies(
         body.name)

 }