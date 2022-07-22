import { test } from '@sondr3/minitest';
import fixturify from 'fixturify';
import { strict as assert } from 'node:assert';
import { existsSync, rmSync } from 'node:fs';

export function assertFixture(projectRoot, outputProject) {
  assert.deepStrictEqual(fixturify.readSync(projectRoot), outputProject);
}

export function loadFixture(projectRoot, inputProject) {
  if (existsSync(projectRoot)) {
    rmSync(projectRoot, { recursive: true });
  }

  fixturify.writeSync(projectRoot, inputProject);
}

export { assert, test };
