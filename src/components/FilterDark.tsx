"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function FilterDark({ value, onChange }: Props) {
  return (
    <div className="filterContainer">
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
        <option value="live">Now Playing</option>
        <option value="upcoming">Starting Soon</option>
      </select>
    </div>
  );
}
