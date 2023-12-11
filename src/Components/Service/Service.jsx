

const Service = () => {
    return (
        <div>
            <div className="bg-transparent pb-20 md:py-40">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          MY <span className="text-green-900">SERVICES</span>
        </h1>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-1 mt-10 md:grid-cols-3 gap-5">
        {/* card 1 */}
      <div className="card rounded-md border border-[#1a1a1a]  bg-[#1a1a1a] hover:border hover:border-green-900">
  <div className="card-body">
    <h1><i className="fa-solid fa-code bg-green-900 text-white rounded-full p-4"></i></h1>
    <h2 className="card-title  text-white mt-3">Web Design</h2>
    <p>Crafting websites with the perfect balance of style and functionality to enhance your online success.</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#005522] text-white">DETAILS</button>
    </div>
  </div>
</div>
{/* card 2 */}
      <div className="card rounded-md border border-[#1a1a1a]  bg-[#1a1a1a] hover:border hover:border-green-900">
  <div className="card-body">
    <h1><i className="fa-solid bg-green-900 text-white rounded-full p-4 fa-laptop"></i></h1>
    <h2 className="card-title  text-white mt-3">Software Development</h2>
    <p>Crafting powerful and scalable software solutions using Node.js, JavaScript, Python, and Lua</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#005522] text-white">DETAILS</button>
    </div>
  </div>
</div>
{/* card 3 */}
      <div className="card rounded-md border border-[#1a1a1a]  bg-[#1a1a1a] hover:border hover:border-green-900">
  <div className="card-body">
    <h1><i className="fa-solid fa-database bg-green-900 text-white rounded-full p-4"></i></h1>
    <h2 className="card-title  text-white mt-3">Database Support</h2>
    <p>Developing custom database applications that streamline your workflows and boost productivity.</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#005522] text-white">DETAILS</button>
    </div>
  </div>
</div>
      </div>
    </div>
        </div>
    );
};

export default Service;