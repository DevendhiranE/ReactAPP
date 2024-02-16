import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto">
      <div className=" flex flex-col justify-center items-center max-w-xl mx-auto mt-5">
        <h3 className="font-semibold uppercase m-2">A Bit About Me</h3>
        <h1 className="text-4xl font-semibold text-blue-600 mb-3">Who Am I?</h1>
        <p className="mb-2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel labore
          eius voluptatem consequatur quia ipsum dicta quaerat repellat quod,
          molestiae suscipit nostrum veritatis autem alias sequi deserunt at
          esse quo! Ipsum repudiandae obcaecati facilis, est sed sapiente
          explicabo architecto corporis natus voluptates rem aperiam voluptas!
          Porro laudantium ratione tempore reprehenderit velit quidem sit
          maxime.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-5 justify-center items-center space-y-3">
        <div className="bg-[#8e44ad] w-[250px] md:min-h-[350px] md:min-w-[300px] p-2 mt-3 flex flex-col justify-center items-center rounded">
          <img
            src="./src/profile-img.webp"
            alt="Devendhiran"
            className="w-36 rounded-full"
          />
          <p className="text-xl font-semibold text-white text-center my-3">
            I am happy to know <br /> you that 50+ <br />
            projects done <br />
            sucessfully!
          </p>
          <button className="px-3 py-2 mb-3 font-semibold bg-[#ecf0f1] rounded hover:bg-[#51c1dd]">
            Download My CV
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 ">
          <div className="border-2 border-blue-500 px-3 py-5 rounded-full ">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
                className=""
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M2 21v-6m3 0v6m-3-3h3m15-3v6h2m-9 0v-6l2 3l2-3v6m-9.5-6h3M9 15v6" />
                </g>
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">HTML</h3>
              <a href="#" className="underline">
                More
              </a>
            </div>
          </div>

          <div className="border-2 border-blue-500 px-3 py-5 rounded-full ">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M8 16.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m3 .75c0 .414.336.75.75.75H13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75m3 4.5c0 .414.336.75.75.75H19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75"></path>
                </g>
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">CSS</h3>
              <a href="#" className="underline">
                More
              </a>
            </div>
          </div>

          <div className="border-2 border-blue-500 px-3 py-5 rounded-full ">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 256 154"
              >
                <defs>
                  <linearGradient
                    id="logosTailwindcssIcon0"
                    x1="-2.778%"
                    x2="100%"
                    y1="32%"
                    y2="67.556%"
                  >
                    <stop offset="0%" stopColor="#2298BD"></stop>
                    <stop offset="100%" stopColor="#0ED7B5"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosTailwindcssIcon0)"
                  d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
                ></path>
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">TailwindCSS</h3>
              <a href="#" className="underline">
                More
              </a>
            </div>
          </div>

          <div className="border-2 border-blue-500 px-3 py-5 rounded-full ">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M12 8V2H6a2 2 0 0 0-2 2v10.018a1.75 1.75 0 0 1 1.798.915A2.942 2.942 0 0 1 7.95 14h.1A2.95 2.95 0 0 1 11 16.95V17c0 .45-.17.86-.45 1.17c.288.439.45.96.45 1.507v.373c0 .747-.278 1.43-.736 1.95H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-9.25 7a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75m3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15z"
                ></path>
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">Js</h3>
              <a href="#" className="underline">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
