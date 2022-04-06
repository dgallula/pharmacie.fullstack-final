import connection from "../db/db.js"

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM medicaments'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const addMedicaments = async (name, weight, medCompaniesId) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO medicaments (name, weight, medCompaniesId)
            VALUES
            ('${name}','${weight}','${medCompaniesId}');`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAll,
    addMedicaments
}
