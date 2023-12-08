import React from 'react';
import type {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name={'circle-thin'} size={38} color={'#26ae60'} />;
    case 'cross':
      return <Icon name={'times'} size={38} color={'#E8290B'} />;

    default:
      return <Icon name={'pencil'} size={38} color={'#DAE0E2'} />;
  }
};

export default Icons;
