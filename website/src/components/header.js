import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
const Header = ({ siteTitle }) => (
  <div className={styles.fixedHeadContainer}>
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        Agile Brazil
        <div className={styles.navigationWrapper}>
          <nav>
            <ul className={styles.menuList}>
              <li>FAQ</li>
              <li>Voluntários</li>
              <li>Programa</li>
              <li>WBMA</li>
              <li>Código de Conduta</li>
              <li><a href="http://agilealliance.org/pt/">Agile Alliance</a></li>
              <li><a href="https://www.agilealliance.org/agilealliancebrazil/membresia/">Membresia</a></li>
            </ul>
          </nav>
        </div>
      </header>
  </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
