export const getNameSpace = name => name;

export const getState = (state, name) => state[getNameSpace(name)];
