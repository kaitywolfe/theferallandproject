import logo from './assets/logo.png';

function App() {
  return (
    <div className='bg-black min-h-lvh'>
      <div className="flex flex-col mx-auto bg-black min-h-lvh max-w-[1300px]">

        {/* First section */}
        <div className='relative w-full min-h-[500px] md:max-h-[720px] md:min-h-[720px]'>

          <div className='absolute flex flex-col md:flex-row h-full z-10 bg-black bg-opacity-30'>

            <div className='w-full hidden md:flex md:h-full md:w-2/3 flex-col justify-between'>
              <div className='my-auto ml-20 text-white font-mutlu text-6xl drop-shadow-[15px_15px_15px_#000]'>
                <h1 className='pl-3 text-5xl'>The</h1>
                <h1>Feral Land</h1>
                <h1 className='pl-4 pt-4'>Project</h1>
              </div>
              <p className='text-center  text-white justify-end align-bottom drop-shadow-[2px_2px_2px_#000] m-0'>
                The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
              </p>
            </div>

            <div className='flex flex-col h-full justify-between w-full md:w-1/3 '>
              <img className='w-44 mx-auto mt-16 drop-shadow-[15px_15px_15px_#000] ' src={logo} alt="The Feral Land Project Logo" />
              <p className='text-center md:hidden text-white drop-shadow-[2px_2px_6px_#000]'>
                The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
              </p>
              <p className='text-white px-10 md:px-0 md:pr-10 text-lg text-center md:text-right font-light text leading-6 tracking-wide '>
                The purpose of The&nbsp;Feral&nbsp;Land&nbsp;Project
                is to charitably provide communities, institutions and
                wildlife with gardens, parks, green spaces, habitats and
                safe passageways. We strive to repurpose, steward or rewild
                feral lands, waste sites and over-paved places into
                hospitable environments where life will thrive.</p>
              <h2 className='text-white font-semibold text-center md:pr-10 md:text-right '>
                Reviving&nbsp;the&nbsp;Forgotten, Restoring&nbsp;the&nbsp;Wild
              </h2>
            </div>

          </div>

          <div className="absolute w-full min-h-[300px] md:max-h-[720px] md:min-h-[720px] sepia-[30%] md:clip-arrow-left bg-[url('./assets/background.jpg')]  bg-no-repeat bg-cover bg-center" />
        </div>

        {/* second section */}
        <div className='flex flex-col relative bg-black'>
          <div className='flex flex-col md:flex-row-reverse h-full justify-between absolute z-10 bg-black bg-opacity-20'>
            <h1 className='mt-24 mr-40 mb-44 pl-20 md:pl-0 text-white font-mutlu text-6xl drop-shadow-[15px_15px_15px_#000]'>
              Our Vision
            </h1>
            <p className='text-white py-10 md:p-0 md:pt-0 text-center md:text-left w-full h-full md:h-fit md:w-1/3 my-auto bg-black text-lg md:leading-7 md:text-2xl md:ml-10 font-light tracking-wide'>
              The Feral Land Project envisions a world in which gardens and the act of gardening are recognized and implemented as ways to counteract some of our greatest societal and environmental challenges.
            </p>
          </div >
          <div className='flex min-h-[500px] max-h-[500px] md:max-h-[720px] md:min-h-[720px] sepia-[30%] md:clip-right bg-[url("./assets/background-2.jpg")] bg-black text-white bg-cover bg-no-repeat bg-center' />
        </div>

        {/* third section */}
        <div className='flex max-h-96 flex-col relative bg-black'>
          <div className='flex h-full w-full justify-between absolute z-10 bg-black bg-opacity-10'>
            <h1 className='mt-16 ml-20 text-white font-mutlu text-7xl drop-shadow-[0px_0px_20px_#000]'>
              Our Values
            </h1>
          </div >
          <div className='flex clip-up max-h-96 min-h-96 sepia-[30%] bg-[url("./assets/background-3.jpg")] bg-black text-white bg-cover bg-center bg-no-repeat' />
        </div>

        {/* fourth section */}
        <div className="relative bg-black text-white py-16">

          {/* three sections */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 tracking-wide">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold mb-4">Community & Allyship</h3>
              <p className="text-base leading-6">We strive to create systems that benefit inhabitants from pollinators to people. We recognize that plants and animals, including humans, are allies in a grander scheme and should not be separated by the dualism of society vs. nature.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold mb-4">Sustainability & Conservation</h3>
              <p className="text-base leading-6">The Feral Land Project intends to preserve existing ecosystems where possible and to rehabilitate, revitalize and regenerate soil which contributes to our current well-being and acts as a gift to future generations and the world.</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold mb-4">Participation & Optimism</h3>
              <p className="text-base leading-6">We value engagement, holding outside space for community gathering and for appreciating the greater system civilization resides within. Gardens and wild places not only provide us with food and beauty, but bring us hope and health.</p>
            </div>
          </div>

          <div className="w-full text-center pt-12">
            <h2 className="text-2xl font-semibold ">Reviving the Forgotten, Restoring the Wild</h2>
            <div className="w-4/5 mx-auto h-0.5 bg-white my-2"></div>
            <p className="text-base leading-6">We are actively adding new projects and details to this site. Please check back soon!</p>
          </div>
        </div>

        {/* fifth */}
        <div className='flex max-h-[400px] min-h-[320px] clip-arrows sepia-[30%] bg-[url("./assets/background-4.jpg")] bg-cover bg-no-repeat bg-center' />

        {/* Footer */}
        <footer className="bg-black text-white pt-8 pb-4">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">

            <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <img className="w-20" src={logo} alt="The Feral Land Project Logo" />
                <div>
                  <h3 className="text-xl font-semibold">The Feral Land Project</h3>
                  <div className="w-full h-0.5 bg-white my-2"></div>
                  <p>P.O. Box 268 Nevada City, CA 95959</p>
                  <p>info@theferallandproject.org</p>
                </div>
              </div>
            </div>
            <h2 className="text-center text-lg font-light mt-8">
              The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
            </h2>
          </div>
        </footer>

      </div>
    </div>
  )
}

// coming soon
// function App() {
//   return (
//     <div className="bg-black min-h-lvh">
//       <div className="flex justify-center items-center bg-[url('./assets/background.jpg')] min-h-svh bg-no-repeat bg-cover">
//         <div className=''>

//           <div className='flex flex-col px-16 py-10 bg-slate-950 rounded-lg w-[400px] m-auto text-white font-mutlu text-6xl'>
//             {/* <h1 className='pl-3 text-5xl'>The</h1>
//             <h1>Feral Land</h1>
//             <h1 className='pl-4 pt-4'>Project</h1> */}
//             <img className='w-44 mx-auto ' src={logo} alt="The Feral Land Project Logo" />
//             <h1 className="text-center pt-4 text-4xl font-semibold font-sans">Coming Soon!</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default App
