import { categoriesRepository } from "./app/repositories"


export const addCategories = async () => {
    const categories = [
        {
            category_name: "Bebidas"
        }
    ];

    try {
        for(let category of categories) {
            const newCategory = categoriesRepository().create({ category_name: category.category_name });
            await categoriesRepository().save(newCategory);

            console.log("Final do script");
        }
    } catch (error) {
        console.log(error);
    }
}


