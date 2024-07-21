import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface NavbarProps {
  tailwindClasses?: string; // Define the type of tailwindClasses prop
}

const Navbar: React.FC<NavbarProps> = ({ tailwindClasses }) => {
  return (
    <div className={ `bg-black opacity-90 shadow-md h-20 w-full flex justify-between items-center px-8 ${tailwindClasses}` }>
      <div className='flex items-center'>
        <Link href="/">
            <div className='flex items-center px-1 w-10 md:w-8 lg:w-10 2xl:w-12'>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.303 25.565 159.393 148.871" viewBox="20.303 25.565 159.393 148.871" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage " style={{minHeight: '100%', minWidth: '100%'}}>
                    <defs>
                        <style>{ `svg [data-color="1"] { fill: #FFFFFF; }` }</style>
                    </defs>
                    <g>
                        <path d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z" fill="#FD6262" data-color="1"></path>
                        <path d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z" fill="#FD6262" data-color="1"></path>
                        <path d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z" fill="#FD6262" data-color="1"></path>
                    </g>
                </svg>
            </div>
        </Link>
        <div className='hidden text-xl font-bold px-1 md:block lg:text-2xl 2xl:text-3xl'>
            <Link className='text-white dark:text-white' href="/">PixelVision</Link>
        </div>
      </div>
      <div>
        <Button variant={"ghost"} > Tutorial </Button>
        <Button variant={"ghost"} > About Us </Button>
        <Button variant={"outline"} > Log In </Button>
        <Button variant={"outline"} > Sign Up </Button>
      </div>
    </div>
  );
}

export default Navbar;
