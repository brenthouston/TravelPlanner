const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    trip_budget: {
         type: DataTypes.INTEGER,
         allowNull:false,
    },
    traveller_amount:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0
        }
    },
    traveller_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "Traveller",
            key:"id",
            unique: false
        }
    },
    location_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "Locations",
            key:"id",
            unique: false
        }
    }
},{
    sequelize
});

module.exports=Trips