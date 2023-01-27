import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-app/sass/input');
const outputProject = convertFixtureToJson('ember-app/sass/output');

export { inputProject, outputProject };
