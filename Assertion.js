const assert = require("assert/strict");

try {
    assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, "3"]], 4, 5]);
} catch(err) {
    console.log("msg: "+err.message);
    console.log("name: "+err.name);
    console.log("actual: "+err.actual);
    console.log("expected: "+err.expected);
    console.log("code: "+err.code);
    console.log("opt: "+err.operator);
    console.log("genMsg: "+err.generatedMessage);
}

const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});


try {
    assert.strictEqual(1, 2);
  } catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
  }

