// import { createServer, Factory, Model } from 'miragejs';
// import faker from 'faker';

// // Tipagem do objeto
// type User = {
//   name: string;
//   email: string;
//   created_at: string;
// };

// export function makeServer() {
//   const server = createServer({
//     models: {
//       user: Model.extend<Partial<User>>({}),
//     },

//     factories: {
//       user: Factory.extend({
//         name(i: number) {
//           return `User ${i + 1}`;
//         },
//         email() {
//           return faker.internet.email().toLocaleLowerCase(); // Gera um email aleatório
//         },
//         created_at() {
//           return faker.date.recent(10); // 10 dias atrás
//         },
//       }),
//     },

//     seeds(server) {
//       server.createList('user', 10); // Cria 10 usuários
//     },

//     routes() {
//       this.namespace = 'api';
//       this.timing = 750;

//       this.get('users');
//       this.post('/users');

//       this.namespace = '';
//       this.passthrough();
//     },
//   });

//   return server;
// }
