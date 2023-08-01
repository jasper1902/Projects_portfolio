import { useState } from "react"
import { data, DataType } from "../data"
import { useSearchProject } from "../hook/useSearch"
const Home = () => {
    const [search, setSearch] = useState("")
    const searchProject = useSearchProject(data, search)

    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <div id="home" className="max-w-[1240px] mx-auto px-8 md:mt-40 mt-[28rem] ">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">ProJects portfolio</h1>
                    <p className="lg:text-2xl md:text-1xl text-base">Search projects by title or filter by category</p>
                </div>
                <div className="mt-10">
                    <input type="text" placeholder="Type here" className="input input-bordered w-86 max-w-xs" name="projectName" onChange={handleOnChangeSearch} />
                </div>

                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-center items-center md:items-stretch gap-4 mt-5">
                    {searchProject.map((item: DataType, index: number) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl lg:max-w-[330px] sm:max-w-[320px] max-w-[320px]">
                            <figure><img src={`${import.meta.env.VITE_IMAGE_URL}${item.image}`} alt="" /></figure>
                            <div className="p-4 flex flex-wrap gap-2">
                                {item.stack.map((tech: string) => (
                                    <p key={tech} className="mx-1 rounded-lg p-1 hover:p-1.5 hover:transition-all duration-500 hover:bg-primary bg-secondary cursor-pointer">{tech}</p>
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