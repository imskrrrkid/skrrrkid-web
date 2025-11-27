import { Tooltip } from "react-tooltip";

function Tooltips() {
  const StyledTooltip = ({ id }) => (
    <Tooltip id={id} style={{ backgroundColor: "white", color: "black" }} />
  );
  return (
    <>
      <StyledTooltip id="tt-github" />
      <StyledTooltip id="tt-patreon" />
      <StyledTooltip id="tt-x" />
      <StyledTooltip id="tt-insta" />
      <StyledTooltip id="tt-art" />
      <StyledTooltip id="tt-ppc" />
    </>
  );
}

export default Tooltips;
