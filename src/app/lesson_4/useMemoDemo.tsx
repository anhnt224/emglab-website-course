import React, { useMemo, useState } from "react";

const UseMemoDemo = () => {
  const [dark, setDark] = useState(false);
  const [sales, setSales] = useState<number[]>([10, 20, 30]);

  const func1 = () => {};
  const func2 = () => {};
  console.log(func1 === func2);

  const totalRevenue = useMemo(() => {
    return sales.reduce((acc, curr) => acc + curr, 0);
  }, [sales]);

  return (
    <div>
      <div>Total Revenue: {totalRevenue}</div>
      <div className="flex flex-col">
        <button onClick={() => setDark(!dark)}>Toggle Dark</button>
        <button onClick={() => setSales([...sales, 50])}>Add Sale</button>
      </div>
    </div>
  );
};

export default UseMemoDemo;
