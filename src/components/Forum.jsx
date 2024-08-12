

// const Forum = () => {
//   return (
//     <div className=" flex justify-center">
//       forum 
//     </div>
//   )
// }

// export default Forum


import  { useState } from "react";


function DataForm() {
  const [formData, setFormData] = useState({
    assetName: "",
    titleName: "",
    tvModel2024: "",
    tvModel2023: "",
    tvModel2017: "",
    tab: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/widget/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Data saved successfully!");
    } else {
      alert("Failed to save data.");
    }
  };

  return (
    <><form onSubmit={handleSubmit}>
      <input type="text" name="assetName" value={formData.assetName} onChange={handleChange} placeholder="Asset Name" />
      <input type="text" name="titleName" value={formData.titleName} onChange={handleChange} placeholder="Title Name" />
      <input type="text" name="tvModel2024" value={formData.tvModel2024} onChange={handleChange} placeholder="TV Model 2024" />
      <input type="text" name="tvModel2023" value={formData.tvModel2023} onChange={handleChange} placeholder="TV Model 2023" />
      <input type="text" name="tvModel2017" value={formData.tvModel2017} onChange={handleChange} placeholder="TV Model 2017" />
      <input type="text" name="tab" value={formData.tab} onChange={handleChange} placeholder="Tab" />
      <button type="submit">Submit</button>
    </form></>
  );
  
}

export default DataForm;
