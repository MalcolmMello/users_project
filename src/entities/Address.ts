import { Model, DataTypes, ForeignKey } from 'sequelize';
import { sequelize } from '../instances/pg';
import { User } from './User';

export class Address extends Model{
    declare address_id: number;
    declare user_id: ForeignKey<User['user_id']>;
    declare number: string;
    declare street: string;
    declare district: string;
    declare zip_code: string;
    declare city: string;
    declare state: string;
    declare country: string;
    declare latitude: number;
    declare longitude: number;
}