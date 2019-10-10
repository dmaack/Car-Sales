import React from 'react';
import { connect } from 'react-redux';

//Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature } from './actions'

const App = props => {
  console.log('props in App.js', props);

  const removeFeature = (feature, car) => {
    console.log('this car has been removed', feature, car)
    props.removeFeature(feature, car)
    // dispatch an action here to remove an item
  };

  const buyItem = (feature, car) => {
    console.log('this car is trying to be bough', feature, car)
    props.addFeature(feature, car)
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} store={props.store} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} car={props.car}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect (mapStateToProps, { addFeature, removeFeature })(App);
