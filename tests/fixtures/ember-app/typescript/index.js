import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-app/typescript/input');
const outputProject = convertFixtureToJson('ember-app/typescript/output');

export { inputProject, outputProject };
