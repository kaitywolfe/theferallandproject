
import logo from './assets/logo.png';

function App() {
  return (
    <div className="bg-black min-h-lvh">

      {/* First section */}
      <div className="flex bg-[url('./assets/background_1.jpg')] justify-end bg-no-repeat bg-cover min-h-screen">
        {/* <p className='text-white align-bottom drop-shadow-lg m-0 '>The Feral Land Project is a tax exempt 501(c)(3) nonprofit organization</p> */}
        <div className='flex bg-transparent w-10 h-auto
              border-t-[400px] border-t-transparent
              border-r-[50px] border-r-black
              border-b-[400px] border-b-transparent'
        ></div>
        <div aria-hidden="true" className='bg-black w-1/3 flex flex-col justify-between pt-16 pb-6 pr-6'>
          <img className='w-44 mx-auto' src={logo} />
          <p className='text-white text-lg text-right font-light text tracking-wide '>The purpose of
            The Feral Land Project
            is to charitably provide communities, institutions and wildlife with gardens, parks, green spaces, habitats and safe passageways. We strive to repurpose, steward or rewild feral lands, waste sites and over-paved places into hospitable environments where life will thrive.</p>
          <h2 className='text-white font-semibold text-right '>Reviving the Forgotten, Restoring the Wild</h2>
        </div>
      </div>

    </div>
  )
}

export default App
