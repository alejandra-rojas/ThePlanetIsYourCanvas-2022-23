import IlustracionFinalists from "./components/IlustracionFinalists";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./components/hooks/useAuthContext";
import DrawingFinalists from "./components/DrawingFinalists";
import PhotoFinalists from "./components/PhotoFinalists";
import VoteEntryVideo from "./components/VoteEntryVideo";
import VideoFinalists from "./components/VideoFinalists";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
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

export default App;
