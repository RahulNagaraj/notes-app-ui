export const NAMESPACE = 'counter';

const format = (name, type = 'action') => `${NAMESPACE}/${type}/${name}`;

export const INCREMENT = format('increment');

export const DECREMENT = format('decrement');
