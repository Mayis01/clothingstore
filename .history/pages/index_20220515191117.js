import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Layouts/Header/Header'
import HomeHeader from './Home/HomeHeader'
import HomeSection from './Home/HomeSection'
import newArrivals from "../Json/NewArrivals/newArrivals.json";
import NewCarouselItems from './Home/NewCarouselItems/NewCarouselItems'
import SubscribeSection from './Home/HomeSubscirbeSection/HomeSubscribeSection'
import Footer from '../Components/Layouts/Footer/Footer'

import SuccesMessage from '../Components/Messages/SuccesMessage'
import Button from '../Components/Icons/Button/Button'
import MenuModal from '../Components/Modal/MenuModal'

// import WarningMessage from '../Components/Messages/WarningMessage'
// import ErrorMessage from '../Components/Messages/ErrorMessage'


export default function Home() {
  return (
    <>
      {/* <WarningMessage />
      <ErrorMessage/> */}
      <Header />
      <MobileUserLikedIcons/>
      <HomeHeader />
      <HomeSection />
      <NewCarouselItems Data={newArrivals} description={"new arrivals"} />
      <NewCarouselItems Data={newArrivals} description={"Trending"} />
      <SubscribeSection />
      <Footer />
    </>
  )
}
