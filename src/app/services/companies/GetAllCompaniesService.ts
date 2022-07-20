import { companiesRepository } from "../../repositories";

export class GetAllCompaniesService {
    async execute() {

        const companies = await companiesRepository().find();

        if(companies == null) {
            return new Error("There are no companies.");
        };
        
        return companies;
    };
};