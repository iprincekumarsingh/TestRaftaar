import React from "react";
import serviceImage from "../../assets/aboutService.png"; // Import your service image

const Services = () => {
  return (
    <div className="flex items-center justify-around py-14 h-screen ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pr-8 flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-snug">
            Excellent Services ready to serve you anytime
          </h1>
          <p className="text-base md:text-lg text-[#475467] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center relative left-10">
          <img
            src={serviceImage}
            alt="Service"
            className="w-full md:w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
