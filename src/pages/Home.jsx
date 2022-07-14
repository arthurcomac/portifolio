import MyPhoto from '../images/2022-05-26-arthur.png'

export function Home () {
  return <>
    <div className='flex flex-col items-center sm:flex-row-reverse sm:py-10'>
      <div className='text-center sm:text-left'>
        <h1 className='text-5xl font-bold'>
          Olá!
        </h1>
        <h2 className='text-3xl font-semibold'>
          Meu nome é Arthur Machado, e sou frontend developer!<br/>
          Bem vindo ao meu perfil!
        </h2>
      </div>
        
      <div className='max-w-sm min-w-[15rem] rounded-full overflow-hidden'>
        <img src={MyPhoto}alt="arthur machado" />
      </div>
    </div>
  </>
}