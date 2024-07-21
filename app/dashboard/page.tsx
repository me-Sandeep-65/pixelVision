import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

function Dashboard() {
  const heroStyle: React.CSSProperties = {
    backgroundImage: 'url("/hero-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '98.6vw',
    height: '180vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };
  const portfolioStyle: React.CSSProperties = {
    // backgroundColor: '#000',
    backgroundSize: 'cover',
    width: '98.6vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  return (<>
  {/* Hero Section */}
    <div style={heroStyle}>
      <div className='flex-1 h-1/2 mx-8 flex flex-col items-start justify-center'>
        <div className='my-3 max-w-4xl'> {/* Adjust max-width as needed */}
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', lineHeight: '1.2em', letterSpacing: 'normal', marginBottom: '20px' }}>
            <span style={{fontWeight: 'bold', fontSize: '80px' }}>The New Standard</span><br />
            in Image Generation
          </h1>
        </div>
          <div className='w-[32rem] my-3'>
              <p style={{fontSize:'30px'}}>Use Data to Get a 360-Degree View of Your Business</p>
          </div>
          <Button className='w-32 h-14 mt-16 bg-zinc-600' asChild variant={'outline'}><Link href={'/about'}>Learn More</Link></Button>
      </div>
    </div>
    {/* Portfolio Section */}
    <div className='bg-zinc-900' style={portfolioStyle}>
      <div className='flex flex-1 h-full bg-inherit mx-8 items-start justify-center -translate-y-40'>
        <div className='w-2/5 h-full border border-white flex flex-col items-center justify-center'style={{backgroundImage: 'url("/card-bg.jpg")', backgroundSize: 'cover' }}> {/* Adjust max-width as needed */}
          <h2 style={{ lineHeight: '1.4em', fontSize: '30px', marginInline: '70px' }}>Let Your Data Take Your Business to Higher Grounds</h2>
          <br />
          <p style={{ lineHeight: '1.8em', fontSize: '16px', marginInline: '70px' }}><span>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.&nbsp;</span></p>
        </div>
        <div className='w-3/5 h-full border border-white flex flex-row'>
          <div className='h-full flex flex-1 flex-col items-end ml-10 -translate-y-40'>
            <Card className='m-3 w-56 bg-black border-black shadow-lg shadow-black'>
              <CardHeader>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.868 38.586 160.264 121.194" viewBox="19.868 38.586 160.264 121.194" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                  <defs>
                    <style>{ `svg [data-color="1"] { fill: #FD6262; }` }</style>
                  </defs>
                  <g>
                    <path d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z" fill="#FD6262" data-color="1"></path>
                  </g>
                </svg>
              </CardHeader>
              <br />
              <CardContent>
                <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                  <h3 style={{ fontSize: '18px' }}>
                    <span style={{ fontFamily: 'poppins-semibold, poppins, sans-serif' }}>
                      <span style={{ fontSize: '18px' }}>Cloud Analytics Modernization</span>
                    </span>
                  </h3>
                </div>
                <br />
                <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                  <p style={{ lineHeight: '1.6em', fontSize: '14px' }}>
                    <span style={{ fontFamily: 'open sans,sans-serif'}} >Click here to add your own text and edit me. Let your users get to know you.</span>
                  </p>
                </div>
              </CardContent>
              <br />
              <CardFooter>
              <div className='w-full' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <div className="rounded-lg w-full h-1 bg-gray-700"></div>
              </div>
              </CardFooter>
            </Card>
            <Card className='m-3 w-56 bg-black border-black shadow-lg shadow-black'>
              <CardHeader>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.532 45.947 158.928 108.107" viewBox="20.532 45.947 158.928 108.107" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                  <defs>
                    <style>{ `svg [data-color="1"] {fill: #FD6262;}` }</style>
                  </defs>
                  <g>
                      <path d="M82.935 75.852l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759l33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" fill="#FD6262" data-color="1"></path>
                      <path d="M172.608 95.616l-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                      <path d="M172.608 124.149l-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#FD6262" data-color="1"></path>
                      <path d="M65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                      <path d="M65.095 76.446H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                      <path d="M65.095 113.897H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" fill="#FD6262" data-color="1"></path>
                  </g>
                </svg>
              </CardHeader>
              <br />
              <CardContent>
                <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                  <h3 style={{ fontSize: '18px' }}>
                    <span style={{ fontFamily: 'poppins-semibold, poppins, sans-serif' }}>
                      <span style={{ fontSize: '18px' }}>Cloud Analytics Modernization</span>
                    </span>
                  </h3>
                </div>
                <br />
                <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                  <p style={{ lineHeight: '1.6em', fontSize: '14px' }}>
                    <span style={{ fontFamily: 'open sans,sans-serif'}} >Click here to add your own text and edit me. Let your users get to know you.</span>
                  </p>
                </div>
              </CardContent>
              <br />
              <CardFooter>
                <div className='w-full' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                  <div className="rounded-lg w-full h-1 bg-gray-700"></div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className='h-full flex flex-1 flex-col mr-16 translate-y-20'>
            <Card className='m-3 w-56 bg-black border-black shadow-lg shadow-black'>
            <CardHeader>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.42 48.257 159.16 103.485" viewBox="20.42 48.257 159.16 103.485" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
              <defs>
                <style>{ `svg [data-color="1"] {fill: #FD6262;}` }</style>
              </defs>
              <g>
                  <path d="M177.118 96.151L142.48 80.165a4.235 4.235 0 0 0-3.555 0l-34.637 15.986a4.252 4.252 0 0 0-2.464 3.849c0 1.648.967 3.159 2.463 3.85l34.638 15.986c.553.255 1.167.39 1.777.39.619 0 1.217-.131 1.778-.39l34.638-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.967-3.159-2.462-3.849zM165.223 100l-24.521 11.316L116.181 100l24.52-11.316L165.223 100z" fill="#FD6262" data-color="1"></path>
                  <path d="M98.177 100a4.251 4.251 0 0 0-2.463-3.849L61.076 80.165a4.236 4.236 0 0 0-3.554 0L22.883 96.151c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391c.619 0 1.216-.131 1.777-.39l34.638-15.986a4.253 4.253 0 0 0 2.464-3.85zm-14.358 0l-24.521 11.316L34.778 100l24.52-11.316L83.819 100z" fill="#FD6262" data-color="1"></path>
                  <path d="M63.585 72.333l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986a4.253 4.253 0 0 0 2.462-3.85 4.252 4.252 0 0 0-2.462-3.849l-34.639-15.986a4.236 4.236 0 0 0-3.554 0L63.585 64.634a4.253 4.253 0 0 0-2.463 3.849c0 1.648.966 3.159 2.463 3.85zm11.895-3.85L100 57.167l24.52 11.316L100 79.8 75.48 68.483z" fill="#FD6262" data-color="1"></path>
                  <path d="M136.417 127.667l-34.639-15.986a4.236 4.236 0 0 0-3.554 0l-34.639 15.986c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.966-3.158-2.461-3.849zm-11.897 3.85L100 142.833l-24.52-11.316L100 120.2l24.52 11.317z" fill="#FD6262" data-color="1"></path>
              </g>
            </svg>
            </CardHeader>
            <br />
            <CardContent>
              <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <h3 style={{ fontSize: '18px' }}>
                  <span style={{ fontFamily: 'poppins-semibold, poppins, sans-serif' }}>
                    <span style={{ fontSize: '18px' }}>Cloud Analytics Modernization</span>
                  </span>
                </h3>
              </div>
              <br />
              <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <p style={{ lineHeight: '1.6em', fontSize: '14px' }}>
                  <span style={{ fontFamily: 'open sans,sans-serif'}} >Click here to add your own text and edit me. Let your users get to know you.</span>
                </p>
              </div>
            </CardContent>
            <br />
            <CardFooter>
              <div className='w-full' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <div className="rounded-lg w-full h-1 bg-gray-700"></div>
              </div>
            </CardFooter>
            </Card>
            <Card className='m-3 w-56 bg-black border-black shadow-lg shadow-black'>
            <CardHeader>
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.124 26.752 159.752 146.495" viewBox="20.124 26.752 159.752 146.495" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
              <defs>
                <style>{ `svg [data-color="1"] {fill: #FD6262;}` }</style>
              </defs>
              <g>
                  <path d="M117.275 125.299c8.267-5.705 13.161-14.963 13.161-25.039 0-16.782-13.653-30.435-30.435-30.435S69.566 83.478 69.566 100.26c0 10.076 4.892 19.333 13.159 25.039-17.083 6.994-28.462 23.834-28.462 42.343v5.605h91.474v-5.605c0-18.509-11.38-35.349-28.462-42.343zm-17.274-5.814c-10.6 0-19.225-8.624-19.225-19.225 0-10.6 8.625-19.224 19.225-19.224s19.225 8.624 19.225 19.224c0 10.601-8.625 19.225-19.225 19.225zm-34.074 42.552c2.713-16.546 17.215-28.921 34.074-28.921 16.857 0 31.36 12.375 34.072 28.921H65.927z" fill="#FD6262" data-color="1"></path>
                  <path d="M100.001 62.03c9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639-9.727 0-17.64 7.913-17.64 17.639 0 9.726 7.912 17.639 17.64 17.639zm-6.429-17.639a6.435 6.435 0 0 1 6.429-6.428 6.435 6.435 0 0 1 6.428 6.428 6.435 6.435 0 0 1-6.428 6.429 6.437 6.437 0 0 1-6.429-6.429z" fill="#FD6262" data-color="1"></path>
                  <path d="M37.764 101.971c-9.727 0-17.64 7.913-17.64 17.639 0 9.727 7.913 17.639 17.64 17.639 9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639zm6.428 17.639c0 3.545-2.883 6.429-6.428 6.429s-6.429-2.884-6.429-6.429c0-3.545 2.884-6.429 6.429-6.429s6.428 2.884 6.428 6.429z" fill="#FD6262" data-color="1"></path>
                  <path d="M162.236 101.971c-9.726 0-17.639 7.913-17.639 17.639 0 9.727 7.913 17.639 17.639 17.639 9.727 0 17.64-7.913 17.64-17.639 0-9.726-7.913-17.639-17.64-17.639zm6.429 17.639a6.436 6.436 0 0 1-6.429 6.429 6.435 6.435 0 0 1-6.428-6.429 6.435 6.435 0 0 1 6.428-6.429 6.437 6.437 0 0 1 6.429 6.429z" fill="#FD6262" data-color="1"></path>
              </g>
            </svg>
            </CardHeader>
            <br />
            <CardContent>
              <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <h3 style={{ fontSize: '18px' }}>
                  <span style={{ fontFamily: 'poppins-semibold, poppins, sans-serif' }}>
                    <span style={{ fontSize: '18px' }}>Cloud Analytics Modernization</span>
                  </span>
                </h3>
              </div>
              <br />
              <div style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <p style={{ lineHeight: '1.6em', fontSize: '14px' }}>
                  <span style={{ fontFamily: 'open sans,sans-serif'}} >Click here to add your own text and edit me. Let your users get to know you.</span>
                </p>
              </div>              
            </CardContent>
            <br />
            <CardFooter>
              <div className='w-full' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
                <div className="rounded-lg w-full h-1 bg-gray-700"></div>
              </div>
            </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
    {/* About Section */}
    <div className='flex items-end flex-row mx-8'>
      <div className='h-screen mt-32 flex flex-1 items-center justify-center border border-white' style={{ backgroundImage: 'url("/about-bg.jpg")', backgroundSize: 'cover', backgroundPositionY: '-100px' }}>
        <h2 style={{ lineHeight: '1.4em', textAlign: 'center', fontSize: '30px', width: '360px' }}>Unprecedented Velocity. Impeccable Reliability.</h2>
      </div>
      <div className='h-screen mt-32 flex flex-1 items-center justify-center border border-white'>
        <div className='w-[420px]'>
          <p style={{ lineHeight: '1.8em', fontSize: '16px', padding: '16px' }}><span>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</span></p>
          <p style={{ lineHeight: '1.8em', fontSize: '16px', padding: '16px' }}><span>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</span></p>
          <Button className='w-32 h-14 mt-4 mx-4 bg-zinc-600' asChild variant={'outline'}><Link href={'/about'}>Learn More</Link></Button>
        </div>
      </div>
    </div>
    {/* Stat Section */}
    <div className='h-[130vh]' style={{ backgroundImage: 'url("/stat-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='mx-8 py-4 h-1/5 flex flex-1 items-end justify-center'>
        <h2 style={{ textAlign:'center', fontSize:'30px' }}>We Take Pride in Our Numbers</h2>      
      </div>
      <div className='mx-8 h-1/5 flex items-end justify-evenly'>
        <Card className='m-3 w-56 bg-transparent border-0 shadow-none text-red-500'>
          <CardContent className='px-2'>
          <div style={{ textAlign: 'center', fontSize: '60px' }}><span>15</span></div>
            <p style={{ textAlign: 'center', fontSize: '14px' }}><span>Years of Experience</span></p>
            <div className='w-full py-2' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
              <div className="rounded-lg w-full h-1 bg-gray-700"></div>
            </div>
          </CardContent>
        </Card>
        <Card className='m-3 w-56 bg-transparent border-0 shadow-none text-red-500'>
          <CardContent className='px-2'>
          <div style={{ textAlign: 'center', fontSize: '60px' }}><span>10K</span></div>
            <p style={{ textAlign: 'center', fontSize: '14px' }}><span>Business Partners</span></p>
            <div className='w-full py-2' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
              <div className="rounded-lg w-full h-1 bg-gray-700"></div>
            </div>
          </CardContent>
        </Card>
        <Card className='m-3 w-56 bg-transparent border-0 shadow-none text-red-500'>
          <CardContent className='px-2'>
          <div style={{ textAlign: 'center', fontSize: '60px' }}><span>25M</span></div>
            <p style={{ textAlign: 'center', fontSize: '14px' }}><span>Active Users</span></p>
            <div className='w-full py-2' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
              <div className="rounded-lg w-full h-1 bg-gray-700"></div>
            </div>
          </CardContent>
        </Card>
        <Card className='m-3 w-56 bg-transparent border-0 shadow-none text-red-500'>
          <CardContent className='px-2'>
          <div style={{ textAlign: 'center', fontSize: '60px' }}><span>22</span></div>
            <p style={{ textAlign: 'center', fontSize: '14px' }}><span>Countries World Wide</span></p>
            <div className='w-full py-2' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
              <div className="rounded-lg w-full h-1 bg-gray-700"></div>
            </div>
          </CardContent>
        </Card>
        <Card className='m-3 w-56 bg-transparent border-0 shadow-none text-red-500'>
          <CardContent>
          <div style={{ textAlign: 'center', fontSize: '60px' }}><span>5</span></div>
            <p style={{ textAlign: 'center', fontSize: '14px' }}><span>Industry Award</span></p>
            <div className='w-full py-2' style={{ '--motion-clip-path': 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', '--motion-translate-x': '-100%', '--motion-translate-y': '0%' }}>
              <div className="rounded-lg w-full h-1 bg-gray-700"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    {/* Last Section */}
    <div className='h-[130vh]'>
      <div className='mx-8 h-[30vh] flex'>
        <div className='flex flex-1 items-center p-8 border'>
        <h2 style={{ lineHeight: '1.2em', fontSize: '30px' }}><span className='font-semibold'>Our Partners</span></h2>
        </div>
        <div className='flex flex-1 items-center p-8 border'>
        <img src="/partner1.img" alt="logo" />
        </div>
        <div className='flex flex-1 items-center p-8 border'>
        <img src="/partner2.img" alt="logo" />
        </div>
        <div className='flex flex-1 items-center p-8 border'>
        <img src="/partner3.img" alt="logo" />
        </div>
        <div className='flex flex-1 items-center p-8 border'>
        <img src="/partner4.img" alt="logo" />
        </div>
      </div>
      <div className='mx-8 h-screen flex flex-1 items-end justify-center'>
        <div className='h-screen w-3/5 flex flex-1 items-center justify-center border border-white'
         style={{ backgroundImage: 'url("/last-bg.jpg")', backgroundSize: 'cover', backgroundPositionY: '-100px' }}
         >
          <h2 style={{ lineHeight: '1.4em', textAlign: 'center', fontSize: '30px', width: '360px' }}>Unprecedented Velocity. Impeccable Reliability.</h2>
        </div>
        <div className='h-screen w-2/5 flex items-center justify-center border border-white'>
          <div className='w-[300px]'>
            <p style={{ lineHeight: '1.8em', fontSize: '16px' }}><span>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</span></p>
            <Button className='w-32 h-14 mt-16 bg-zinc-600' asChild variant={'outline'}><Link href={'/about'}>Learn More</Link></Button>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Section */}
    <div className='h-[60vh] flex flex-wrap justify-evenly px-4'>
      <div className='flex flex-col items-start justify-evenly px-8 py-14  mt-12'>
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
        <br />
          <p style={{ fontSize: '18px', lineHeight: '2em' }}><span style={{ fontFamily:'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}>123-456-7890</span></span></p>
          <p style={{ fontSize: '18px', lineHeight: '2em' }}><span style={{ fontFamily:'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}><a data-auto-recognition="true" href="mailto:Info@mysite.com">Info@mysite.com</a></span></span></p>

          <p style={{ fontSize: '18px', lineHeight: '2em' }}><span style={{ fontFamily:'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}>500 Terry Francine St&nbsp;</span></span></p>

          <p style={{ lineHeight: '2em', fontSize: '18px' }}><span>San Francisco, CA 94158</span></p>
      </div>
      <div className='flex flex-col items-start justify-evenly px-8 py-14  mt-12'>
        <p style={{ fontSize: '18px', lineHeight: '3em' }}><span style={{ letterSpacing: 'normal'}}></span><span style={{ letterSpacing:'normal' }}><a href="/" target="_self"><span style={{ fontFamily: 'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}>Solutions</span></span></a></span></p>
        <p style={{ fontSize: '18px', lineHeight: '3em' }}><span style={{ letterSpacing: 'normal'}}><a href="/" target="_self"><span style={{ fontFamily: 'open sans,sans-serif' }}><span style={{ fontSize: '18px'}}>Vision</span></span></a></span></p>
        <p style={{ fontSize: '18px', lineHeight: '3em' }}><span style={{ letterSpacing: 'normal'}}><span ><span style={{ fontFamily: 'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}><a href="/" target="_self">Programs</a></span></span></span></span></p>
        <p style={{ fontSize: '18px', lineHeight: '3em' }}><span style={{ letterSpacing: 'normal'}}><a href="/" target="_self"><span style={{ fontFamily: 'open sans,sans-serif' }}><span style={{ fontSize: '18px'}}>Blog</span></span></a></span></p>
        <br />
        <Button className='w-32 h-14 mx-0 bg-zinc-600' asChild variant={'outline'}><Link href={'/about'}>Learn More</Link></Button>
      </div>
      <div className='px-8 py-16  mt-12'>
        <p style={{ fontSize: '18px', lineHeight: '2em' }}><span style={{ fontFamily:'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}>Subsctibe to our newsletter</span></span></p>
        <div className='h-1/2 flex flex-col justify-evenly'>
          <Input type='email' placeholder='Email' />
          <Button className='bg-zinc-600 w-min' variant={"outline"} > Submit </Button>
        </div>
      </div>
      <div className='flex flex-col items-start justitify-start px-8 py-16  mt-12'>
        <p style={{ fontSize: '18px', lineHeight: '2em' }}><span style={{ fontFamily:'open sans,sans-serif' }}><span style={{ fontSize: '18px' }}>Follow us on:</span></span></p>
        <div className='w-full flex justify-between'>
        <Link href="/">
              <div className='flex items-center px-1 w-10 md:w-8 lg:w-10 2xl:w-12'>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.303 25.565 159.393 148.871" viewBox="20.303 25.565 159.393 148.871" height="20%" width="20%" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage " style={{minHeight: '100%', minWidth: '100%'}}>
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
        <Link href="/">
              <div className='flex items-center px-1 w-10 md:w-8 lg:w-10 2xl:w-12'>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.303 25.565 159.393 148.871" viewBox="20.303 25.565 159.393 148.871" height="20%" width="20%" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage " style={{minHeight: '100%', minWidth: '100%'}}>
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
        <Link href="/">
              <div className='flex items-center px-1 w-10 md:w-8 lg:w-10 2xl:w-12'>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.303 25.565 159.393 148.871" viewBox="20.303 25.565 159.393 148.871" height="20%" width="20%" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage " style={{minHeight: '100%', minWidth: '100%'}}>
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
        </div>
      </div>
    </div>
  </>);
}

export default Dashboard;
