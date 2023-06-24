import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-addon/typescript/input');
const outputProject = convertFixtureToJson('ember-addon/typescript/output');

export { inputProject, outputProject };
