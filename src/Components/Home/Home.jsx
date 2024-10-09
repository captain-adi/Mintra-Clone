import React from "react";
import { useSelector } from "react-redux";
import Homeitems from "../HomeItems/Homeitems";
function Home() {
  const items = useSelector((state) => state.item);
  return (
    <main>
      <div className="flex flex-wrap  justify-evenly w-4/5 my-[50px] mx-[10%]  ">
      {items.map((item)=><Homeitems key={item.id} item={item}/>)}
      </div>
    </main>
  );
}

export default Home;
