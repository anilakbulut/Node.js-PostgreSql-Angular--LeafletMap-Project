const getLocations = "SELECT * FROM locations";
const getLocationsById = "SELECT * FROM locations WHERE id = $1";
const addLocations = "INSERT INTO locations (LAT,LNG,DATETIME) VALUES ($1, $2, $3)";
const removeLocations = "DELETE FROM locations WHERE id = $1";

module.exports = {
    getLocations,
    getLocationsById,
    addLocations,
    removeLocations
};