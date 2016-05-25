
import {
  queryRoute as jsonApiQueryRoute,
  exposeAllProperties as jsonApiQueryExposeAllProperties,
} from 'odyssee/src/routes/json-api';

import schemas from '../schemas';

export const jsonApiQueryExpose = jsonApiQueryExposeAllProperties(schemas.Category);

export default () => ({
  model: 'User',
  routes: [
    jsonApiQueryRoute({ path: '/', expose: jsonApiQueryExpose }),
    // streamQueryRoute({ path: '/', expose: streamQueryExposeAllProperties(modelSchema) }),
  ],
});
