import Image from "next/image";
import React, { useState } from "react";

const DesignType = () => {
  const Designs = [
    {
      name: "Modern",
      image: "/modern.png",
    },
    {
      name: "Bohemian",
      image: "/bohemian.png",
    },
    {
      name: "Industrial",
      image: "/industrial.png",
    },
    {
      name: "Traditional",
      image: "/traditional.png",
    },
    {
      name: "Rustic",
      image: "/rustic.png",
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className="mt-5">
      <label className="text-gray-500">Select Interior Design Type</label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
        {Designs.map((design, index) => (
          <div key={index} onClick={() => setSelectedOption(design.name)}>
            <Image
              src={design.image}
              width={100}
              height={100}
              alt={design.name}
              className={`h-[70px] rounded-md hover:scale-105 transition-all cursor-pointer ${
                design.name === selectedOption &&
                "border-2 border-primary rounded-md"
              }`}
            />
            <h2>{design.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignType;
