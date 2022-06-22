import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

interface UserInstance extends Model {
    user_id: number,
    name: string,
    email: string
    password: string,
    phone_number: string
};

export const User = sequelize.define<UserInstance>("Users", {
        user_id: {
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
    }, 
    {
        tableName: "users",
        timestamps: false
});