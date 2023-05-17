import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-app/typescript/input');
const outputProject = convertFixtureToJson('ember-app/typescript/output');

export { inputProject, outputProject };
