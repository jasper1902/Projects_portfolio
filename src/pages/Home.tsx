import { Fragment, useEffect, useState } from "react";
import { useSearchProject } from "../hook/useSearch";
import { Input } from "@nextui-org/react";
import Card from "../components/Crad";
import { fetchProject } from "../utils/fetchProject";

export interface DataType {
  projectName: string;
  category: string;
  stack: string[];
  image: string;
  projectUrl: string;
}

const Home = () => {
  const [data, setData] = useState<DataType[] | null>(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await fetchProject();
      if (projects) {
        setData(projects);
      }
    };

    fetchProjects();
  }, []);

  const [search, setSearch] = useState("");
  const searchProject = useSearchProject(data ?? [], search);

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div id="home" className={`max-w-[1240px] mx-auto px-8  `}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">
            ProJects portfolio
          </h1>
          <p className="lg:text-2xl md:text-1xl text-base">
            Search projects by title or filter by category
          </p>
        </div>
        <div className="mt-10">
          <Input
            type="text"
            label="Search Project"
            defaultValue=""
            className="max-w-xs"
            name="projectName"
            onChange={handleOnChangeSearch}
          />
        </div>

        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col justify-center items-stretch gap-4 mt-5">
          {searchProject.length > 0 ? (
            searchProject.map((item: DataType, index: number) => (
              <Fragment key={index}>
                <Card
                  image={item.image}
                  stack={item.stack}
                  projectName={item.projectName}
                  category={item.category}
                  projectUrl={item.projectUrl}
                />
              </Fragment>
            ))
          ) : (
            <>
              <h1>No project</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
