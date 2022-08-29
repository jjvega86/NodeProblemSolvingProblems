const matchingStrings = require("./SparseArrays");
/*
4
aba
baba
aba
xzxb
3
aba
xzxb
ab

*/
test("4 input strings ('aba', 'baba', 'aba', 'xzxb') with 3 search strings ('aba', 'xzxb', 'ab') produces [2,1,0]", () => {
  expect(
    matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
  ).toEqual([2, 1, 0]);
});

/*
3
def
de
fgh
3
de
lmn
fgh
*/
test("3 input strings ('def', 'de', 'fgh') with 3 search strings ('de', 'lmn', 'fgh') produces [1,0,1]", () => {
  expect(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"])).toEqual([
    1, 0, 1,
  ]);
});

/*
13
abcde
sdaklfj
asdjf
na
basdn
sdaklfj
asdjf
na
asdjf
na
basdn
sdaklfj
asdjf
5
abcde
sdaklfj
asdjf
na
basdn
*/

test("13 input strings ('abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf' ) with 5 search strings ('abcde', 'sdaklfj', 'asdjf', 'na', 'basdn') produces [1,3,4,3,2]", () => {
  expect(
    matchingStrings(
      [
        "abcde",
        "sdaklfj",
        "asdjf",
        "na",
        "basdn",
        "sdaklfj",
        "asdjf",
        "na",
        "asdjf",
        "na",
        "basdn",
        "sdaklfj",
        "asdjf",
      ],
      ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
    )
  ).toEqual([1, 3, 4, 3, 2]);
});
