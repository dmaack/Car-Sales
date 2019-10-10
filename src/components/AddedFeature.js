import React from 'react';

const AddedFeature = props => {
  console.log('addedfeature.js props', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature, props.car)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
