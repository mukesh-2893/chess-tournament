import TournamentList from "@/components/TournamentList";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">Chess Tournaments</h1>
      <TournamentList />
    </main>
  );
}
