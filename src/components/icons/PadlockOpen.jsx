import * as React from "react";
import Padlock from "./Padlock";
const PadlockOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"
    viewBox="-5 -2 24 24"
    preserveAspectRatio="xMinYMin"
    className="jam jam-padlock-open-f"
    {...props}
  >
    <path d="M12 5h-2a3 3 0 1 0-6 0v5h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2V5a5 5 0 1 1 10 0zM7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);
export default PadlockOpen;
