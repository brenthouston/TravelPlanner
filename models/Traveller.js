const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique: true,
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail:true
         }
    }
},{
    sequelize
});

module.exports=Traveller