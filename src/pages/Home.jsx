import Carousel from "../Components/Carousel";
import Cetogeries from "../Components/Cetogeries";
import Trending from "../Components/Trending";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();
  console.log("home user :", user);
  return (
    <div>
      <Carousel />
      <Cetogeries />
      <Trending />
    </div>
  );
}

export default Home;
