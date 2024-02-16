import React from "react";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <section className="">
        <div className="flex justify-center items-center p-3">
          <div className="flex flex-col justify-center items-center md:flex-row  gap-2 ">
            <div className="">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjxW1V-vrHzco2N2OhTlh2Hp0S75XOJVHjwkEMWfZ8d20dpVLySu4LDisxNzE1mobQOjxFzIM2cW0pkcwmhGQX0ThP8YD5-ElgwCUEG6XgKub7ixqqx7D2Lg5_rmGdVQpuzT3FiPUFTFZlF9X-LiLnKg_xicYJwus4LrQHgj4KWuRC2YsBgjcXnpFGmg/s1600/pbt11.webp"
                alt="first Image"
                className="h-auto xs:max-w-md md:max-lg lg:max-w-sm rounded object-cover"
              />
            </div>
            <div className="">
              <h1 className="text-xl font-Roboto font-bold mb-3 hover:text-pink-600 cursor-pointer">
                Google Assistant Can Now Speak Multiple Languages
                Interchangeably
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nesciunt recusandae officia facere repellat! Esse
                illum aperiam quasi perspiciatis ipsa doloribus laborum eveniet
                nostrum ullam impedit, velit blanditiis error cupiditate!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Card />
      </section>
    </div>
  );
};

export default HomePage;
