import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Mission = () => {
  const [apiData, setList] = useState([]);
  const [rocketData, setRocketData] = useState(null);

  const fetchList = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v3/missions");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Notice the parentheses here
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  const handleClick = (car) => {
    setRocketData(car);
  };
  return (
    <div className=" grid grid-cols-2 gap-4 mt-4 p-4">
      {apiData.map((car, index) => (
        <a
          href={`/MissionDetails/${car.mission_id}`}
          key={index}
          onClick={() => handleClick(car, index)}
          className="p-4 gap-4 bg-white-900 border-solid border-2 border-gray-400 flex rounded-lg flex-col text-center justify-center hover:border-gray-900"
        >
          <p>{car.mission_name}</p>
          <p>{car.mission_id}</p>
          <p>{car.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Mission;
