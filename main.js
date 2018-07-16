const pipeline = (...funcs) => (val) => funcs.reduce((prev, func) => func(prev), val);

capitalize = it => it[0].toUpperCase() + it.slice(1);
exclaim = it => it + "!";
double = it => it + it;
new_line = it => it + "\n";

const result = pipeline(
  capitalize,
  exclaim,
  new_line,
  double
)("hello world")

console.log(result)
