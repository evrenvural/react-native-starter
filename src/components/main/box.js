import { View } from 'react-native';
import styled from 'styled-components';
import { color, size, flexbox } from 'styled-system';

const Box = styled(View)(color, size, flexbox);

Box.defaultProps = {
  flex: 1,
  flexDirection: 'row'
};

export default Box;
