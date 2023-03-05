import React, { useState } from 'react';
import data from './data';
import List from './List';
import Navbar from '../../Navbar';

function Birthday() {

  const [dataItems, setDateItems] = useState(data)
  function handleClick(){
    setDateItems([]);
  }
  return (
  <>
  <Navbar />
  <main className='birthday-main'>
  <section className="container">
    <h3>{dataItems.length} birthdays today</h3>
    <List people={dataItems}/>
    <button onClick={handleClick} className="">Clear All</button>
  </section>
  </main>
  </>
  );
}

export default Birthday;
