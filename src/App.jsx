import logo from './assets/logo.png';

function App() {
  return (
    <div className="bg-black min-h-lvh">
      <div className="flex justify-center items-center bg-[url('./assets/background.jpg')] min-h-svh bg-no-repeat bg-cover">
        <div className=''>
          <div className='flex flex-col px-16 py-10 bg-slate-950 rounded-lg w-[400px] m-auto text-white font-mutlu text-6xl'>
            <h1 className='pl-3 text-5xl'>The</h1>
            <h1>Feral Land</h1>
            <h1 className='pl-4 pt-4'>Project</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

// function App() {
//   return (
//     <div className="bg-black min-h-lvh">

//       {/* First section */}
//       <div className="flex relative bg-[url('./assets/background.jpg')] max-h-[720px] bg-no-repeat bg-cover">
//         <div className='flex-1'>
//           <div className=' mx-auto my-auto text-white font-mutlu text-6xl drop-shadow-2xl shadow-black'>
//             <h1>The</h1>
//             <h1>Feral Land</h1>
//             <h1>Project</h1>
//           </div>
//           <p className='text-white justify-end align-bottom drop-shadow-2xl m-0 '>
//             The Feral Land Project is a tax exempt 501(c)(3) nonprofit organization
//           </p>
//         </div>
//         {/* tirangle */}
//         <div className='
//           bg-transparent
//           border-t-[310px] border-t-transparent
//           border-r-[70px] border-r-black
//           border-b-[310px] border-b-transparent'/>

//         <div className='bg-black w-1/3 flex flex-col justify-between pt-16 pb-6 pr-6'>
//           <img className='w-44 mx-auto ' src={logo} alt="The Feral Land Project Logo" />
//           <p className='text-white text-lg text-right font-light text leading-6 tracking-wide '>
//             The purpose of The&nbsp;Feral&nbsp;Land&nbsp;Project
//             is to charitably provide communities, institutions and
//             wildlife with gardens, parks, green spaces, habitats and
//             safe passageways. We strive to repurpose, steward or rewild
//             feral lands, waste sites and over-paved places into
//             hospitable environments where life will thrive.</p>
//           <h2 className='text-white font-semibold text-right '>Reviving the Forgotten, Restoring the Wild</h2>
//         </div>
//       </div>

//     </div>
//   )
// }

export default App
