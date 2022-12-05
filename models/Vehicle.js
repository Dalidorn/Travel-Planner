const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model { }

Vehicle.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mileage: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    driver_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'driver',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
},
);

module.exports = Vehicle;
