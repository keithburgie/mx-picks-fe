import React from "react";
import Countdown, { zeroPad } from "react-countdown-now";

const DropTheGate = () => <h2>Countdown Complete!</h2>;

export default function CountdownTimer({ eventDate }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <DropTheGate />;
    } else {
      return (
        <h2>
          {zeroPad(days)} Days, {zeroPad(hours)} Hours, {zeroPad(minutes)}{" "}
          Minutes &amp; {zeroPad(seconds)} Seconds until Gate Drop
        </h2>
      );
    }
  };

  return <Countdown date={eventDate} renderer={renderer} zeroPad />;
}
