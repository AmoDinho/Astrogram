const {ApolloServer} = require('apollo-server');

const typeDefs =`

  type Photo {
      id: ID!
      url: String!
      name: String!
      description: String
  }

  type Query{
      totalPhotos: Int!
      allPhotos: [Photo!]!
  }

  type Mutation {
      postPhoto(name:String!, description: String): Photo!
  }
`;

var photos = [];
var _id = 0;

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
    },
    Mutation: {
        postPhoto(parent,args){

            var newPhoto = {
                id: _id++,
                ...args
            }
            photos.push(newPhoto)
            return newPhoto;
        }
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers
});


server
  .listen()
  .then(({url}) => console.log(`GraphQL Service Running on ${url}`));

  