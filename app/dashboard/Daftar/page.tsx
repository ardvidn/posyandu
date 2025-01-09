import RegisterForm from "@/components/RegisterForm";
import React from "react";

const Daftar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-slate-300">
        <div className="w-1/2 max-h-max">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Daftar;
