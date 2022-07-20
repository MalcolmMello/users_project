import { addressRepository, companiesAddressRepository, companiesRepository, productsRepository } from "./app/repositories"


export const addAddress = async () => {
    const addresses = [
        {
            company_id: "a989ca41-c7eb-4f07-8943-1ef4fed985ef",
            number: "77",
            street: "Av. dos Expedicionários",
            district: "Companhia Fazenda Belem",
            zip_code: "07803-010",
            city: "Franco Da Rocha",
            state: "SP",
            country: "BR",
            longitude: 23,
            latitude: 46
        },
        {
            company_id: "05344f2b-ef87-4977-88c9-bff04dff0fdd",
            number: "77",
            street: "Av. dos Expedicionários",
            district: "Companhia Fazenda Belem",
            zip_code: "07803-010",
            city: "Franco Da Rocha",
            state: "SP",
            country: "BR",
            longitude: 23,
            latitude: 46
        },
        {
            company_id: "a4e3f408-5ad6-4b58-96a4-0556a6bd8c71",
            number: "150",
            street: "Av. dos Coqueiros",
            district: "Centro",
            zip_code: "07850-320",
            city: "Franco Da Rocha",
            state: "SP",
            country: "BR",
            longitude: 23,
            latitude: 46
        }
    ];

    try {
        for(let address of addresses) {
            const newAddress = companiesAddressRepository().create({ company_id: address.company_id, number: address.number, street: address.street, district: address.district, zip_code: address.zip_code, city: address.city, state: address.state, country: address.country, latitude: address.latitude, longitude: address.longitude});
            await companiesAddressRepository().save(newAddress);

            console.log("Final do script");
        }
    } catch (error) {
        console.log(error);
    }
}


