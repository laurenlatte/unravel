import {useState} from 'react';
import Header from './Header.js';
import Actions from './Actions.js';
import * as TextStyles from './TextStyles.js';

export default function Scene({game, descriptor, headers, actions, addHeader, setScene}) {



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
      <TextStyles.DescriptorText>{descriptor}</TextStyles.DescriptorText>
      <Header headers={headers} />
      <Actions setScene={setScene} buttonDefinitions={actions} game={game} addHeader={addHeader} />
    </div>
  )
}
