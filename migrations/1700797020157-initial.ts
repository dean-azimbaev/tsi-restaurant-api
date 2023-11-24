import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1700797020157 implements MigrationInterface {
    name = 'Initial1700797020157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category_dishes" ("category_id" uuid NOT NULL, "dish_id" uuid NOT NULL, CONSTRAINT "PK_50983526ef92e1b37d4a1828ee4" PRIMARY KEY ("category_id", "dish_id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "parent_id" uuid, "name" character varying NOT NULL, "description" character varying DEFAULT '', "icon" character varying DEFAULT '', CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "middle_name" character varying DEFAULT '', "phone" character varying NOT NULL, CONSTRAINT "UQ_7ccecb96cef9d8dfcd4ce87811f" UNIQUE ("phone"), CONSTRAINT "PK_94613ec7dc72f7dfa2d072a31cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying DEFAULT '', "price" integer NOT NULL, "image" character varying, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."promocode_status_enum" AS ENUM('ACTIVE', 'INACTIVE', 'APPLIED')`);
        await queryRunner.query(`CREATE TABLE "promocode" ("code" character varying NOT NULL, "status" "public"."promocode_status_enum" NOT NULL DEFAULT 'INACTIVE', "applied_by" uuid, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "activated_at" TIMESTAMP, "applied_at" TIMESTAMP, CONSTRAINT "PK_ce3f2e33389d1c9d8661c33237f" PRIMARY KEY ("code"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying NOT NULL, "password" character varying NOT NULL, "roles" character varying array NOT NULL, CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "promocode"`);
        await queryRunner.query(`DROP TYPE "public"."promocode_status_enum"`);
        await queryRunner.query(`DROP TABLE "dish"`);
        await queryRunner.query(`DROP TABLE "courier"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "category_dishes"`);
    }

}
