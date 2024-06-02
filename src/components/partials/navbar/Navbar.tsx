import React from "react";

function Navbar() {
  return (
    <div className="h-[110px] bg-appDark">
      <div className="p-2 flex justify-around items-center">
        <div className="w-[80px]">
          <div className="flex justify-center items-center font-semibold h-[80px] bg-red-500 text-white rounded-full">
            <div className="text-center">
              <p>150,10</p>
              <p>R$</p>
            </div>
          </div>
          <p className="text-center text-white font-semibold text-sm">Saldo</p>
        </div>

        <fieldset className="rounded text-white border px-10">
          <legend className="text-center px-2">Mês</legend>
          <div className="flex justify-center font-semibold items-center">
            <p className="p-2">Junho</p>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Navbar;
