'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}

ClientOnly.propTypes = {
  children: PropTypes.node.isRequired,
};