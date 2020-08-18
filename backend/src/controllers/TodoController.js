const connection = require('../database/Connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response){
        const todos = await connection('todos').select('*');
        return response.json(todos);
    },

    async create(request,response){
        const { description, done } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('todos').insert({
            id,
            description,
            done
        });

        return response.json(id);
    },

    async delete(request, response){
        const { id } = request.params;
        await connection('todos').where('id',id).del();
        return response.status(204).send();
    },

    async update(request, response){
        const { id } = request.params;
        const { description, done } = request.body;
        await connection('todos').where('id',id).update({
            description: description,
            done: done,
        });

        response.json(id);
    },
}