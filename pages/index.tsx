import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
export default function Home(){
  return (
	//include my component
	<div>
		<NavBar />
	</div>
  )
}
