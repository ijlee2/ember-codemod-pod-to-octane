import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-addon/javascript/input');
const outputProject = convertFixtureToJson('ember-addon/javascript/output');

export { inputProject, outputProject };
