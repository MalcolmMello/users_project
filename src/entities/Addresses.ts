import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

interface AddressInstance extends Model {
    address_id: number,
    user_id: number,
    number: string
    street: string,
    district: string,
    zip_code: string,
    city: string,
    state: string,
    country: string,
    latitude: number,
    longitude: number
};

export const User = sequelize.define<AddressInstance>("Addresses", {
        address_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        number: {
            type: DataTypes.STRING
        },
        street: {
            type: DataTypes.STRING
        },
        district: {
            type: DataTypes.STRING
        },
        zip_code: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.INTEGER
        },
        longitude: {
            type: DataTypes.INTEGER
        },
    }, 
    {
        tableName: "addresses",
        timestamps: false
});