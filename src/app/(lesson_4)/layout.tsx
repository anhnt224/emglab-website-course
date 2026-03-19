import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log(">>> render layout");

  return (
    <div>
      <header className="h-10 bg-red-200">Header</header>
      <div className="min-h-52">{children}</div>
      <footer className="h-10 bg-blue-200">Footer</footer>
    </div>
  );
};

export default Layout;
