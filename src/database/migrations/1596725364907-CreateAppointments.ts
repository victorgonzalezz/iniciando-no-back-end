import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateAppointments1596725364907
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "provider",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp with time zone",
                    },
                    {
                        name: "createdat",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updatedat",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }
}
