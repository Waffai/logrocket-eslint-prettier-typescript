// type haha = true;
console.log("  Hello world!");
export const hello = "world";

async function testFunc() {
  const a = await Promise.resolve(1);
  console.log(a);
}

function greetName(name: string) {
  return `Hello ${name}`;
}

var test2 = "er";
console.log(test2);
testFunc();
greetName("world");
