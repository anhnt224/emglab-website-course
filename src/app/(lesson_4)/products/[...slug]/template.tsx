"use client";

import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  console.log(">>> render template");

  return <div>{children}</div>;
};

export default Template;
