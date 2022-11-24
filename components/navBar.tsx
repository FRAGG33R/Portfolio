import Logo from '../assets/Logo.jpg'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
export default function NavBar() {
	const navigation = [
		{ name: 'Home', href: '#', current: true },
		{ name: 'About', href: '#', current: false },
		{ name: 'Resume', href: '#', current: false },
		{ name: 'Services', href: '#', current: false },
		{ name: 'Skills', href: '#', current: false },
		{ name: 'Projects', href: '#', current: false },
		{ name: 'Contact', href: '#', current: false },
	  ]
	  function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }
  return (
	<Disclosure as="nav" className="bg-transparent-800">
	{({ open }) => (
	  <>
		<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		  <div className="relative flex h-20 items-center justify-between">
			<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
			  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
				<span className="sr-only">Open main menu</span>
				{open ? (
				  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
				) : (
				  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
				)}
			  </Disclosure.Button>
			</div>
			<div className="flex flex-1 justify-center sm:items-stretch ">
			  <div className="flex flex-shrink-0 items-center">
				<Image
					src={Logo}
					alt="Company logo"
					className="block h-50 w-20 lg:hidden"
					height={0}
					width={0}
				/>
				<Image
					src={Logo}
					alt="Company logo"
					className="hidden h-50 w-20 lg:block"
					height={0}
					width={0}
				/>
			  </div>
			  <div className="hidden sm:ml-12 sm:block">
				<div className="flex space-x-8">
				  {navigation.map((item) => (
						<a href={item.href} className={classNames(
							'text-white',
							'px-3 py-2 rounded-md text-lg font-normal',
							'relative group'
						  )}>
							<span>{item.name}</span>
							<span className="absolute -bottom-1 left-0 w-0 h-1 bg-fav-color transition-all group-hover:w-full"></span>
						</a>
					))
				  }
				</div>
			  </div>
			</div>
		
		  </div>
		</div>
		<Disclosure.Panel className="sm:hidden">
		  <div className="space-y-1 px-2 pt-2 pb-3">
			{navigation.map((item) => (
			  <Disclosure.Button
				key={item.name}
				as="a"
				href={item.href}
				className={classNames(
				  'text-gray-300 hover:bg-fav-color hover:text-white',
				  'block px-3 py-2 rounded-md text-base font-medium'
				)}
				aria-current={item.current ? 'page' : undefined}
			  >
				{item.name}
			  </Disclosure.Button>
			))}
		  </div>
		</Disclosure.Panel>
	  </>
	)}
  </Disclosure>
  );
}
