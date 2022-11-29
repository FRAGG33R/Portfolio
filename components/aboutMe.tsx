import Spline from '@splinetool/react-spline';

export default function AboutMe(){
	return (
		<div className="flex lg:flex-row xs:flex-col-reverse lg:justify-center items-center h-4/5 w-screen 2xl:bg-red-500">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex flex-col items-center justify-center lg:text-5xl xs:text-3xl text-white font-Bai ">
				<Spline scene="https://prod.spline.design/vG42Fqg6duViAFup/scene.splinecode" />
			</div>
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-full flex items-center justify-center space-y-14 text-left flex-col pb-6 text-white">
				<div className='text-4xl'>About Me</div>
				<div>small desciption Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit iusto rem nam cum quam facere dignissimos corporis, adsfsdf</div>
				<div><span>Name: </span> Aissam barchil</div>
				<div><span>Date of birth: </span> September 17, 2002</div>
				<div><span>Email: </span>aissambarchil70@gmail.com</div>
				<div><span>Phone: </span>+212625386430</div>
			</div>
		</div>
	)
}