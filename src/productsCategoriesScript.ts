import { productsCategoriesRepository } from "./app/repositories"


export const addProductsCategories = async () => {
    const categories = [
        {
            category_name: "Lanches"
        },
        {
            category_name: "Refri"
        }
    ];

    try {
        for(let category of categories) {
            const newCategory = productsCategoriesRepository().create({ category_name: category.category_name });
            await productsCategoriesRepository().save(newCategory);

            console.log("Final do script");
        }
    } catch (error) {
        console.log(error);
    }
}


