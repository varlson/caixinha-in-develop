import React from "react";
import { MutatingDots } from "react-loader-spinner";

function Spinner() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#0c3ef5"
      secondaryColor="#0c2378"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}

export default Spinner;
