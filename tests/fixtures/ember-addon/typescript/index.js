import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-addon/typescript/input');
const outputProject = convertFixtureToJson('ember-addon/typescript/output');

export { inputProject, outputProject };
