
export const ADD_FEATURE = 'ADD_FEATURE'; // action type
export function addFeature(feature) { //action creater
    return { //action
        type: ADD_FEATURE,
        payload: feature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export function removeFeature(feature) {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}