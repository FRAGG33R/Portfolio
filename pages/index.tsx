import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import LandingPage from '../components/landingPage'
import dynamic from 'next/dynamic'
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false
  });  
export default function Home(){
  return (
	<div className='h-screen w-screen'>
		<NavBar />
		<AnimatedCursor color="0, 204, 194"/>
		<LandingPage />
	</div>
  )
}
