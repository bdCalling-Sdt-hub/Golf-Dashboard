import { useState } from "react";
import { Form, Select } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomButton from "../../../utils/CustomButton";
import CustomInput from "../../../utils/CustomInput";

// Hierarchical data for categories
const categoriesData = {
  All: {},
  Musical: {
    Keyboard: ["Piano"],
    String: ["Violin", "Cello", "Viola", "Double Bass", "Guitar", "Harp"],
    Wind: [
      "Oboe",
      "Clarinet",
      "Flute",
      "Saxophone",
      "Cornet",
      "Baritone",
      "Bassoon",
      "Euphonium",
      "Flugelhorn",
      "Horn",
      "Trombone",
      "Trumpet",
      "Tuba"
    ],
    Percussion: ["Drum Set", "Timpani"]
  },
  Sport: {
    Indoor: [
      "Acrobatic Gymnastics",
      "Artistic Gymnastics",
      "Bowling",
      "Fencing",
      "Judo",
      "Karate",
      "Table Tennis",
      "Taekwondo",
      "Weightlifting",
      "Wrestling",
      "Boxing",
      "Chess",
      "Cheerleading",
      "Gaming",
      "Yoga",
      "Swimming",
      "Artistic Swimming",
      "Handball",
      "Basketball",
      "Volleyball",
      "Badminton",
      "Squash"
    ],
    Outdoor: [
      "Skiing",
      "Archery",
      "Athletics",
      "Baseball",
      "Canoe",
      "Cricket",
      "Curling",
      "Mountain Bike",
      "Cycling",
      "Diving",
      "Equestrian",
      "Skating",
      "Fishing",
      "Football/Rugby",
      "Golf",
      "Hockey",
      "Hiking",
      "Ice Hockey",
      "Lacrosse",
      "Luge",
      "Rowing",
      "Sailing",
      "Shooting",
      "Skateboarding",
      "Snowboard",
      "Soccer",
      "Softball",
      "Climbing",
      "Surfing",
      "Tennis",
      "Triathlon",
      "Water Polo",
      "Racing",
      "Skydiving",
      "Flying"
    ]
  },
  Art: [
    "Calligraphy",
    "Dancing",
    "Acting",
    "Crocheting",
    "Drawing",
    "Metalworking",
    "Origami",
    "Painting",
    "Photography",
    "Pottery",
    "Weaving",
    "Woodworking",
    "Writing",
    "Voice"
  ],
  "Food & Drink": ["Baking", "Cooking", "Bartending"]
};

// Utility function to generate options dynamically
const getOptionsFromObject = (data, path = []) => {
  let current = data;
  // Traverse the object based on the path
  path.forEach(key => {
    if (current && current[key]) {
      current = current[key];
    }
  });

  // If current is an array, return it as options
  if (Array.isArray(current)) {
    return current.map(item => ({ label: item, value: item }));
  }

  // If current is an object, return its keys as options
  if (typeof current === "object" && current !== null) {
    return Object.keys(current).map(key => ({
      label: key,
      value: key
    }));
  }

  // Return an empty array if no options are available
  return [];
};

const EditCategoriesBox = () => {
  const [imageFile, setImageFile] = useState(null);
  const [selectedPath, setSelectedPath] = useState([]); // Track selected path for dropdowns
  const [form] = Form.useForm();

  const handleSelection = (level, value) => {
    const newPath = [...selectedPath.slice(0, level), value];
    setSelectedPath(newPath);
  };

  const handleImageChange = event => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const onFinish = async values => {
    if (!imageFile) {
      console.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("category", selectedPath.join(" > "));
    formData.append("image", imageFile);

    console.log("Form Data Submitted:", formData);
    // Add API logic here
  };

  return (
    <div className="w-full pb-10">
      {/* Header */}
      <div className="flex gap-4 items-center my-6">
        <Link to={"/categories"}>
          <IoChevronBack className="size-6" />
        </Link>
        <h1 className="text-2xl font-semibold">Edit Category</h1>
      </div>
      {/* Form */}
      <Form form={form} layout="vertical" onFinish={onFinish} className="mt-5">
        {/* Category */}
        <Form.Item label="Category" name="category">
          <Select
            size="large"
            placeholder="Select Category"
            onChange={value => handleSelection(0, value)}
            className="border border-black rounded-lg"
          >
            {getOptionsFromObject(categoriesData).map(option =>
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            )}
          </Select>
        </Form.Item>

        {/* Sub-Category */}
        <Form.Item label="Sub-Category" name="subCategory">
          <Select
            size="large"
            placeholder="Select Sub-Category"
            onChange={value => handleSelection(1, value)}
            className="border border-black rounded-lg"
          >
            {getOptionsFromObject(
              categoriesData,
              selectedPath.slice(0, 1)
            ).map(option =>
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            )}
          </Select>
        </Form.Item>

        {/* Program */}
        <Form.Item label="Program" name="program">
          <Select
            size="large"
            placeholder="Select Program"
            className="border border-black rounded-lg"
          >
            {getOptionsFromObject(categoriesData, selectedPath).map(option =>
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            )}
          </Select>
        </Form.Item>

        {/* Upload Image */}
        <Form.Item label="Upload Image" name="image">
          <CustomInput
            isFile
            placeholder="Upload your image"
            className="px-3 py-1"
            name="profileImage"
            onChange={handleImageChange}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item label="Description" name="description">
          <CustomInput placeholder="Add a description" isTextArea rows={4} />
        </Form.Item>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            className="bg-[#f1bd19] px-8 py-2 font-semibold rounded-md"
            loading={false}
          >
            Edit Category
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditCategoriesBox;
