import React from "react";
const Function1 = () => {
  const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
  return (
    <ul>
      {materials.map((material, index) => {
        return (
          <>
            <li id={index}> {material}</li>
          </>
        );
      })}
    </ul>
  );
};
export default Function1;
