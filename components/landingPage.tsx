import Image from "next/image"
import Me from '../assets/Me.jpg'
export default function LandingPage(){
	return (
		<div className="flex flex-row-reverse h-full w-screen">
			<div className="w-">
				<Image src={Me} width={800} height={800}/>
			</div>
			<div className="flex justify-center items-center h-auto w-1/2">
				<h1 className="text-white">Hi, I'm Aissam a web3 developer</h1>
			</div>
		</div>
	);
}