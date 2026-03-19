import React, { useState, useCallback } from "react";

// 1. Sử dụng React.memo để Component con chỉ render lại khi Props thay đổi
// eslint-disable-next-line react/display-name
const MyButton = React.memo(
  ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => {
    console.log(`Render nút: ${children}`);
    return (
      <button onClick={onClick} style={{ margin: "10px" }}>
        {children}
      </button>
    );
  },
);

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [otherState, setOtherState] = useState<boolean>(false);

  // 2. Định nghĩa hàm increment với useCallback
  // Hàm này sẽ được "ghi nhớ" và không thay đổi định danh (reference)
  // giữa các lần ParentComponent render lại.
  const increment = useCallback(() => {
    console.log("increment");
    setCount((prev) => prev + 1);
  }, []); // Mảng dependencies trống: Hàm này chỉ tạo 1 lần duy nhất

  // const increment = () => {
  //   console.log("increment");
  //   setCount((prev) => prev + 1);
  // };

  console.log(">> render lai parent component");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Số hiện tại: {count}</h2>

      {/* Nút này sử dụng hàm đã được memoize */}
      <MyButton onClick={increment}>Tăng số</MyButton>
      {/* <MyButton onClick={increment2}>Tăng số</MyButton> */}

      {/* Nút này chỉ để thay đổi state khác nhằm test việc render */}
      <button onClick={() => setOtherState(!otherState)}>
        Thay đổi State khác (Check Console)
      </button>

      <p>Trạng thái khác: {otherState.toString()}</p>
    </div>
  );
};

export default ParentComponent;
