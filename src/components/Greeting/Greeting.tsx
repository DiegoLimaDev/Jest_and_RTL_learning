import React from 'react';

type GreetingTypes = {
  name?: string;
};

export const Greeting = (props: GreetingTypes) => {
  return (
    <div>
      <p>oi, {props.name ? props.name : 'Guest'}</p>
    </div>
  );
};
