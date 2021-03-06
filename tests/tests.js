var assert = require('assert');
var assertEquals = assert.equal;

require('../codepointat.js');

assertEquals(String.prototype.codePointAt.length, 1);

// String that starts with a BMP symbol
assertEquals('abc\uD834\uDF06def'.codePointAt(''), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt('_'), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(-Infinity), undefined);
assertEquals('abc\uD834\uDF06def'.codePointAt(-1), undefined);
assertEquals('abc\uD834\uDF06def'.codePointAt(-0), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(0), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(3), 0x1D306);
assertEquals('abc\uD834\uDF06def'.codePointAt(4), 0xDF06);
assertEquals('abc\uD834\uDF06def'.codePointAt(5), 0x64);
assertEquals('abc\uD834\uDF06def'.codePointAt(42), undefined);
assertEquals('abc\uD834\uDF06def'.codePointAt(Infinity), undefined);
assertEquals('abc\uD834\uDF06def'.codePointAt(Infinity), undefined);
assertEquals('abc\uD834\uDF06def'.codePointAt(NaN), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(false), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(null), 0x61);
assertEquals('abc\uD834\uDF06def'.codePointAt(undefined), 0x61);

// String that starts with an astral symbol
assertEquals('\uD834\uDF06def'.codePointAt(''), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt('1'), 0xDF06);
assertEquals('\uD834\uDF06def'.codePointAt('_'), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(-1), undefined);
assertEquals('\uD834\uDF06def'.codePointAt(-0), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(0), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(1), 0xDF06);
assertEquals('\uD834\uDF06def'.codePointAt(42), undefined);
assertEquals('\uD834\uDF06def'.codePointAt(false), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(null), 0x1D306);
assertEquals('\uD834\uDF06def'.codePointAt(undefined), 0x1D306);

// Lone high surrogates
assertEquals('\uD834abc'.codePointAt(''), 0xD834);
assertEquals('\uD834abc'.codePointAt('_'), 0xD834);
assertEquals('\uD834abc'.codePointAt(), 0xD834);
assertEquals('\uD834abc'.codePointAt(-1), undefined);
assertEquals('\uD834abc'.codePointAt(-0), 0xD834);
assertEquals('\uD834abc'.codePointAt(0), 0xD834);
assertEquals('\uD834abc'.codePointAt(false), 0xD834);
assertEquals('\uD834abc'.codePointAt(NaN), 0xD834);
assertEquals('\uD834abc'.codePointAt(null), 0xD834);
assertEquals('\uD834abc'.codePointAt(undefined), 0xD834);

// Lone low surrogates
assertEquals('\uDF06abc'.codePointAt(''), 0xDF06);
assertEquals('\uDF06abc'.codePointAt('_'), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(-1), undefined);
assertEquals('\uDF06abc'.codePointAt(-0), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(0), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(false), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(NaN), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(null), 0xDF06);
assertEquals('\uDF06abc'.codePointAt(undefined), 0xDF06);
