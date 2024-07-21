import React from 'react'
import Navbar from '../_components/Navbar';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (<>
    <Navbar tailwindClasses='static rounded-lg bg-zinc-900' />
    { children }
  </>)
}

export default layout