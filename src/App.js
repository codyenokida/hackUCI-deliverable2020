import React from 'react';

import { Flex } from "rebass"
import Form from './Components/Form/Form'
import Petr from './Components/Petr/Petr'

function App() {
  return (
    <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyItems="center"
        textAlign="center"
        minHeight="100vh">

        <Form />
        <Petr />

    </Flex>
  );
}

export default App;
