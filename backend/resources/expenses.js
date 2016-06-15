
import {
  queryRoute as jsonApiQueryRoute,
  exposeAllProperties as jsonApiQueryExposeAllProperties,
} from 'odyssee/src/routes/json-api';

import {
  queryRoute as streamQueryRoute,
  postRoute as streamPostRoute,
  deleteRoute as streamDeleteRoute,
  exposeAllProperties as streamQueryExposeAllProperties,
} from 'odyssee/src/routes/stream';

import schemas from '../schemas';

import { jsonApiQueryExpose as jsonApiQueryExposeCategory } from './categories';
import { jsonApiQueryExpose as jsonApiQueryExposeUser } from './users';

export const jsonApiQueryExposeAll = jsonApiQueryExposeAllProperties(schemas.Expense);
export const streamQueryExposeAll = streamQueryExposeAllProperties(schemas.Expense);

// jsonApiQueryExposeAllProperties(modelSchema) === {
//     fields: {
//         title: 'title',
//         date: 'date',
//         amount: 'amount',
//     },
//     aggregate: {
//         for: {
//             $aggregator: 'array',
//             $property: 'for',
//         },
//         paidBy: {
//             $aggregator: 'array',
//             $property: 'paidBy',
//         },
//     },
//     filter: {
//         title: 'title',
//         date: 'date',
//         amount: 'amount',
//         for: 'for',
//         paidBy: 'paidBy',
//     },
// };

export default () => ({
  model: 'Expense',
  routes: [
    jsonApiQueryRoute({
      path: '/',
      expose: {
        ...jsonApiQueryExposeAll,
        included: { // put here the resources that are allowed be to included
          categories: jsonApiQueryExposeCategory,
          users: jsonApiQueryExposeUser,
        },
      },
    }),
    streamPostRoute({
      path: '/i/stream',
    }),
    streamDeleteRoute({
      path: '/i/stream',
    }),
    streamQueryRoute({
      path: '/i/stream',
      expose: streamQueryExposeAll,
      // expose: {
      //   fields: ['_id', '_type', 'title', 'amount', 'paidBy', 'for'],
      //   aggregate: ['paidBy', 'for', 'amount', 'categories'],
      //   filter: ['amount', 'for', 'paidBy', 'title', 'categories'],
      // },
    }),
  ],
});
