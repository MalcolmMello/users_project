import { Association, DataTypes, Model, NonAttribute, UUIDV4 } from 'sequelize';
import { sequelize } from '../instances/pg';
import { Address } from './Address';

export class User extends Model {
    declare user_id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare phone_number: string;
    declare addresses?: NonAttribute<Address[]>;
    declare static associations: {
        addresses: Association<User, Address>
    }
}

User.init(
    {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
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
        addresses: {
            type: DataTypes.ARRAY,
            primaryKey: true,
            references: {
                model: 'Address',
                key: 'address_id'
            }
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

User.hasMany(Address); 