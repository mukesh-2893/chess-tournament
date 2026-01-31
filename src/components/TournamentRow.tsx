"use client";

import { Tournament } from "@/types/tournament";

interface Props {
  tournament: Tournament;
  isJoined: boolean;
  onJoin: (id: string) => void;
  onWithdraw: (id: string) => void;
}

export default function TournamentRow({
  tournament,
  isJoined,
  onJoin,
  onWithdraw,
}: Props) {
  const isFull = tournament.playersJoined >= tournament.maxPlayers;

  const formattedDate = new Date(tournament.startTime).toLocaleString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });

  const handleClick = () => {
    if (isJoined) {
      onWithdraw(tournament.id);
    } else {
      onJoin(tournament.id);
    }
  };

  return (
    <div className="tournamentRow">
      <div className="leftBlock">
        <div className="icon">{tournament.timeControl.charAt(0)}</div>

        <div>
          <div className="name">{tournament.name}</div>
          <div className="subText">{tournament.timeControl} • Rated</div>
        </div>
      </div>

      <div className="middleBlock">
        <div className="metaText">Start: {formattedDate}</div>
        <div className="metaText">
          {tournament.playersJoined}/{tournament.maxPlayers} players
        </div>
      </div>

      <div className="rightBlock">
        <div className="playersCount">
          {tournament.status === "live" ? "Now Playing" : "Starting Soon"}
        </div>

        <button
          className="joinButton"
          disabled={!isJoined && isFull}
          onClick={handleClick}
        >
          {isJoined ? "Withdraw" : isFull ? "Full" : "Join"}
        </button>
      </div>
    </div>
  );
}
