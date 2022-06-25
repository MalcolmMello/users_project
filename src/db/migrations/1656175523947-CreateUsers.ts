import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1656175523947 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "phone_number",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_users_addresses",
                        columnNames: ["address_id"],
                        referencedTableName: "addresses",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}