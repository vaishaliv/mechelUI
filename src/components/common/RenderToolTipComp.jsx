import { Tooltip } from "react-bootstrap";

const RenderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {props.text}
  </Tooltip>
);

export default RenderTooltip;