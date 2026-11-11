import {test} from 'node:test';import assert from 'node:assert/strict';import {greet} from '../src/greet.mjs';
test('normal, trimmed and empty greetings',()=>{assert.equal(greet('Lou'),'Hello, Lou!');assert.equal(greet(' Lou '),'Hello, Lou!');assert.equal(greet(''),'Hello, world!');});
