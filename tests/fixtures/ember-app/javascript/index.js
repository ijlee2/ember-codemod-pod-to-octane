import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-app/javascript/input');
const outputProject = convertFixtureToJson('ember-app/javascript/output');

export { inputProject, outputProject };
