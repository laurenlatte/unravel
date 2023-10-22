import {useState} from 'react';
import Header from './Header.js';
import Actions from './Actions.js';

export default function Scene({game, headers, actions}) {

  return (
    <div style={{
      height: '100%',
      width: '75%',
      position: 'fixed',
      zIndex: '1',
      top: '0',
      right: '0',
      backgroundColor: 'black',
      overflowX: 'hidden',
      paddingTop: '20px',
    }}>
      <Header headers={headers} />
      <Actions buttonDefinitions={actions} />
    </div>
  )
}
