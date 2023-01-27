import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-engine/sass/input');
const outputProject = convertFixtureToJson('ember-engine/sass/output');

export { inputProject, outputProject };
