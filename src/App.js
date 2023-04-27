import React from 'react';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
    </div>
  )
}

export default App