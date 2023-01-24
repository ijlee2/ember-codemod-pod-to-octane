import { convertFixtureToJson } from '../../../helpers/testing.js';

const inputProject = convertFixtureToJson('ember-engine/typescript/input');
const outputProject = convertFixtureToJson('ember-engine/typescript/output');

export { inputProject, outputProject };
