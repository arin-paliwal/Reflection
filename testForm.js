import React, { useState } from "react";

const FormComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [readTime, setReadTime] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBriefChange = (event) => {
    setBrief(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleReadTimeChange = (event) => {
    setReadTime(event.target.value);
  };

  const handleDatePostedChange = (event) => {
    setDatePosted(event.target.value);
  };

  const handleBannerImageChange = (event) => {
    setBannerImage(event.target.value);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-tl rounded-bl ${
            activeTab === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 2
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === 3
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
        <button
          className={`px-4 py-2 rounded-tr rounded-br ${
            activeTab === 4
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-500"
          }`}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </button>
      </div>

      {activeTab === 1 && (
        <div>
          <label className="block mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2" htmlFor="title">
            Title of Article:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <label className="block mb-2" htmlFor="brief">
            Article Brief:
          </label>
          <input
            id="brief"
            value={brief}
            onChange={handleBriefChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2" htmlFor="category">
            Article Category:
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
      )}

      {activeTab === 3 && (
        <div>
          <label className="block mb-2" htmlFor="readTime">
            Read Time of Article:
          </label>
          <input
            type="text"
            id="readTime"
            value={readTime}
            onChange={handleReadTimeChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />

          <label className="block mb-2" htmlFor="datePosted">
            Date Posted:
          </label>
          <input
            type="text"
            id="datePosted"
            value={datePosted}
            onChange={handleDatePostedChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
      )}

      {activeTab === 4 && (
        <div>
          <label className="block mb-2" htmlFor="bannerImage">
            Banner Image:
          </label>
          <input
            type="text"
            id="bannerImage"
            value={bannerImage}
            onChange={handleBannerImageChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default FormComponent;
