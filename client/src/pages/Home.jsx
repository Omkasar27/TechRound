import React from 'react'
import HeroBanner from '../components/HeroBanner'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

function Home() {
  return (
    <div>
      <HeroBanner/>
      <LatestCollections />
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home