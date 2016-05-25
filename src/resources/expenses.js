
import {
  queryRoute as jsonApiQueryRoute,
  exposeAllProperties as jsonApiQueryExposeAllProperties,
} from 'odyssee/src/routes/json-api';

import {
  queryRoute as streamQueryRoute,
  exposeAllProperties as streamQueryExposeAllProperties,
} from 'odyssee/src/routes/stream';

import schemas from '../schemas';

import { jsonApiQueryExpose as jsonApiQueryExposeCategory } from './categories';
import { jsonApiQueryExpose as jsonApiQueryExposeUser } from './users';

export const jsonApiQueryExpose = jsonApiQueryExposeAllProperties(schemas.Expense);
export const streamQueryExpose = streamQueryExposeAllProperties(schemas.Expense);

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
        ...jsonApiQueryExpose,
        included: { // put here the resources that are allowed be to included
          categories: jsonApiQueryExposeCategory,
          users: jsonApiQueryExposeUser,
        },
      },
    }),
    streamQueryRoute({
      path: '/i/stream',
      expose: streamQueryExpose,
      // expose: {
      //   fields: ['_id', '_type', 'title', 'amount', 'paidBy', 'for'],
      //   aggregate: ['paidBy', 'for', 'amount', 'categories'],
      //   filter: ['amount', 'for', 'paidBy', 'title', 'categories'],
      // },
    }),
  ],
});
