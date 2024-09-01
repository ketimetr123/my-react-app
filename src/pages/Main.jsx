import React, { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    localStorage.setItem("name", "keti metreveli");
    localStorage.setItem("age", 24);
    localStorage.setItem("device", "{name: 'iphone', model: '13'}");
  }, []);
  const deleteAge = () => {
    localStorage.removeItem("age");
  };
  return (
    <div className="w-[200px] mx-auto mt-3">
      <h1>SpaceX Missions</h1>

      <h5>
        {`${localStorage.getItem("name")} ${localStorage.getItem("age")}`}
      </h5>

      <h5>{localStorage.getItem("device")}</h5>
      <button onClick={deleteAge}>delete</button>
    </div>
  );
};
export default Main;
