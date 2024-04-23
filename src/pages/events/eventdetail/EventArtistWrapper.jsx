import { useState } from "react";
import EventDetailPage from "./EventDetailPage";
import ArtistDetailPage from "../../artists/ArtistDetailPage";

const UI = {
  ArtistDetailPage: "ArtistDetailPage", // artist detail
  EventDetailPage: "EventDetailPage", // movie Detail
};
const EventArtistWrapper = ({ back, event }) => {
  const [ui, setUI] = useState(UI.EventDetailPage);
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  const handleSelectArtist = (artistId) => {
    setSelectedArtistId(artistId);
    setUI(UI.ArtistDetailPage);
  };

  const artistBack = () => {
    setSelectedArtistId(null);
    setUI(UI.EventDetailPage);
  };

  return (
    <>
      {ui === UI.EventDetailPage && (
        <EventDetailPage
          onSelectArtist={handleSelectArtist}
          back={back}
          event={event}
        />
      )}
      {ui === UI.ArtistDetailPage && (
        <ArtistDetailPage artistId={selectedArtistId} back={artistBack} />
      )}
    </>
  );
};

export default EventArtistWrapper;
