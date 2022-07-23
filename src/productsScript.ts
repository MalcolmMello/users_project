import { productsRepository } from "./app/repositories"


export const addProductsCategories = async () => {
    const products = [
        {
            "id": "5b549707-5184-4c3c-8610-83f5dc6852f7",
            "company_id": "a4e3f408-5ad6-4b58-96a4-0556a6bd8c71",
            "product_name": "Arroz Branco Tipo 1 Camil Pacote 1kg",
            "description": "O Arroz Polido É o Mais Consumido No Brasil. É Obtido a Partir da Retirada da Casca do Grão Integral. o Amido É o Principal Componente do Arroz Sendo Ótima Fonte de Energia. Possui Baixo Teor de Gorduras (Menor Que 1%). o Arroz Não Possui Glúten Muito Indicado para Os Celíacos (Pessoas Que Não Podem Consumir Alimentos com Glúten Presente Na Farinha Aveia e Cevada). Além de Muito Delicioso Não Precisa Ser Lavado.",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202205181409_o5b2i4bx2e9.jpg",
            "reviews": 5,
            "price": 6,
            "category_product":
                {
                    "id": "95723027-ccbb-49a2-b891-0f59dd2d9d90",
                    "category_name": "Alimentos",
                    "products": []
                }
            
        },
        {
            "id": "e4915bd8-1b84-4ef3-bcba-b0af3a886b21",
            "company_id": "a4e3f408-5ad6-4b58-96a4-0556a6bd8c71",
            "product_name": "Óleo de Soja Liza 900ml",
            "description": "O Óleo de Soja Liza É Rico em Ômega 6 e por Ser Essencial para o Funcionamento Do Organismo e Não Ser Produzido Pelo o Corpo Humano Deve Ser Adquirido Através de Uma Alimentação Equilibrada Na Qual Fazem Parte Todos Os Grupos Alimentares Incluindo o Consumo Diário Na Porção Adequada de Óleos e Gorduras",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202207082201_e0ptf3xkgok.jpg",
            "reviews": 4,
            "price": 10,
            "category_product": 
                {
                    "id": "95723027-ccbb-49a2-b891-0f59dd2d9d90",
                    "category_name": "Alimentos",
                    "products": []
                }
            
        },
        {
            "id": "2fedbf64-f776-466f-b378-0ef0511efb57",
            "company_id": "a4e3f408-5ad6-4b58-96a4-0556a6bd8c71",
            "product_name": "Feijao Carioca Camil 1kg",
            "description": "O Feijão Carioca Camil É Rico em Proteínas e Carboidratos Perfeito para Uma Alimentação Saborosa e Equilibrada. o Feijão Carioca É o Tipo Mais Consumido No Brasil. o Consumo do Feijão Pode Evitar Doenças Cardiovasculares Diabetes e Até Câncer.",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_high/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202207191448_g25ld6ab2e9.jpg",
            "reviews": 5,
            "price": 10,
            "category_product": 
                {
                    "id": "95723027-ccbb-49a2-b891-0f59dd2d9d90",
                    "category_name": "Alimentos",
                    "products": []
                }
            
        },
        {
            "id": "ac61c81a-c2da-4e44-81b3-33be5e2b94cb",
            "company_id": "a989ca41-c7eb-4f07-8943-1ef4fed985ef",
            "product_name": "Big Mac",
            "description": "Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/000c740d-b01d-49cf-9e6c-ebdd586c4a75/202207060453_i2xqotsf65b.png",
            "reviews": 5,
            "price": 25,
            "category_product": 
                {
                    "id":"79845421-bc70-49bf-b96b-56a813b52fd2",
                    "category_name": "Lanches",
                    "products": []
                }
            
        },
        {
            "id": "4524f3f2-fe2e-4454-9679-117355430fdd",
            "company_id": "a989ca41-c7eb-4f07-8943-1ef4fed985ef",
            "product_name": "Duplo Quarteirão",
            "description": "Dois hambúrgueres (100% carne bovina), mostarda, ketchup, cebola, queijo cheddar e pão com gergelim",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/000c740d-b01d-49cf-9e6c-ebdd586c4a75/202207060453_kszwtoas2z8.png",
            "reviews": 4,
            "price": 34,
            "category_product": 
                {
                    "id": "79845421-bc70-49bf-b96b-56a813b52fd2",
                    "category_name": "Lanches",
                    "products": []
                }
            
        },
        {
            "id": "deefba29-ca3d-4908-93c4-fd18e7f329e7",
            "company_id": "a989ca41-c7eb-4f07-8943-1ef4fed985ef",
            "product_name": "Mc Club",
            "description": "Sanduiche composto por pão tipo brioche, bacon crispy, molho especial, carne 100% bovina, queijo sabor emental, tomate e alface",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/000c740d-b01d-49cf-9e6c-ebdd586c4a75/202207060452_nc6ffzxc7e.png",
            "reviews": 4,
            "price": 37,
            "category_product": 
                {
                    "id":"79845421-bc70-49bf-b96b-56a813b52fd2",
                    "category_name": "Lanches",
                    "products": []
                }
            
        },
        {
            "id": "191b7727-f0e2-493b-903f-6022b5e01e49",
            "company_id": "05344f2b-ef87-4977-88c9-bff04dff0fdd",
            "product_name": "Big King",
            "description": "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo derretido, picles, salada fresca (alface e cebola) e o exclusivo molho big king.",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202109221723_RFYT_f.png",
            "reviews": 4,
            "price": 25,
            "category_product": 
                {
                    "id": "baccf873-f43e-40d6-9bbe-619bce07d50c",
                    "category_name": "Lanches",
                    "products": []
                }
            
        },
        {
            "id": "c3b13f55-0d81-4771-b658-c5dae3fd7053",
            "company_id": "05344f2b-ef87-4977-88c9-bff04dff0fdd",
            "product_name": "Cheddar Duplo",
            "description": "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão preto com gergelim, cheddar cremoso, e cebolas caramelizadas ao molho shoyu.",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202109221730_12UA_f.png",
            "reviews": 5,
            "price": 25,
            "category_product": 
                {
                    "id": "baccf873-f43e-40d6-9bbe-619bce07d50c",
                    "category_name": "Lanches",
                    "products": []
                }
            
        },
        {
            "id": "2feaa44c-0652-4091-a0a6-e03dc08a4df1",
            "company_id": "05344f2b-ef87-4977-88c9-bff04dff0fdd",
            "product_name": "Stacker Duplo",
            "description": "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo derretido, fatias de bacon crocante e o exclusivo molho bk stacker.",
            "front_cover": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202109221736_IXB2_f.png",
            "reviews": 4,
            "price": 27,
            "category_product": {
                "id": "baccf873-f43e-40d6-9bbe-619bce07d50c",
                "category_name": "Lanches",
                "products": []
            }
        }
    ];

    try {
        for(let product of products) {
            const existProduct = await productsRepository().findOneBy({ id: product.id });
            if(existProduct) {
                existProduct.category_product = product.category_product
                await productsRepository().save(existProduct)
            }
            

            console.log("Final do script");
        }
    } catch (error) {
        console.log(error);
    }
}


