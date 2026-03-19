import React, { Suspense } from "react";
import ClientComp from "./ClientComp";
import Link from "next/link";
import Image from "next/image";

const Page = async (props: PageProps<"/products/[...slug]">) => {
  const params = (await props.params).slug;
  const searchParams = await props.searchParams;

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="relative h-96 w-96">
          <Image alt="anh google" src={"/images/image_2.png"} fill />
        </div>
        <Link
          className="text-blue-500 underline"
          href={"/products/danh-muc-a-ssr"}
          replace
        >
          Danh muc san pham A - SSR
        </Link>
        <Link
          className="text-blue-500 underline"
          href={"/products/danh-muc-b-ssr"}
        >
          Danh muc san pham B - SSR
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientComp />
      </Suspense>
    </div>
  );
};

export default Page;
