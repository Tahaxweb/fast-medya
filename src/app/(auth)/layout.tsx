import type React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
