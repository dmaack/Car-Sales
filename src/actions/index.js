export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function addFeature(feature, car) {
    return {
        type: ADD_FEATURE,
        payload: {feature, car}
    }
}

export function removeFeature(feature, car) {
    return {
        type: REMOVE_FEATURE,
        payload: {feature, car}
    }
}