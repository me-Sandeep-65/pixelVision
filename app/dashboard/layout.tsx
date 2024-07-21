import React from 'react'
import Navbar from '../_components/Navbar';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (<>
    <div className='bg-zinc-900'>
      <Navbar />
    </div>
    <div className='bg-zinc-900'>
      { children }
    </div>
  </>)
}

export default layout