import React, { ComponentType, FC } from 'react';
import Page from '@/app/page';

const WithPage = <P extends object>(Component: ComponentType<P>): FC<P> => {
  return function WrappedComponent(props: P) {
    return (
      <Page>
        <Component {...props} />
      </Page>
    );
  };
}

export default WithPage;