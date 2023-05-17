import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('ember-engine/relative-imports/input');
const outputProject = convertFixtureToJson('ember-engine/relative-imports/output');

export { inputProject, outputProject };
