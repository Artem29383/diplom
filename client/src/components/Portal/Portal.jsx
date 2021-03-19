import React, { memo } from 'react';
import { createPortal } from 'react-dom';

import usePortal from './../../hooks/usePortal';

const PortalWrapper = props => {

  return <Portal {...props} />;
};

const Portal = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default memo(PortalWrapper);
