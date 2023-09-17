import { Fragment, useEffect, useState } from "react";
import { useSearchProject } from "../hook/useSearch";
import { Input } from "@nextui-org/react";
import Card from "../components/Crad";

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
    fetchProject();
  }, []);

  const [search, setSearch] = useState("");
  const searchProject = useSearchProject(data ?? [], search);

  const fetchProject = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/project/`
      );
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const results = await response.json();
        setData(results.project);
      } else {
        const text = await response.text();
        console.error("Unexpected response:", text);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

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
            type="email"
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
