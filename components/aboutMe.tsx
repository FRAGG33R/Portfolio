import Spline from '@splinetool/react-spline';

export default function AboutMe(){
	return (
		<div className="flex lg:flex-row xs:flex-col lg:justify-center items-center h-4/5 xs:h-full w-screen">
			<div className="xs:w-full lg:w-1/2 xl:w-2/6 h-1/2 flex flex-col items-center justify-center bg-red-700">
				<Spline scene="https://prod.spline.design/vG42Fqg6duViAFup/scene.splinecode" />
				Hello world
			</div>

			<div className="flex items-center xs:w-full lg:w-1/2 xl:w-2/6 h-1/2 text-left text-white bg-green-300">
				<div className='flex flex-col items-center h-1/2 space-y-8 '>
					<div className='lg:text-4xl xs:text-2xl flex items-center'>About Me</div>
					<div className=' lg:w-9/12 xs:w-1/2'><p className='lg:text-lg xs:text-md text-light'>small desciption Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit iusto rem nam cum quam facere dignissimos corporis, adsfsdf</p></div>
					<div className="flex flex-col space-y-12 lg:text-2xl items-center">
						<div className='flex flex-row space-x-20 self-start'><b>Name:</b> <p>Aissam barchil</p></div>
						<div className='flex flex-row space-x-3'><b>Date of birth: </b> <p>Septembrt 17, 2002</p></div>
						<div className='flex flex-row space-x'><b>Email:</b><p>aissambarchil70@gmail.com</p></div>
						<div className='flex flex-row space-x-20 self-start'><b>Phone: </b><p>+212625386430</p></div>
					</div>
				</div>
			</div>
		</div>
	)
}