import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MissionDetails = () => {
  const { mission_id } = useParams();
  const [missionDetails, setmissionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const getMissionDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.spacexdata.com/v3/missions/${mission_id}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setmissionDetails(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMissionDetails();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="w-[500px] mx-auto border-2 border-gray-400 rounded-lg p-4 mt-5">
          <h1>{missionDetails.mission_name}</h1>
          <p>{missionDetails.description}</p>
          <a
            className="text-sky-400"
            href={missionDetails.wikipedia}
            target="_blank"
          >
            Learn more on Wikipedia
          </a>
        </div>
      )}
    </div>
  );
};
export default MissionDetails;
