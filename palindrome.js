/* Array */
var chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var arrayAlphabetic = [];
var arrayPalindrome = [];
/* */

function getRandom() {
  var char1 = chars[Math.floor(Math.random() * 26)];
  var char2 = chars[Math.floor(Math.random() * 26)];
  var char3 = chars[Math.floor(Math.random() * 26)];

  return "" + char1 + char2 + char3;
}

/* Alphabetical lowercase array */
for (var i = 0; i < 10000; i++) {
  arrayAlphabetic.push(getRandom());
}
/* */

/* Palindrome array */
arrayPalindrome = arrayAlphabetic.map(item =>
  item ===
  item
    .split("")
    .reverse()
    .join("")
    ? item
    : ""
);

arrayPalindrome = arrayPalindrome.filter(function(e) {
  return e !== "";
});
/* */

console.log(arrayPalindrome);
