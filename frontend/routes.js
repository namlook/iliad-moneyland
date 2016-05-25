

import structure from './structure';
import register from './register';
import { buildRoutes, extractActions } from 'odyssee-client';

const actions = extractActions(structure, register);

export default buildRoutes(structure, register, actions);
