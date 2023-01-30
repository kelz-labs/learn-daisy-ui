import { ChildrenProps } from "../types";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <main className="bg-gray-100 w-full h-full min-h-screen flex justify-center items-center">
      {children}
    </main>
  );
};

export default Layout;
