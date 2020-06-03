import Knex from 'knex';

export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('contact', table => {
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('type_contact_id').notNullable()
            .references('id')
            .inTable('type_contact');

    })

}

export async function down(knex: Knex) {
    // Rollback
    return knex.schema.dropTable('contact');
}