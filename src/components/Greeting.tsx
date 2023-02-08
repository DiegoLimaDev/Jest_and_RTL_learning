import React from 'react';
import { GreetingTypes } from './Greeting.types';

export const Greeting = (props: GreetingTypes) => {
  return (
    <div>
      <p>oi, {props.name ? props.name : 'Guest'}</p>
    </div>
  );
};
