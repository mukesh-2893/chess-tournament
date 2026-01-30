"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function FilterBar({ value, onChange }: Props) {
  return (
    <div className="filterBar">
      <label htmlFor="statusFilter" className="filterLabel">
        Filter by Status
      </label>

      <select
        id="statusFilter"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="filterSelect"
      >
        <option value="all">All</option>
        <option value="upcoming">Upcoming</option>
        <option value="live">Live</option>
      </select>
    </div>
  );
}
