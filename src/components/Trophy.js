import React from "react";
import trophy from "../asserts/1.png";

const Trophy = () => {
  return (
    <div className="mx-auto">
      <img
        src={trophy}
        alt="trophy"
        className="mt-8 ml-24 h-[700px] w-[900px] max-2xl:mx-auto max-lg:h-[400px] max-lg:w-[340px] max-sm:h-[200px] max-sm:w-[170px]"
      />
    </div>
  );
};

export default Trophy;