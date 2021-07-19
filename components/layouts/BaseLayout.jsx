// @ts-check

import React from 'react';

// import Head from 'next/head';
// import Image from 'next/image';

const BaseLayout = (props) => {
  const { children } = props;

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;