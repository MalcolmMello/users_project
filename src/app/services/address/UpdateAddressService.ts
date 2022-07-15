import { addressRepository } from "../../repositories";

type UpdateAddress = {
    userId: string,
    id: string,
    number: string,
    street: string,
    district: string,
    zip_code: string,
    city: string,
    state: string,
    country: string,
    longitude: number,
    latitude: number
}

export class UpdateAddressService {
    async execute({ userId, id, number, street, district, zip_code, city, state, country, longitude, latitude }: UpdateAddress) {
        const hasAnyData = number || street || district || zip_code || city || state || country || longitude || latitude;

        if(!hasAnyData) {
            return new Error("Missing new address data");
        };

        const existAddress = await addressRepository().findOneBy({ id, user_id: userId });

        if(!existAddress) {
            return new Error("Address doesn't exists");
        };

        existAddress.number = number ? number : existAddress.number;
        existAddress.street = street ? street : existAddress.street;
        existAddress.district = district ? district : existAddress.district;
        existAddress.zip_code = zip_code ? zip_code : existAddress.zip_code;
        existAddress.city = city ? city : existAddress.city;
        existAddress.state = state ? state : existAddress.state;
        existAddress.country = country ? country : existAddress.country;
        existAddress.longitude = longitude ? longitude : existAddress.longitude;
        existAddress.latitude = latitude ? latitude : existAddress.latitude;

        await addressRepository().save(existAddress);

        return existAddress;
    };  
};