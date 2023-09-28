import { Fragment, useState } from 'react';
import logo from '../../assets/longlogo.png';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {  PlusCircleIcon, UserGroupIcon, UserMinusIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const grupo_action = [
  { name: "Grupos", href: '#', icon: UserGroupIcon },
  { name: "Criar Grupo", href: "#", icon: UserPlusIcon},
  { name: "Remover Grupo", href: "#", icon: UserMinusIcon}
]

const meta_action = [
  { name: "Metas", href: '#', icon: "fa-solid fa-bullseye" },
  { name: "Criar Meta", href: "#", icon: "fa-solid fa-square-plus" },
  { name: "Remover Meta", href: "#", icon: "fa-regular fa-square-minus" }
]



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-600	">
      <nav aria-label="Global" className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="w-auto h-8" src={logo} alt="" />
          </a>
        </div>

        <div className='lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => {
              setMobileMenuOpen(true)
              console.log(mobileMenuOpen)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
          </button>
        </div>

        <div>
          {meta_action.map((item) => (
            <FontAwesomeIcon icon={item.icon}>

          ))}
        </div>

      </nav>
    </header>
  )
}
