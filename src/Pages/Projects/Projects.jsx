import bg from '../../assets/bg-01.jpg'
import image1 from '../../assets/Screenshot 2023-12-11 232201.png'
import image2 from '../../assets/Screenshot 2023-12-11 234832.png'
import image3 from '../../assets/Screenshot 2023-12-11 235234.png'

const Projects = () => {
    return (
        <div
      className="min-h-screen pt-20"
      style={{ backgroundImage: `url('${bg}')` }}
    >
        <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-white">
          MY <span className="text-green-900">PROJECTS</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto gap-10 py-10'>
        {/* card 1 */}
      <div className="card mt-10 card-compact bg-[#1f1f1f] rounded-md">
  <figure><img src={image1} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Paw palace<div className="badge bg-green-900 text-white p-3">NEW</div></h2>
    <p>Find your pet friend! Browse adoptable animals, request adoptions after logging in, and post pets for a new home.</p>
    <div className="card-actions justify-end">
      <a href="https://github.com/maruf318/paw-palace-client"><button className="btn bg-[#005522] rounded-md text-white">CODE</button></a>
      <a className='absolute top-0 right-0' href="https://paw-palace-a394a.web.app/"><button className="btn bg-[#1f1f1f] rounded-r-none rounded-t-none text-white"><i className="fa-solid fa-eye text-green-700 hover:text-green-500"></i></button></a>
    </div>
  </div>
</div>
{/* card 2 */}
      <div className="card mt-10 card-compact bg-[#1f1f1f] rounded-md">
  <figure><img src={image2} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Knowledge hub</h2>
    <p>Explore a world of books on our site! Borrow, read short descriptions, and download PDFs.</p>
    <div className="card-actions justify-end">
      <a href="https://github.com/maruf318/knowledge-hub-client"><button className="btn bg-[#005522] rounded-md text-white">CODE</button></a>
      <a className='absolute top-0 right-0' href="https://bespoke-piroshki-616533.netlify.app/"><button className="btn bg-[#1f1f1f] rounded-r-none rounded-t-none text-white"><i className="fa-solid fa-eye text-green-700 hover:text-green-500"></i></button></a>
    </div>
  </div>
</div>
{/* card 3 */}
      <div className="card mt-10 card-compact bg-[#1f1f1f] rounded-md">
  <figure><img src={image3} alt="img" /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Beat speed</h2>
    <p>Rev up your car experience on our responsive site! Browse and buy cars, parts from six top brands. Toggle between dark and light themes for a personalized view.</p>
    <div className="card-actions justify-end">
      <a href="https://github.com/maruf318/beat-speed-client"><button className="btn bg-[#005522] rounded-md text-white">CODE</button></a>
      <a className='absolute top-0 right-0' href="https://elaborate-kelpie-ed5690.netlify.app/"><button className="btn bg-[#1f1f1f] rounded-r-none rounded-t-none text-white"><i className="fa-solid fa-eye text-green-700 hover:text-green-500"></i></button></a>
    </div>
  </div>
</div>
      </div>
    </div>
    );
};

export default Projects;