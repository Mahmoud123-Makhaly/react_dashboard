import 'server-only';

import { ReactNode } from 'react';
import '@assets/scss/themes.scss';
import './global.css';
type Props = {
  children: ReactNode;
};

// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.3.0 where link clicks that switch
// the locale would otherwise be ignored.
export default function RootLayout({ children }: Props) {
  return children;
}
