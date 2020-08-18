
exports.up = function(knex) {
    return knex.schema.createTable('todos', function (table){
        table.string('id').primary();
        table.string('description').notNullable();
        table.boolean('done').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('todos')
};
