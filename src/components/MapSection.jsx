import React from "react";

const MapSection = () => {
  return (
    <div className="w-full  mb-10 px-4 lg:px-24">
      <h2 className="text-2xl font-semibold text-teal-700 mb-4 text-center lg:text-left">
        Visit Us
      </h2>
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border">
        <iframe
          title="Sufi Eye Care Location"
          src="https://www.google.com/maps/embed?pb=!4v1749133636801!6m8!1m7!1s06MOYRJoUs8aFFJyANYT4A!2m2!1d26.3136901230133!2d84.15651910146681!3f34.625981024991646!4f11.432604254120406!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
