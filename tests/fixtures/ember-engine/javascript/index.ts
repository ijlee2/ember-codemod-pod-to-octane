import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-engine/javascript/input');
const outputProject = convertFixtureToJson('ember-engine/javascript/output');

export { inputProject, outputProject };
