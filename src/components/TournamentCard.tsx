"use client";

import { Tournament } from "@/types/tournament";

interface Props {
  tournament: Tournament;
  onJoin: (id: string) => void;
}

export default function TournamentCard({ tournament, onJoin }: Props) {
  const isFull = tournament.playersJoined >= tournament.maxPlayers;

  const formattedDate = new Date(tournament.startTime).toLocaleString();

  return (
    <div className="card" role="article" aria-label={tournament.name}>
      <div className="cardHeader">
        <h3>{tournament.name}</h3>
        <span className={`badge ${tournament.status}`}>
          {tournament.status}
        </span>
      </div>

      <div className="cardBody">
        <p>
          <strong>Time Control:</strong> {tournament.timeControl}
        </p>
        <p>
          <strong>Start:</strong> {formattedDate}
        </p>
        <p>
          <strong>Players:</strong> {tournament.playersJoined}/
          {tournament.maxPlayers}
        </p>
      </div>

      <button
        onClick={() => onJoin(tournament.id)}
        disabled={isFull}
        className="joinButton"
        aria-disabled={isFull}
      >
        {isFull ? "Full" : "Join"}
      </button>
    </div>
  );
}
