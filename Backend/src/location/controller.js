const pool = require('../../db')
const queries = require('./queries');

const getLocations = (req,res) => {
    pool.query(queries.getLocations, (err,results) =>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
};

const getLocationsById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getLocationsById, [id], (error,results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addLocations = (req,res) => {
    const {lat, lng, datetime} = req.body;

    pool.query(queries.addLocations, [lat, lng, datetime], (error,results) => {
        if(error) throw error;
        res.status(201).send(JSON.stringify("Locations Created Succesfully!"));
    })
}

const removeLocations = (req,res)=>{
    const id = parseInt(req.params.id);

    pool.query(queries.getLocationsById, [id], (error,results) =>{
        const noLocations = !results.rows.length;
        if(noLocations){
            res.send(JSON.stringify("Locations does not exist in the database"));
            return;
        }
        pool.query(queries.removeLocations, [id], (error,results) =>{
            if(error) throw error;
            res.status(200).send(JSON.stringify("Location removed successfully!"));
        })
    })


}

module.exports = {
    getLocations,
    getLocationsById,
    addLocations,
    removeLocations,
};