import { companiesRepository, productsRepository } from "../../repositories";

export class GetProductsByCompanyIdService {
    async execute(id: string) {
        const hasId = id;
        
        if(!hasId) {
            return new Error("Missing company id");
        };

        const company = await companiesRepository().findOneBy({ id });
        
        if(company == null) {
            return new Error("No companies with that id");
        };

        const products = await productsRepository().findBy({ company_id: id });

        if(products == null) {
            return new Error("No products from that company.");
        };

        const result = {
            company: company.company_name,
            products
        }

        return result;
    }

}