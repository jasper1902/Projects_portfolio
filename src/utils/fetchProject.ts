import { DataType } from "../pages/Home";

export const fetchProject = async (): Promise<DataType[] | undefined> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/project/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const results = await response.json();
      if (Array.isArray(results.project)) {
        return results.project as DataType[];
      } else {
        throw new Error("Invalid JSON format in response");
      }
    } else {
      throw new Error("Unexpected response content type");
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error; 
  }
};
