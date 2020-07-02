import styled from 'styled-components';

import Box from './box';

const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center'
};

export default BoxCenter;
