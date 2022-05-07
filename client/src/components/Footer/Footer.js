import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> for{" "}
          <a
            href="https://www.ijraset.com/research-paper/real-estate-land-transaction-system-with-blockchain"
            target="_blank"
          >
            REAL ESTATE LAND TRANSACTION
          </a>{" "}
          for a Step towards Digitalization.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
