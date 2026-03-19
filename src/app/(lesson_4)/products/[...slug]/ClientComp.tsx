"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const ClientComp = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");
  const search = searchParams.get("search");
  const type = searchParams.get("type");

  const router = useRouter();

  const [count, setCount] = useState(10);

  return (
    <div>
      <div>CLient comp</div>
      <div>PAth: {JSON.stringify(pathName)}</div>
      <div>
        Search: {page} {pageSize} {search} {type}
      </div>

      <button
        onClick={() => {
          router.push("/products/danh-muc-c");
        }}
      >
        Navigate to C
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count {count}
      </button>
    </div>
  );
};

export default ClientComp;
