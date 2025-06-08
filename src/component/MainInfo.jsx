import React, { useEffect, useState } from "react";
import SplitText from "./SplitText";

const MainInfo = () => {
  const [data, setData] = useState(null);
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        alert("Fetch error:", error);
      }
    };

    fetchData();
  }, [API_KEY]);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen p-4 ">
        <div className="info flex flex-col items-center justify-center gap-8">
          <div className="title">
            <SplitText
              text="Welcome to Space Thing"
              className="md:text-5xl sm:text-4xl text-3xl font-semibold h-fit"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <div className="description text-lg">{data?.explanation}</div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center w-full sm:mt-0 mt-8">
          <span className="sm:text-3xl text-2xl">Picture of the day</span>
          <img
            src={data?.url}
            alt=""
            className="rounded-xl md:w-[400px] h-[400px] w-full object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default MainInfo;
