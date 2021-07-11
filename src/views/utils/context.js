import React from 'react';

const CovidContext = React.createContext();

export const CovidProvider = CovidContext.Provider;
export const CovidConsumer = CovidContext.Consumer;

export default CovidContext;
