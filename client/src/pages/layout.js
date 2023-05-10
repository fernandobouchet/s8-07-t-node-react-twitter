import { BookmarkIcon, CreateTweetIcon, ExploreIcon, HomeIcon, ListIcon, MenuIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon, SearchIcon, TwitterIcon } from '@/components/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header () {

  const {pathname} = useRouter()

  return (
    <header className='flex flex-col gap-5 md:overflow-y-scroll noscrollbar min-w-max md:px-2 items-center h-full w-full md:w-fit xl:w-full md:max-w-xs md:border-r border-r-black/5 dark:border-r-white/20'>
      
      <div className='md:hidden flex items-center justify-between px-4 py-3 w-full border-b border-b-black/10 dark:border-b-white/20'>
        <Link
          href="/"
        >
          <TwitterIcon size={24} />
        </Link>
        
        <div className='group flex items-center gap-1 px-2 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-2xl overflow-hidden w-full max-w-[60%] transition duration-200 focus-within:border-indigo-500  dark:focus-within:border-indigo-500'>
          <button>
            <SearchIcon size={20} />
          </button>
          <input type='text' className='w-full text-sm py-1.5 outline-none bg-transparent' placeholder='Buscar en Twitter'>
          </input>
        </div>

        <button>
          <MenuIcon size={24} />
        </button>

      </div>

      <div className='hidden w-full md:flex flex-col py-1 gap-1.5 lg:w-[80%]'>
        <Link
          className='p-3 transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 w-fit rounded-full'
          href="/"
        >
          <TwitterIcon size={28} />
        </Link>

        <Link 
          href="/" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
        >
          <HomeIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Inicio</p>
        </Link>
        
        <Link 
          href="/explore" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/explore"? "font-bold" : "")}
        >
          <ExploreIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Explorar</p>
        </Link>
        
        <Link 
          href="/notifications" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/notifications"? "font-bold" : "")}
        >
          <NotificationIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Notificaciones</p>
        </Link>
        
        <Link 
          href="/messages" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/messages"? "font-bold" : "")}
        >
          <MessagesIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Mensajes</p>
        </Link>
        
        <Link 
          href="/lists" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/lists"? "font-bold" : "")}
        >
          <ListIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Listas</p>
        </Link>
        
        <Link 
          href="/bookmarks" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/bookmarks"? "font-bold" : "")}
        >
          <BookmarkIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Guardados</p>
        </Link>
        
        <Link 
          href="/profile" 
          className={'flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/profile"? "font-bold" : "")}
        >
          <ProfileIcon size={28} /> <p className='max-xl:hidden dark:text-white'>Perfil</p>
        </Link>
        
        <Link 
          href="/" 
          className='flex items-center gap-4 p-3 text-xl rounded-3xl w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10'
        >
          <MoreIcon size={28} /><p className='max-xl:hidden dark:text-white'>Más opciones</p>
        </Link>

        <button className='bg-[#7855FF] p-3.5 w-fit xl:w-full rounded-full mt-5'>
          <div className='xl:hidden'>
            <CreateTweetIcon size={24} />
          </div>
          <p className='text-white text-lg font-semibold max-xl:hidden'>Twittear</p>
        </button>

      </div>

      <div className='max-md:hidden mt-auto max-xl:w-fit cursor-pointer lg:px-3 py-2 mb-4 flex gap-4 justify-between lg:w-[90%] mx-auto rounded-full transition duration-300 hover:bg-black/10 hover:dark:bg-white/10'>
        <div className='flex gap-3'>
          <Image
            className='rounded-full w-10 h-10 object-cover m-auto'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXu4-Scl4Wm6xzN9sYMslJ5ru9EY5gpfvHw&usqp=CAU"
            width={50}
            height={50}
            alt="Foto Perfil"
            unoptimized
            priority
          />
          <div className='text-base max-xl:hidden'>
            <p className='font-semibold dark:text-white'>Usuario</p>
            <p className='text-slate-500 -mt-0.5'>@Usuario</p>
          </div>
        </div>
        <button className='max-xl:hidden'>
          <MenuIcon size={16} />
        </button>
      </div>
    </header>
  )
}

function Footer () {

  const {pathname} = useRouter()

  return (
    <>
    
    <nav className='md:hidden flex items-center justify-around bottom-0 absolute inset-x-0 p-2 bg-white dark:bg-black border-t border-t-black/10 dark:border-t-white/20'>
      <Link 
        href="/" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <HomeIcon size={28} />
      </Link>

      <Link 
        href="/" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <SearchIcon size={28} />
      </Link>

      <Link 
        href="/" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <NotificationIcon size={28} />
      </Link>

      <Link 
        href="/" 
        className={'flex items-center gap-4 p-2 text-xl rounded-full w-fit transition duration-300 hover:bg-black/10 hover:dark:bg-white/10 '+(pathname === "/"? "font-bold" : "")}
      >
        <MessagesIcon size={28} />
      </Link>
    </nav>

    <footer className='md:h-full w-full pl-[2.5%] noscrollbar overflow-y-scroll md:max-w-xs max-lg:hidden lg:border-l border-l-black/5 dark:border-l-white/20'>
      <div className='sticky top-0 bg-white dark:bg-black py-1'>
        <div className='group flex items-center gap-3 px-3 border bg-slate-100/20 dark:bg-slate-500/20 border-black/20 dark:border-white/20 rounded-3xl overflow-hidden w-full transition duration-200 focus-within:border-indigo-500 dark:focus-within:border-indigo-500'>
          <button>
            <SearchIcon size={24} />
          </button>
          <input type='text' className='w-full py-2.5 outline-none bg-transparent' placeholder='Buscar en Twitter'>
          </input>
        </div>
      </div>

    </footer>
    </>
  )
}

export default function Layout ({ children }) {
  return (
    <div className='md:flex md:flex-row lg:max-w-[90%] mx-auto'>
      <Header />
      <main className='md:h-full w-full'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
