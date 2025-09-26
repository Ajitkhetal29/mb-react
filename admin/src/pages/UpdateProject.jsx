import React, { useContext, useEffect, useRef, useState } from "react";
import { AppConetxt } from "../context/context";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
  const { allProjects } = useContext(AppConetxt);
  const { id } = useParams();
  const [editableProject, setEditableProject] = useState(null);
  const inputFeatureRef = useRef();
  const inputGalleryRef = useRef();
  const [form, setForm] = useState({
    name: "",
    builder: "",
    location: "",
    description: "",
    status: "",
  });
  const [galleryImages, setGalleryImages] = useState([]);
  const [layouts, setLayouts] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const found = allProjects.find((p) => p._id === id);
    if (found) {
      setEditableProject(found);
      setForm({
        name: found.name || "",
        builder: found.builder || found.buider || "",
        location: found.location || "",
        description: found.description || "",
        status: found.status || "",
      });

      setGalleryImages(found.galleryImages);
      setLayouts(found.layouts);
      setFeatures(found.features);
    }
  }, [id, allProjects]);

  // handle form
  const handleform = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle features
  const handlefeatures = () => {
    const text = inputFeatureRef.current.value;
    const f = text.trim();
    if (!features.includes(f)) {
      setFeatures((prev) => [...prev, f]);
    }
  };

  const removeFeature = (tag) => {
    setFeatures((prev) => prev.filter((f) => f !== tag));
  };

  // handle gallery image change

  const onGalleryButtonClick = () => {
    inputGalleryRef.current?.click();
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) {
      console.log("no files selcted");
      return;
    }

    const newFiles = files.map((file, idx) => ({
      id: Date.now() + idx,
      filename: file.name,
      preview: URL.createObjectURL(file),
    }));

    setGalleryImages((prev) => [...prev, ...newFiles]);
  };

  const removeGalleryImage = (id) => {
    const rem = galleryImages.find((g) => g._id === id);
    if (rem.preview) {
      URL.revokeObjectURL(rem.preview);
    }
    setGalleryImages((prev) => prev.filter((p) => p._id !== id));
  };

  // handle layout
  const handleAddlayout = () => {
    setLayouts((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        area: "",
        price: "",
        image: null,
      },
    ]);
  };

  const removeLayout = (id) => {
    const rem = layouts.find((l) => l._id === id);
    if (rem.preview) {
      URL.revokeObjectURL(rem.preview);
    }
    setLayouts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleLayoutChange = (id, e) => {
    const {name, value } = e.target
    setLayouts((prev) =>
      prev.map((l) => {
        l._id === id ? { ...l, [name]: value } : l;
      })
    );
  };

  if (!editableProject) {
    return <p className="text-center mt-4">Loading project…</p>;
  }

  return (
    <div className="p-4 flex flex-col w-full items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Update Project</h1>
      <form className="flex flex-col justify-center p-5 border " action="">
        <div className="flex flex-row gap-5 mt-2">
          <div className="flex flex-col">
            <label className="" htmlFor="name">
              Project Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleform}
              className="border"
              value={form.name}
            />
          </div>

          <div className="flex flex-col">
            <label className="" htmlFor="name">
              Builder Name
            </label>
            <input
              value={form.builder}
              type="text"
              name="builder"
              className="border"
              onChange={handleform}
            />
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-2">
          <div className="flex flex-col">
            <label className="" htmlFor="name">
              Location
            </label>
            <input
              type="text"
              name="location"
              className="border"
              onChange={handleform}
              value={form.location}
            />
          </div>
          <div className="flex flex-col ">
            <label className="" htmlFor="name">
              Status
            </label>
            <select
              name="status"
              id=""
              value={form.status}
              onChange={handleform}
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="flex gap-5 w-full">
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              className="border flex-1 w-full"
              onChange={handleform}
              value={form.description}
              id=""
            ></textarea>
          </div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="flex gap-5 w-full">
            <input
              name="description"
              className="border flex-1 w-full"
              placeholder="enter features"
              ref={inputFeatureRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handlefeatures();
                }
                if (e.key === ",") {
                  e.preventDefault();
                  handlefeatures();
                }
              }}
              id=""
            />
            <label htmlFor="" onClick={handlefeatures}>
              Add
            </label>
          </div>
        </div>

        <div className="flex flex-row mt-2 gap-2 ">
          {features.map((f, idx) => (
            <span key={idx} className="relative bg-gray-200  rounded text-sm">
              <p className="p-2">{f}</p>
              <span
                className="absolute cursor-pointer top-0 right-0 text-red-500"
                onClick={() => removeFeature(f)}
              >
                X
              </span>
            </span>
          ))}
        </div>

        <div className="flex flex-col mt-2">
          <div className="flex  justify-between">
            <label htmlFor="Gallery Images">Gallery Images</label>
            <div className="">
              <input
                ref={inputGalleryRef}
                type="file"
                accept="images/*"
                multiple
                className="hidden "
                onChange={handleGalleryChange}
              />
              <button
                className="item-end flex-1"
                type="button"
                onClick={onGalleryButtonClick}
              >
                Add Images
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-2 ">
            {galleryImages.map((img) => (
              <div className="relative">
                <img
                  src={img.path ? img.path : img.preview}
                  alt=""
                  className="h-20 w-20 object-fill"
                />
                <span
                  className="absolute cursor-pointer top-0 right-0 text-red-800"
                  onClick={() => removeGalleryImage(img._id)}
                >
                  X
                </span>
                <span className="text-xs">{img.filename}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-cols mt-2 justify-between">
          <div className="flex flex-row justify-between w-full">
            <label>Layout</label>
            <button type="button" className="" onClick={handleAddlayout}>
              Add Layout
            </button>
          </div>
        </div>

        <div className="flex-cols space-y-6  ">
          {layouts.map((l, idx) => (
            <div key={idx} className="flex flex-col gap-2 border">
              <div className="flex flex-row ">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <label htmlFor="">Title</label>
                    <select  onChange={(e)=>handleLayoutChange(l._id)} name="" id="">
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                    </select>
                  </div>
                  <div className="flex">
                    <label htmlFor="">Area</label>
                    <input  onChange={(e)=>handleLayoutChange(l._id)} type="number"  />
                  </div>
                  <div className="flex">
                    <label htmlFor="">Price</label>
                    <input onChange={(e)=>handleLayoutChange(l._id)} type="number"  />
                  </div>
                </div>
                <div className="flex flex-col">
                  <button>Add Image</button>
                  <img  src={l.image} className="h-20" alt="" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button type="button" onClick={() => removeLayout(l._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-x-2">
          <button>Dischard </button>
          <button>Update </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProject;
