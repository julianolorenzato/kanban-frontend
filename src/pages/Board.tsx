import { List } from "../components/List";

function createRandomLengthArray(
  minLength = 1,
  maxLength = 10,
  minValue = 0,
  maxValue = 100
) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  );
}

export function Board() {
  return (
    <main className="h-full flex flex-1 p-2 gap-2 overflow-x-auto">
      {/* <div className="flex gap-2"> */}
        {createRandomLengthArray().map(() => (
          <List />
        ))}
      {/* </div> */}
    </main>
  );
}
