import projectModel from "../models/project.js";


const createProject = async (req, res) => {

  const baseUrl = `${req.protocol}://${req.get("host")}`;


  try {
    const { name, builder, location, description, features, status } = req.body;

    const galleryPaths =
      req.files?.gallery?.map((file) => ({
        filename: file.filename,
        path: `${baseUrl}/${file.path}`,
      })) || [];

    const layoutImages = req.files?.layoutImages || [];

    const layoutMeta = JSON.parse(req.body.layouts || "[]");

    const layouts = layoutMeta.map((meta, i) => ({
      ...meta,
      image: `${baseUrl}/${layoutImages[i]?.path}` || "",
    }));

    const project = new projectModel({
      name,
      builder: builder,
      location,
      description,
      features: features ? JSON.parse(features) : [],
      status,
      galleryImages: galleryPaths,
      layouts,
    });

    await project.save();

    console.log(project);

    res
      .status(201)
      .json({ success: true, message: "Project Created", project });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to create project" });
  }
};


const getAllProjects = async (req, res) => {

  try {
    const allProjects = await projectModel.find();

    res.status(201).json({ success: true, message: "All Project Fetched", allProjects });


  } catch (error) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch all projects" });
  }

}


export { createProject, getAllProjects }

