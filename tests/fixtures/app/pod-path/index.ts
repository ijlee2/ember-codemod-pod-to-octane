import { convertFixtureToJson } from '@codemod-utils/tests';

const inputProject = convertFixtureToJson('app/pod-path/input');
const outputProject = convertFixtureToJson('app/pod-path/output');

export { inputProject, outputProject };
