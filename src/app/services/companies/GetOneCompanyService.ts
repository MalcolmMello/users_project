import { companiesRepository, productsRepository, companiesAddressRepository } from "../../repositories";

export class GetOneCompanyService {
    async execute(id: string) {
        const hasId = id;
        
        if(!hasId) {
            return new Error("Missing company id");
        };

        const company = await companiesRepository().findOneBy({ id });
        
        if(company == null) {
            return new Error("No companies with that id");
        };

        const products = await productsRepository().findBy({ company_id: company.id });
        const address = await companiesAddressRepository().findOneBy({ company_id: company.id });

        const result = {
            company,
            products,
            address
        };

        return result;
    };
};