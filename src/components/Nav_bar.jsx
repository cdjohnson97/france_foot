
import { useState,  } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/J_O.png'
import franceLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { useEffect } from 'react'



const navigation = [
  { name: 'Acceuil', href: '/' },
  { name: 'News', href: '/articles' },
  { name: 'Effectif', href: '/effectif' },
]

export default function Nav_bar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const user = localStorage.getItem("nom");
  
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className=" flex py-1 items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          <motion.div
            animate={{ x: [5, 2, 2], opacity: 1, scale: 1 }}
        
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          
      >
        <Link to="/" className="-m-1.5 p-1.5 hoverBtn">
              <img
                className="h-12 w-auto"
                src={logoImg}
              />
              <img
                  className="h-8 w-auto mb-8 "
                  src={franceLogo}
                />
            </Link>

      </motion.div>
            
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900 group-hover:opacity-50">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {
              user ? <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
              {user} <span aria-hidden="true">&rarr;</span>
            </Link> : <Link to="/connexion"  className="text-sm font-semibold leading-6 text-gray-900">
              Se connecter <span aria-hidden="true">&rarr;</span>
            </Link>
            }
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <motion.div
        animate={{ x: [5, 2, 2], opacity: 1, scale: 1 }}
        
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.1 }}
        transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}   
      >
        <Link to="/" className="-m-1.5 p-1.5">
                <img
                  className="h-13 w-auto"
                  src={logoImg}
                  alt=""
                />
                <img
                  className="h-11 w-auto"
                  src={franceLogo}
                  alt=""
                />
              </Link>

            </motion.div>
              
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                {
                user ? <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                {user} <span aria-hidden="true">&rarr;</span>
                a</a> : <Link to="/connexion" className="text-sm font-semibold leading-6 text-gray-900">
                Se connecter <span aria-hidden="true">&rarr;</span>
                </Link>
               }
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>   
  )
}

