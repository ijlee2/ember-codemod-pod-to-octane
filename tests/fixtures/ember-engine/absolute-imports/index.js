import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-engine/absolute-imports/input');
const outputProject = convertFixtureToJson('ember-engine/absolute-imports/output');

export { inputProject, outputProject };
