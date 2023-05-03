const sequelize = require("../config/connection");
const {Trips, Location, Traveller} = require("../models");


const travellers = [
    {
        name:"Bob McBobbins",
        email:"bob@bob.com"
    },
    {
        name:"Mark Zuckerburg",
        email: "mark@zucky.com"
    },
]
const locations = [
    {
       location_name:"Timbucktoo"
    },
    {
        location_name:"Narnia"
    },
]   
const trips =[
{
    trip_budget:"300",
    traveller_amount: 2,
    traveller_id: 1,
    location_id:1
},
{
    trip_budget:"500",
    traveller_amount: 1,
    traveller_id: 1,
    location_id:1
}


]
const startSeedin = async ()=>{
    try{
        await sequelize.sync({force:true});
        const travellersData = await Traveller.bulkCreate(travellers);
        const locationsData = await Location.bulkCreate(locations);
        const tripsData = await Trips.bulkCreate(trips);
        console.log("all done!")
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

startSeedin()