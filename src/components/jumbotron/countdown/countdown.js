import React from "react";
import Countdown, { zeroPad } from "react-countdown-now";
import './countdown.scss';

const DropTheGate = () => <h2>Countdown Complete!</h2>;

export default function CountdownTimer({ eventDate }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <DropTheGate />;
    } else {
      return (
        <>
          <h2>
            Next Event Starts In:
          </h2>
          <h3 className="countdown">
            <span>{zeroPad(days)} <small>Days</small></span>
            <span>{zeroPad(hours)} <small>Hours</small></span>
            <span>{zeroPad(minutes)} <small>Minutes</small></span>
            <span>{zeroPad(seconds)} <small>Seconds</small></span>
          </h3>
        </>
      );
    }
  };

  return <Countdown date={eventDate} renderer={renderer} zeroPad />;
}
