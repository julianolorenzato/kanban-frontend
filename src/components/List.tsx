import { Card } from "./Card";

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

export function List() {
  return (
    <div className="h-full flex flex-col rounded bg-slate-100 overflow-clip">
      <h3 className="p-1 text-black bg-slate-200">Título da lista</h3>
      <ul className=" w-48  max-h-full overflow-y-auto flex flex-col p-2 gap-2">
        {createRandomLengthArray().map(() => (
          <Card title="Dole" description="que??" />
        ))}
        <NewCard />
      </ul>
    </div>
  );
}

function NewCard() {
  return <div className="text-black">oi</div>;
}
