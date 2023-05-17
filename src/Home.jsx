import { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Sidebar from './Sidebar'
import Mustwatch from './Mustwatch'
import Recommended from './Recommended'
import Classic from './Classic'
import Footer from './Footer'



function Home() {
  return (
    <><Header />
    <Banner />
    <Sidebar />
    <Mustwatch />
    <Recommended />
    <Classic />
    <Footer />
    <h1></h1>
    </>
  )
}

export default Home
