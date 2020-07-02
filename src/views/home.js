import React from 'react';
import { Text } from 'react-native';

import { Box, BoxCenter } from '../components/main';
import * as Icon from '../assets/svg-components';

function Home() {
  return (
    <>
      <BoxCenter bg="black">
        <Box color="red">
          <Text>Hello Evo!</Text>
        </Box>
        <Box bg="red" size={20} mt={30} />
        <Icon.AlignRight color="red" />
      </BoxCenter>
      <Box flex={2}>
        <Text>Evo</Text>
      </Box>
    </>
  );
}

export default Home;
