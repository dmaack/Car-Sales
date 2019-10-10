// import { statement } from "@babel/template";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

//Want to ADD_FEATURE
//Want to DELETE_FEATURE
export const carSalesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE':
            return {
              ...state,
              car: {
                ...state.car,
                features: [...state.car.features, action.payload.features]
              },
              additionalPrice: state.additionalPrice + action.payload.feature.price
            }
        case 'REMOVE_FEATURE':
          return{
            ...state,
            car: {
              ...state.car,
              features: [state.car.features].filter(feature => feature.id !== action.payload.feature.id)
            },
            additionalPrice: state.additionalPrice - action.payload.feature.price
          }
            default:
        return state;
    } //closes switch  
} //closes reducer