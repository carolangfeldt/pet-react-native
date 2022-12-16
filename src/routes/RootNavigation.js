import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params = null) {
  navigationRef.current?.navigate(name, params);
}
