"use client";

import { useEffect, useState } from "react";
import { Tournament } from "@/types/tournament";
import TournamentRow from "./TournamentRow";
import FilterBar from "./FilterBar";
import Modal from "./Modal";
import { tournamentsList } from "@/data/tournaments";

export default function TournamentList() {
  const [tournaments, setTournaments] = useState<Tournament[]>(tournamentsList);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [joined, setJoined] = useState<Set<string>>(new Set());
  const [modalMessage, setModalMessage] = useState("");

  // useEffect(() => {
  //   // tournament data is static in data file so we can directly lod it aswell but i use useeffect for this
  //   setTournaments(tournamentsList);
  //   setLoading(false);
  // }, []);

  const handleJoin = (id: string) => {
    setTournaments((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, playersJoined: t.playersJoined + 1 } : t,
      ),
    );

    setJoined((prev) => new Set(prev).add(id));
    setModalMessage("You have successfully joined the tournament.");
  };

  const handleWithdraw = (id: string) => {
    setTournaments((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, playersJoined: t.playersJoined - 1 } : t,
      ),
    );

    setJoined((prev) => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });

    setModalMessage("You have withdrawn from the tournament.");
  };

  if (loading) return <p className="stateMessage">Loading tournaments...</p>;

  const filtered =
    filter === "all"
      ? tournaments
      : tournaments.filter((t) => t.status === filter);

  const live = filtered.filter((t) => t.status === "live");
  const upcoming = filtered.filter((t) => t.status === "upcoming");

  return (
    <>
      <FilterBar value={filter} onChange={setFilter} />

      {filter === "all" ? (
        <>
          {live.length > 0 && (
            <>
              <div className="sectionHeader">Now Playing</div>
              {live.map((t) => (
                <TournamentRow
                  key={t.id}
                  tournament={t}
                  isJoined={joined.has(t.id)}
                  onJoin={handleJoin}
                  onWithdraw={handleWithdraw}
                />
              ))}
            </>
          )}

          {upcoming.length > 0 && (
            <>
              <div className="sectionHeader">Starting Soon</div>
              {upcoming.map((t) => (
                <TournamentRow
                  key={t.id}
                  tournament={t}
                  isJoined={joined.has(t.id)}
                  onJoin={handleJoin}
                  onWithdraw={handleWithdraw}
                />
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <div className="sectionHeader">
            {filter === "live" ? "Now Playing" : "Starting Soon"}
          </div>

          {filtered.map((t) => (
            <TournamentRow
              key={t.id}
              tournament={t}
              isJoined={joined.has(t.id)}
              onJoin={handleJoin}
              onWithdraw={handleWithdraw}
            />
          ))}
        </>
      )}

      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage("")} />
      )}
    </>
  );
}
