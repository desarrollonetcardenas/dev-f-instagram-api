const { Map } = require('immutable');

const createToken = require('../utils/createToken');
const Users = require('../schemas/users');

function prueba( _, args, context, info ) {
    console.log('Name: ', args.name);

    return `Hola ${ args.name }`;
}

function imprimir(_, args, context, info) {
    console.log('Imprimiendo mensaje: ', args.saludo);
    return 'Mensaje impreso';
}

function login( _, args, context, info ) {

    const request = Map( args );
    const login = request.set('user', 'modificado');

    console.log(request, login);

    return { value: "This is my token" };
}

function singup(_, args, context, info) {

    return Users.create( args.data ).then(
        (user) => {
            const token = createToken( user );

            return { token, id: args._id };
        },
        (err) => {
            throw new Error( err.message );
        }
    )
    .catch(
        (err) => {
            throw new Error( err );
        }
    );
}



module.exports = {
    prueba,
    imprimir,
    login,
    singup
}

