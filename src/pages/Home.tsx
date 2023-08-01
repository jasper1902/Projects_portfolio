import jsonData from "../assets/data.json"
const Home = () => {
    const data = jsonData.data
    return (
        <>
            <div id="home" className="max-w-[1240px] mx-auto px-8 md:mt-40 mt-[28rem] ">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">ProJects portfolio</h1>
                    <p className="lg:text-2xl md:text-1xl text-base">Search projects by title or filter by category</p>
                </div>
                <div className="mt-10">
                    <input type="text" placeholder="Type here" className="input input-bordered w-86 max-w-xs" name="projectName" />
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                    {data.map(item => (
                        <div className="card w-96 bg-base-100 shadow-xl lg:max-w-[330px] sm:max-w-[320px] max-w-[320px]">
                            <figure><img src={item.image} alt="" /></figure>
                            <div className="p-4 flex flex-wrap gap-2">
                                {item.stack.map(tech => (
                                    <p className="mx-1 rounded-lg p-1 hover:p-1.5 hover:transition-all duration-500 hover:bg-primary bg-secondary cursor-pointer">{tech}</p>
                                ))}
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{item.projectName}</h2>
                                <p>{item.category}</p>

                                <div className="card-actions justify-end">

                                    <a href={item.projectUrl}><button className="btn btn-primary">view</button></a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Home