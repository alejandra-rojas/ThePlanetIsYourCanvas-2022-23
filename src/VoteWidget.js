import { useAuthContext } from "./components/hooks/useAuthContext";
import Navbar from "./components/Navbar";
import IlustracionFinalists from "./components/IlustracionFinalists";
import DrawingFinalists from "./components/DrawingFinalists";
import PhotoFinalists from "./components/PhotoFinalists";
// import Allnocount from "./staticComponents/Allnocount";

function VoteWidget() {
  // const { user, authIsReady } = useAuthContext();
  const { authIsReady } = useAuthContext();

  if (!authIsReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="padding-main-container vote-widget">
      <Navbar />
      <IlustracionFinalists />
      {/* <DrawingFinalists /> */}
      <PhotoFinalists />
      {/* {user ? (
        <>
          <IlustracionFinalists />
          <DrawingFinalists />
          <PhotoFinalists />
        </>
      ) : (
        <Allnocount />
      )} */}
    </div>
  );
}

export default VoteWidget;
