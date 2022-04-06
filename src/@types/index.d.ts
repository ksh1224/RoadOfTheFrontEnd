import {ReactNode} from 'react';

declare global {
  interface IReactProps {
    children: ReactNode;
  }
}
