import { Row, Col, Nav } from "react-bootstrap";

const SiteFooter = (props) => (
  <>
    <Nav className="ms-auto">{props.children}</Nav>
  </>
);
export default SiteFooter;
