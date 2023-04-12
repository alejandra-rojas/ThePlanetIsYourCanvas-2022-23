import { useAuthContext } from "./components/hooks/useAuthContext";
import Navbar from "./components/Navbar";
import IlustracionFinalists from "./components/IlustracionFinalists";
import DrawingFinalists from "./components/DrawingFinalists";
import PhotoFinalists from "./components/PhotoFinalists";
import VideoFinalists from "./components/VideoFinalists";

function VoteWidget() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="padding-main-container vote-widget">
      {authIsReady && (
        <>
          <Navbar />
          <IlustracionFinalists />
          <DrawingFinalists />
          <PhotoFinalists />
          <VideoFinalists />
        </>
      )}
    </div>
  );
}

export default VoteWidget;
