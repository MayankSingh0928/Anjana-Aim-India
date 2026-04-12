const iconPaths = {
  construction:
    "M4 18h16M6 18V9l6-4 6 4v9M10 18v-5h4v5M3 10l9-6 9 6",
  steel:
    "M5 7h14M5 12h14M5 17h14M7 5v14M12 5v14M17 5v14",
  land:
    "M4 17c2.5-4 5-6 8-6s5.5 2 8 6M4 17h16M8 11l2-5 2 3 2-4 2 6",
  wind:
    "M12 4v16M12 11l6-3M12 11l-6-3M12 11l3 6M12 11l-3 6",
  solar:
    "M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1M9 14h6l-1 5h-4l-1-5ZM8 9h8l1 5H7l1-5Z",
  labor:
    "M8 7a2 2 0 1 0 0.001 0ZM16 7a2 2 0 1 0 0.001 0ZM5 18v-2a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2M13 18v-2a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2M9.5 18v-3a2.5 2.5 0 0 1 5 0v3",
  arrow:
    "M5 12h14M13 6l6 6-6 6",
  shield:
    "M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Zm-3 9 2 2 4-4",
  project:
    "M4 19h16M6 16V8h4v8M14 16V5h4v11M9 8h6",
  chevron:
    "M6 9l6 6 6-6",
  mp:
    "M8 4 12 3 15 5 18 5 20 8 19 12 20 15 17 18 13 18 11 20 8 18 5 18 4 15 3 11 5 8 6 5Z",
  cg:
    "M10 3 14 4 17 6 18 10 17 14 18 18 15 21 11 20 8 17 7 13 8 9 7 6Z",
  mh:
    "M4 7 8 5 12 6 15 5 20 7 19 11 20 15 17 17 14 16 10 18 7 17 5 13 3 10Z",
  india:
    "M12 2 14 4 13 7 14 10 13 14 14 18 12 22 10 18 11 14 10 10 11 7 10 4Z M15 5 18 7 17 10 19 13 17 15 M9 16 7 18 8 21",
};

export function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}
