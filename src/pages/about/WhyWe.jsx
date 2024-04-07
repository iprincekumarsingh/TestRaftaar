import React from "react";
import whyWe1 from "../../assets/whyWe1.png"; // Import your service image
import vison from "../../assets/vison.png"; // Import your service image
import values from "../../assets/values.png"; // Import your service image

const WhyWe = () => {
  // Data for each card
  const cardsData = [
    {
      img: whyWe1,
      heading: "Our Mission",
      paragraph:
        "We live in a world of continuous, dramatic change. Our mission is to help enterprises maximize their video experience to achieve alignment and engagement among their global workforce, and create resilient organizations that can quickly adapt to new circumstances.",
    },
    {
      img: vison,
      heading: "Our Vision",
      paragraph:
        "Our vision is to become the leading provider of innovative solutions for businesses worldwide. We aim to revolutionize industries by leveraging cutting-edge technologies and delivering unparalleled value to our clients.",
    },
    {
      img: values,
      heading: "Our Core Values",
      paragraph:
        "Our vision is to become the leading provider of innovative solutions for businesses worldwide. We aim to revolutionize industries by leveraging cutting-edge technologies and delivering unparalleled value to our clients.",
    },
    // Add more card data as needed
  ];

  return (
    <div>
      <div className="bg-[#1E5CAB] h-[511px] flex flex-col items-center">
        <div className="max-w-screen-xl mx-auto text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Why you should choose us?
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 md:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi.
          </p>
        </div>
      </div>
      <div className="relative bottom-60 flex flex-col gap-10">
        {cardsData.map((card, index) => (
          <MeCard
            key={index}
            img={card.img}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

const MeCard = ({ img, heading, paragraph }) => {
  return (
    <div className="max-w-screen-xl mx-auto md:p-10 md:mb-0 rounded-lg shadow-xl bg-white">
      <div className="flex flex-col">
        <img src={img} className="w-full h-auto rounded-lg" alt="" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#1E5CAB] font-semibold text-3xl mb-4 md:mb-6">
            {heading}
          </h1>
          <p className="text-lg md:text-xl leading-normal">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
