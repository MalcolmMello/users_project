import { companiesRepository, productsRepository, productsCategoriesRepository } from "../../repositories";

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

        const resultProducts = []

        for(let product of products) {
            const categories = await productsCategoriesRepository().findOneBy({ id: product.categoryProductId });
            const category_name = categories?.category_name;
            resultProducts.push({
                ...product, category_name
            });
        };

        const result = {
            company: company.company_name,
            resultProducts
        };

        return result;
    }

}