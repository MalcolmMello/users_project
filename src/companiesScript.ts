import { Companies } from "./app/entities/Companies";
import { companiesRepository } from "./app/repositories"


export const addCompanies = async () => {
    const companies = [
        {
            "id": "05344f2b-ef87-4977-88c9-bff04dff0fdd",
            "company_name": "Burguer King",
            "email": "burguerking@gmail.com",
            "password": "123",
            "phone_number": "11999999999",
            "logo": "https://tm.ibxk.com.br/2022/03/20/20160457106021.jpg?ims=1120x420",
            "cover": "https://tm.ibxk.com.br/2022/03/20/20160457106021.jpg?ims=1120x420",
            "categories": [
                {
                    "id": "3ab70214-8a8e-4e94-baa1-6fc939d14e03",
                    "category_name": "Fast Food"
                },
                {
                    "id": "ff8f47b7-6dff-4dc6-9a8f-4a28387c269e",
                    "category_name": "Bebidas"
                },
            ]
        },
        {
            "id": "a989ca41-c7eb-4f07-8943-1ef4fed985ef",
            "company_name": "Mcdonald's",
            "email": "mcdonalds@gmail.com",
            "password": "123",
            "phone_number": "11999999999",
            "logo": "https://www.baressp.com.br/bares/fotos2/mc_donalds_5-min_090420191906.jpg",
            "cover": "https://www.baressp.com.br/bares/fotos2/mc_donalds_5-min_090420191906.jpg",
            "categories": [
                {
                    "id": "3ab70214-8a8e-4e94-baa1-6fc939d14e03",
                    "category_name": "Fast Food"
                },
                {
                    "id": "ff8f47b7-6dff-4dc6-9a8f-4a28387c269e",
                    "category_name": "Bebidas"
                },
            ]
        },
        {
            "id": "a4e3f408-5ad6-4b58-96a4-0556a6bd8c71",
            "company_name": "Ricoy",
            "email": "ricoy@gmail.com",
            "password": "123",
            "phone_number": "11999999999",
            "logo": "https://www.associacaoricoy.com.br/wp-content/uploads/logoRicoySupermercados.png",
            "cover": "https://www.associacaoricoy.com.br/wp-content/uploads/logoRicoySupermercados.png",
            "categories": [
                {
                    "id": "1a83f8f2-ed83-4351-acd3-741cd450f295",
                    "category_name": "Mercados"
                },
                {
                    "id": "ff8f47b7-6dff-4dc6-9a8f-4a28387c269e",
                    "category_name": "Bebidas"
                },
            ]
        }
    ];

    try {
        for(let company of companies) {
            const existCompany = await companiesRepository().findOneBy({ id: company.id });
            if(existCompany)
            {
                existCompany.categories = company.categories;
                await companiesRepository().save(existCompany);
            }
            console.log("Final do script");
        }
    } catch (error) {
        console.log(error);
    }
}


