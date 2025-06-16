import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover bg-center">
      <div className="w-full lg:w-3/5 space-y-6 mt-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
          Welcome to <span className="text-yellow-400">Sufi Eye Care</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 drop-shadow">
          Your trusted eye clinic for accurate eye checkups, custom lenses, premium eyeglasses,
          and complete eye care solutions. See the world clearer — with care that matters.
        </p>
        <Button title="Explore Eye Services" />
      </div>
    </div>
  );
};

export default Home;
