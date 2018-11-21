const {
  GraphQLServer
} = require('graphql-yoga');
const mongoose = require('mongoose');
const Mutation = require('./resolvers/mutations');
const Query = require('./resolvers/query');

/**
 * Connection string to mongodb
 */


const MONGO_URL = 'mongodb://admin:NhIHK3LLTnzeyi2F@cluster0-shard-00-00-sdkax.mongodb.net:27017,cluster0-shard-00-01-sdkax.mongodb.net:27017,cluster0-shard-00-02-sdkax.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

process.env.MY_SECRET = 'GSzjjpkgSoPyjukL';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
  }).then((resolve) => {
    // console.log('connected to mongodb server: ', resolve);
  })
  .catch((error) => {
    console.log('Error trying to connect to mongodb server: ', error);
  });

const db = mongoose.connection;

db.on('error',
    (err) => {
      console.log('Error trying to connecto to mongo server: ', err);
    },
  )
  .once('open',
    () => {
      console.log('Connected to mongo server');
    });

const resolvers = { Query, Mutation }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req
    })
});


const options = {
    port: 8002,
    endpoint: '/graphql',
    playground: '/playground'
};

server.start(options, ({ port }) => {
    console.log('Server started at port: ', port);
});
