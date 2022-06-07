import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from "./mock-data";
import NumberOfEvents from "./NumberOfEvents";

function App() {
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents events={mockData} />

      <EventList events={mockData} />
    </div>
  );
}

export default App;
