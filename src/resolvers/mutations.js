
const { Map } = require('immutable');
const UserSchema = require('../schemas/users');

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

    console.log(args);


    UserSchema.create( args.data ).then(
        (user) => {
            console.log(user);
            return "User created successfully.";
        },
        (error) => {
            return `Error trying to create user document: ${ error }`;
        }
    )
    .catch(
        (err) => {return `Error: ${ err }`;}
    );
}


module.exports = {
    prueba,
    imprimir,
    login,
    singup
}
