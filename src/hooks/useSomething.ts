// import { useQuery } from 'react-query';
// import { api } from '../services/api';

// type User = {
//   id: string;
//   title: string;
//   description: string;
// };

// export async function getSomething(): Promise<User[]> {
//   const { data } = await api.get('/something');

//   const something = data.something.map((something) => {
//     return {
//       id: something.id,
//       title: something.title,
//       description: something.description,
//     };
//   });

//   return something;
// }

// export function useSomething() {
//   return useQuery('something', getSomething, {
//     staleTime: 1000 * 60 * 60, // 1 hour
//   });
// }
