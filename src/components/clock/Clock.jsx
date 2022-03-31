import React from "react";
import './Clock.css';

const HALF_SECOND = 500;

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      currency_hour: '',
    }
    this.functionClock = this.functionClock.bind(this);
  }

  functionClock() {
    const data = new Date();
    const hr =  (Number(data.getHours()) < 10) ? "0" + data.getHours() : data.getHours(); 
    const min = (Number(data.getMinutes()) < 10) ? "0" + data.getMinutes() : data.getMinutes();
    const seg = (Number(data.getSeconds()) < 10) ? "0" + data.getSeconds() : data.getSeconds();
    const currency_hour = hr + ":" + min + ":" + seg;
    this.setState({
      currency_hour,
      });
  }

  componentDidMount() {
      setInterval(this.functionClock, HALF_SECOND)
  }
    
    render(){
      const { currency_hour } = this.state;
        return(
        <div className="clock">
          { currency_hour }
        </div>
        );
    }
}

export default Clock;