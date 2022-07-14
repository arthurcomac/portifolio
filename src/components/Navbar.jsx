export function Navbar () {
  return <>
    <div className="w-screen bg-gradient-to-tr from-indigo-900 via-purple-500 to-orange-400">
      <nav className="flex flex-col sm:flex-row items-center text-slate-400 space-y-11 pb-4 sm:justify-between sm:px-14">
        <div className="mt-5 sm:mt-11 font-bold drop-shadow-xl">
          <h1>
            ARTHUR MACHADO
          </h1>
        </div>

        <div className="flex flex-col text-center font-bold sm:flex-row sm:space-x-10">
          <p className="hover:text-[#301dda] transition duration-500"><a href="https://www.instagram.com/">SOBRE</a></p>
          <p className="hover:text-[#301dda] transition duration-500"><a href="https://www.instagram.com/">CONTATO</a></p>
        </div>
      </nav>
    </div>
  </>
}