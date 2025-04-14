import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>

      <div className="bg-white ">
        <header className="absolute inset-x-0 top-0 z-50">

          <div className="lg:hidden" role="dialog" aria-modal="true">

            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>

                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Anuncios de nuestros profecionales. <a onClick={() => navigate('/buscar')} className=" cursor-pointer font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Ver todos <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Bolsa de Trabajo </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a onClick={() => navigate('/profiles')} className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ir a Perfiles</a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            {/* <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> */}
          </div>
        </div>
      </div>





      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">HOME</h1>
        <Link to="/about" className='text-yellow-300 hover:underline mb-2' >
          Go to /about
        </Link>

        <button
          onClick={() => navigate('/about')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /about
        </button>

        <button
          onClick={() => navigate('/Buscar')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Buscar
        </button>

        <button
          onClick={() => navigate('/media')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /media
        </button>

        <button
          onClick={() => navigate('/nested-route')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /nested-route (Dashboard)
        </button>

        <button
          onClick={() => navigate('/not-found')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /not-found
        </button>

        <button
          onClick={() => navigate('/not-found')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /not-found
        </button>
        <button
          onClick={() => navigate('/profiles')}
          className='px-4 py-2 bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 mb-2'
        >
          Navigate to /profiles
        </button>

      </div>
    </>

  )
}

export default Home