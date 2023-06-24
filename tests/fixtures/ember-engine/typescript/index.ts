import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-engine/typescript/input');
const outputProject = convertFixtureToJson('ember-engine/typescript/output');

export { inputProject, outputProject };
