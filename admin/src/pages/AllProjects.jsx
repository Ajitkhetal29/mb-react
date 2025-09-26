import React, { useContext } from "react";
import { AppConetxt } from "../context/context";

const AllProjects = () => {
  const { allProjects, navigate } = useContext(AppConetxt);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {allProjects && allProjects.length > 0 ? (
        <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                Builder Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Features
              </th>
              <th scope="col" className="px-6 py-3">
                Gallery Images
              </th>
              <th scope="col" className="px-6 py-3">
                Layouts
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {allProjects.map((project) => (
              <tr
                key={project._id || project.name}
                className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {project.name}
                </th>
                <td className="px-6 py-4">{project.builder}</td>
                <td className="px-6 py-4">{project.location}</td>
                <td className="px-6 py-4">{project.status}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">{project.features}</td>
                <td className="px-6 py-4 space-x-1">
                  {project.galleryImages?.map((img, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 mb-1 text-xs bg-blue-100 text-blue-700 rounded"
                    >
                      <div>
                        {/* <img src={img.path} alt="img" /> */}
                        {img.filename}
                      </div>
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 space-x-1">
                  {project.layouts?.map((layout, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-1 mb-1 text-xs bg-green-100 text-green-700 rounded"
                    >
                      {/* <img src={layout.image} alt="img" /> */}
                      {layout.title}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={()=>navigate(`/updateProject/${project._id}`)}
                    className="px-3 py-1 text-xs text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Edit
                  </button>
                  <button className="px-3 py-1 text-xs text-white bg-emerald-600 rounded hover:bg-emerald-700">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-6 text-center text-gray-500 dark:text-gray-300">
          No Projects
        </div>
      )}
    </div>
  );
};

export default AllProjects;
