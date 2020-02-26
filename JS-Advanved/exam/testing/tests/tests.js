let Parser = require("../solution");
let assert = require("chai").assert;

describe("MyTests", () => {

    const testData = [{ "Rob": "apple" }, { "Mike": "race" }, { "Robin": "razor" }];

    it('ctr', function() {

        const parser = new Parser(JSON.stringify(testData));

        assert.deepEqual(parser._data, testData);
        assert.deepEqual(parser._log, []);
        parser._addToLog('start');
        assert.deepEqual(parser._log, [`0: start`]);
    });

    it('data()', function() {

        const parser = new Parser(JSON.stringify(testData));
        assert.deepEqual(parser.data, testData);
    });

    it('print()', function() {

        const parser = new Parser(JSON.stringify(testData));
        const print = parser.print();

        assert.deepEqual(parser._log, [`0: print`]);

        const printStr = 'id|name|position\n' +
            '0|Rob|apple\n' +
            '1|Mike|race\n' +
            '2|Robin|razor';

        assert.deepEqual(print, printStr);
    });

    it('addEntries()', function() {

        const parser = new Parser(JSON.stringify(testData));
        const result = parser.addEntries('Peter:ip');

        assert.deepEqual(result, 'Entries added!');
        assert.deepEqual(parser._log, [`0: addEntries`]);

        const newData = [{ "Rob": "apple" },
            { "Mike": "race" },
            { "Robin": "razor" },
            { "Peter": "ip" },
        ];

        assert.deepEqual(newData, parser.data);

    });

    it('removeEntries()', function() {

        const parser = new Parser(JSON.stringify(testData));
        assert.throws(() => parser.removeEntry("invalid"), "There is no such entry!");

        const result = parser.removeEntry("Robin");

        assert.deepEqual(result, "Removed correctly!");
        assert.deepEqual(parser._log, [`0: removeEntry`]);
        assert.isTrue(parser._data[2].deleted);

        const newData = [{ "Rob": "apple" },
            { "Mike": "race" }
        ];

        assert.deepEqual(newData, parser.data);

    });

    it('addToLog()', function() {

        const parser = new Parser(JSON.stringify(testData));

        parser._addToLog("random");
        assert.deepEqual(parser._log, [`0: random`]);
        parser._addToLog("random");
        assert.deepEqual(parser._log, [`0: random`, `1: random`]);
    });
});