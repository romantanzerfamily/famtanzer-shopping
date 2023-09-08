import React from 'react';
import Box from './Box';

function Boxbox() {
  const data = [
    { wday: 'Mon', day: 4 },
    { wday: 'Tue', day: 5 },
    { wday: 'Wed', day: 6 },
    { wday: 'Thu', day: 7 },
    { wday: 'Fri', day: 8 },
    { wday: 'Sat', day: 9 },
    { wday: 'Sun', day: 10 },
    { wday: 'Mon', day: 11 },
    { wday: 'Tue', day: 12 },
    { wday: 'Wed', day: 13 },
    { wday: 'Thu', day: 14 },
    { wday: 'Fri', day: 15 },
    { wday: 'Sat', day: 16 },
    { wday: 'Sun', day: 17 },
    { wday: 'Mon', day: 18 },
    { wday: 'Tue', day: 19 },
    { wday: 'Wed', day: 20 },
    { wday: 'Thu', day: 21 },
    { wday: 'Fri', day: 22 },
    { wday: 'Sat', day: 23 },
    { wday: 'Sun', day: 24 },
  ];
  return (
    <div className="boxbox">
      {data.map((item, index) => {
        return <Box key={index} title={item.wday} subtitle={item.day} />;
      })}
    </div>
  );
}

export default Boxbox;
