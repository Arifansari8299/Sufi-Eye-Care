import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 p-6 shadow-lg rounded-xl cursor-pointer 
                    bg-white hover:shadow-xl transition-transform duration-300 ease-in-out 
                    lg:hover:-translate-y-6 w-full">
      <div className="bg-[#d5f2ec] p-4 rounded-full group-hover:bg-[#ade9dc] transition-colors duration-300 ease-in-out">
        {icon}
      </div>
      <h2 className="font-semibold text-xl text-gray-900">{title}</h2>
      <p className="text-gray-600 text-base max-w-md">{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium asperiores unde veniam, perspiciatis neque!"}</p>
      <h3 className="text-blue-600 cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out font-medium">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
