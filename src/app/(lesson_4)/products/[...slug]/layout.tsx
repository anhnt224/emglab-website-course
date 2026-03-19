import React from "react";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}) => {
  const data = await params;
  return <div>{children}</div>;
};

export default Layout;
