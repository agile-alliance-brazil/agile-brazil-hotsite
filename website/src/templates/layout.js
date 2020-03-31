/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/stylesheets/layout.css";

import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Footer from "../components/footer";
import NavigationBar from "../components/navbar";
import SEO from "../components/seo";
import PriceTable from "../components/priceTable/priceTable";

const Layout = ({ children, seoTitle, fluid = false }) => {
  return (
    <Container fluid className="main-container">
      <SEO title={seoTitle} />
      <NavigationBar />
      <Container className="content-container" fluid={fluid}>
        {children}
      </Container>
      <PriceTable />
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired,
  fluid: PropTypes.bool
};

export default Layout;
