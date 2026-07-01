import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app/edge-case-components/input');
const outputProject = convertFixtureToJson('app/edge-case-components/output');

export { inputProject, outputProject };
