import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-engine/absolute-imports/input');
const outputProject = convertFixtureToJson('ember-engine/absolute-imports/output');

export { inputProject, outputProject };
