import  { useEffect, useState } from "react";

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/widget/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Asset Name</th>
          <th>Title Name</th>
          <th>TV Model 2024</th>
          <th>TV Model 2023</th>
          <th>TV Model 2017</th>
          <th>Tab</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.assetName}</td>
            <td>{item.titleName}</td>
            <td>{item.tvModel2024}</td>
            <td>{item.tvModel2023}</td>
            <td>{item.tvModel2017}</td>
            <td>{item.tab}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
