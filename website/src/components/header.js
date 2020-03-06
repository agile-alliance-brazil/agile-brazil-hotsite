import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import ImageHeaderLogo from "./image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className={styles.fixedHeadContainer}>
    <div className={styles.fixedBlueBarTop}>
      <ImageHeaderLogo></ImageHeaderLogo>
    </div>
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.navigationWrapper}>        
          <nav>
            <ul className={styles.menuList}>
              <li>FAQ</li>
              <li>Voluntários</li>
              <li><Link to="/wbma">WBMA</Link></li>
              <li>Código de Conduta</li>
              <li><a target="_blank" rel="noopener noreferrer" href="http://agilealliance.org/pt/">Agile Alliance</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.agilealliance.org/agilealliancebrazil/membresia/">Membresia</a></li>
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
  siteTitle: `Agile Brazil 2020 - Porto Alegre`,
}

export default Header
