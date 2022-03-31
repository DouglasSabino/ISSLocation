import React from "react";
import './Header.css';
import Clock from "../clock/Clock";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { latitude, longetude } = this.props;
    return (
      <div className="main-header">
        <div className="header">
          <div className="header-about">
            Desenvolvido por: Douglas Sabino
          </div>
          <div className="header-center">
            ISS Location
            <hr />
            <Clock />
          </div>
          <div className="position-head">
            <p>Latitude: { latitude }</p>
            <p>Longetude: { longetude }</p>
          </div>
          <div className="header-social">
           <a href="https://github.com/DouglasSabino" target="_blank" rel="noreferrer">
            <img className="social" src="./github_icon.png" alt="github icon" />
           </a> 
           <a href="https://www.linkedin.com/in/douglas-sabino-733709204/" target="_blank" rel="noreferrer">
            <img className="social" src="./linkedin_icon.png" alt="linkedin icon" />
           </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latitude: state.issPosition.latitude,
  longetude: state.issPosition.longitude,
})

export default connect(mapStateToProps)(Header);
