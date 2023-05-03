const Animal = require("./Animal");
const Zoo = require("./Zoo");

Animal.belongsTo(Zoo,{
    onDelete:"CASCADE"
});
Travellers.hasMany(Location);
Location.hasMany(Travellers);

module.exports = {
    Travellers:Travellers,
    Location:Location
    Trips:Trips
}