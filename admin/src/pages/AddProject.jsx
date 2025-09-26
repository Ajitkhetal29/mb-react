import React, { useContext, useEffect, useRef, useState } from "react";
import { AppConetxt } from "../context/context";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddProject = () => {
  const { backendUrl } = useContext(AppConetxt);

  const [form, setForm] = useState({
    name: "",
    builder: "",
    location: "",
    description: "",
    status: "",
  });

  const [featureInput, setFeatureInput] = useState("");
  const [features, setFeatures] = useState([]);

  const [galleryImages, setGalleryImages] = useState([]);
  const galleryInputRef = useRef(null);
  const layoutImagInputRef = useRef(null);

  const [layouts, setLayouts] = useState([
    {
      id: Date.now(),
      title: "",
      area: "",
      price: "",
      imageFile: null,
      imagePreview: null,
    },
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const addFeature = () => {
    const tag = featureInput.trim();
    if (!tag) return;
    if (!features.includes(tag)) {
      setFeatures((prev) => [...prev, tag]);
    }

    setFeatureInput("");
  };

  const removeFeature = (tag) => {
    setFeatures((prev) => prev.filter((f) => f !== tag));
  };

  const onGalleryButtonClick = () => {
    galleryInputRef.current?.click();
  };
  const onLayoutButtonClick = () => {
    layoutImagInputRef.current?.click();
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newFiles = files.map((file, idx) => ({
      id: Date.now() + idx,
      file,
      preview: URL.createObjectURL(file),
    }));
    setGalleryImages((prev) => [...prev, ...newFiles]);
  };

  const removeGalleryImage = (id) => {
    setGalleryImages((prev) => {
      const rem = prev.find((x) => x.id === id);
      if (rem) {
        URL.revokeObjectURL(rem.preview);
      }
      return prev.filter((x) => x.id !== id);
    });
  };

  const addLayout = () => {
    setLayouts((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        area: "",
        price: "",
        imageFile: null,
        imagePreview: null,
      },
    ]);
  };

  const removeLayout = (id) => {
    setLayouts((prev) => {
      const rem = prev.find((x) => x.id === id);
      if (rem?.imagePreview) {
        URL.revokeObjectURL(rem.imagePreview);
      }
      return prev.filter((x) => x.id !== id);
    });
  };

  const handleLayoutChange = (id, field, value) => {
    setLayouts((prev) =>
      prev.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const handleLayoutImage = (id, e) => {
    const file = e.target.files?.[0];
    setLayouts((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        if (l.imagePreview) URL.revokeObjectURL(l.imagePreview);
        return {
          ...l,
          imageFile: file || null,
          imagePreview: file ? URL.createObjectURL(file) : null,
        };
      })
    );
    e.target.value = null;
  };

  useEffect(() => {
    return () => {
      galleryImages.forEach((g) => URL.revokeObjectURL(g.preview));
      layouts.forEach(
        (l) => l.imagePreview && URL.revokeObjectURL(l.imagePreview)
      );
    };
  }, []);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      return alert("name is required");
    }

    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("builder", form.builder);
      fd.append("location", form.location);
      fd.append("status", form.status);
      fd.append("description", form.description);
      fd.append("slug", slugify(form.name));
      fd.append("features", JSON.stringify(features));

      galleryImages.forEach((g) => fd.append("gallery", g.file));

      fd.append(
        "layouts",
        JSON.stringify(
          layouts.map((l) => ({
            title: l.title,
            area: l.area,
            price: l.price,
          }))
        )
      );

      layouts.forEach((l) => fd.append("layoutImages", l.imageFile));

      const response = await axios.post(
        `${backendUrl}/project/addProject`,
        fd,
        {}
      );

      if (response.data.success) {
        console.log(response.data.project);

        alert(`project created`);
      }

      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center pb-5 ">
        <div className="w-full ">
          <h1 className="text-2xl text-white text-center oswald_span mb-4">
            Add New Project
          </h1>
        </div>
        <div className="flex flex-col md:w-1/2 border px-2 py-3 rounded bg-gray-900">
          <form onSubmit={handleSubmitForm} action="" className="space-y-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Project Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  required
                  placeholder="e.g Skyline Estate"
                  className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div>
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Builder Name
                </label>
                <input
                  type="text"
                  value={form.builder}
                  required
                  placeholder="Builder Name"
                  className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, builder: e.target.value }))
                  }
                />
              </div>

              <div>
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Location
                </label>
                <input
                  type="text"
                  value={form.location}
                  required
                  placeholder="Location"
                  className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, location: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Status
                </label>

                <select
                  name="status"
                  id=""
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, status: e.target.value }))
                  }
                  value={form.status}
                  className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block tex-sm text-white mb-1 maven-pro">
                Description
              </label>
              <textarea
                value={form.description}
                required
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, description: e.target.value }))
                }
                className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                placeholder="Brief description"
              />
            </div>

            <div>
              <label className="block tex-sm text-white mb-1 maven-pro">
                Features
              </label>
              <div className="flex gap-2">
                <input
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addFeature();
                    }
                    if (e.key === ",") {
                      e.preventDefault();
                      addFeature();
                    }
                  }}
                  placeholder="Type a feature and press Enter"
                  className="w-full rounded border bg-gray-200 border-gray-300 px-3 py-2"
                />
                <button
                  type="button"
                  onClick={addFeature}
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Add
                </button>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {features.map((f) => (
                  <div
                    key={f}
                    className="bg-gray-100 px-3 py-1  rounded flex items-center gap-2"
                  >
                    <span className="text-sm">{f}</span>
                    <button
                      type="button"
                      onClick={() => removeFeature(f)}
                      aria-label={`Remove ${f}`}
                      className="text-xs text-red-800"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Gallery Images
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm text-white">
                    Click add to select images. You can add more later.
                  </p>
                </div>
                <div className="flex ">
                  <input
                    type="file"
                    ref={galleryInputRef}
                    accept="images/*"
                    multiple
                    className="hidden"
                    onChange={handleGalleryChange}
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded"
                    onClick={onGalleryButtonClick}
                  >
                    Add Images
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {galleryImages.map((g) => (
                  <div
                    className="relative border rounded overflow-hidden bg-gray-200"
                    key={g.id}
                  >
                    <img
                      src={g.preview}
                      alt={g.file.name}
                      className="w-50 h-25 object-fill "
                    />
                    <span className="p-1 text-xs">{g.file.name}</span>
                    <button
                      className="absolute top-1 right-1 bg-white/80 rounded-full  text-red-600"
                      onClick={() => {
                        removeGalleryImage(g.id);
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block tex-sm text-white mb-1 maven-pro">
                  Layout
                </label>
                <button
                  type="button"
                  onClick={addLayout}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Add Layout
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {layouts.map((l, idx) => (
                  <div
                    key={l.id}
                    className=" flex flex-col  border rounded p-3 "
                  >
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 space-x-5 space-y-2">
                      <div>
                        <label
                          htmlFor=""
                          className="block text-sm text-white maven-pro font-medium mb-1"
                        >
                          Title
                        </label>
                        <input
                          value={l.title}
                          onChange={(e) =>
                            handleLayoutChange(l.id, "title", e.target.value)
                          }
                          className="w-full rounded border bg-gray-200 maven-pro px-3 py-2"
                          placeholder="2 BHK"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white font-medium mb-1">
                          Area (sq ft)
                        </label>
                        <input
                          type="number"
                          value={l.area}
                          onChange={(e) =>
                            handleLayoutChange(l.id, "area", e.target.value)
                          }
                          className="w-full rounded border bg-gray-200 px-3 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-white font-medium mb-1">
                          Price (Lacs)
                        </label>
                        <input
                          type="number"
                          value={l.price}
                          onChange={(e) =>
                            handleLayoutChange(l.id, "price", e.target.value)
                          }
                          className="w-full rounded border bg-gray-200 px-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="w-full flex mt-2">
                      <div className="w-full flex items-center ">
                        <p className=" w-full flex flex-1 text-white">
                          Add Layout Image{" "}
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          ref={layoutImagInputRef}
                          onChange={(e) => handleLayoutImage(l.id, e)}
                          className="hidden "
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-green-600 text-white rounded"
                          onClick={onLayoutButtonClick}
                        >
                          Add Image
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full flex-row">
                      {l.imagePreview ? (
                        <div className=" mt-2 border rounded overflow-hidden bg-gray-200">
                          <img
                            src={l.imagePreview}
                            alt={l.title}
                            className="w-25 h-25 object-fill"
                          />
                          <div className="p-2 text-sm flex items-center justify-between">
                            <span className="truncate">
                              {l.imageFile?.name}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full text-sm text-gray-500 mt-2">
                          No layout image selected
                        </div>
                      )}
                    </div>
                    <div className="flex justify-center mt-2">
                      <button
                        type="button"
                        onClick={() => removeLayout(l.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded"
                      >
                        Remove Layout
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-indigo-600 text-white rounded disabled:opacity-60"
              >
                {submitting ? "Saving..." : "Save Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProject;
