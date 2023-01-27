import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-addon/sass/input');
const outputProject = convertFixtureToJson('ember-addon/sass/output');

export { inputProject, outputProject };
