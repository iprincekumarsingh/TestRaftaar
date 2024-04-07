import React from "react";
import values1 from "../../assets/values/values1.png";
const Journey = () => {
  return (
    <div>
      <div className="flex-col justify-between px-4 py-10">
        <div className="flex justify-between px-4 py-10">
          <div>
            <img src={values1} alt="" />
          </div>
          <div>
            <img src={values1} alt="" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-center">How it all started</h1>
          <p
            className="px-2 mt-2 text-2xl "
            style={{
              lineHeight: "36px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journey;
