import  { useState } from 'react';
import { CSVLink } from 'react-csv';

// eslint-disable-next-line react/prop-types
const ReportSheet = ({ data, onSave }) => {
  const [tableData, setTableData] = useState(data);

  const handleSelectChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const headers = [
    { label: "Asset Name", key: "assetName" },
    { label: "Title Name", key: "titleName" },
    { label: "TV Model 2024", key: "tvModel2024" },
    { label: "TV Model 2023", key: "tvModel2023" },
    { label: "TV Model 2017", key: "tvModel2017" },
    { label: "Tab", key: "tab" },
    { label: "Mobile", key: "mobile" },
    {label: "Fhub", key: "fhub" },
    { label: "Remarks", key: "remarks" },
  ];

  const handleSave = () => {
    onSave(tableData);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Asset Name</th>
            <th className="py-2 px-4 border-b">Title Name</th>
            <th className="py-2 px-4 border-b">TV Model 2024</th>
            <th className="py-2 px-4 border-b">TV Model 2023</th>
            <th className="py-2 px-4 border-b">TV Model 2017</th>
            <th className="py-2 px-4 border-b">Tab</th>
            <th className="py-2 px-4 border-b">Mobile</th>
            <th className="py-2 px-4 border-b">Fhub</th>
            <th className="py-2 px-4 border-b">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{row.assetName}</td>
              <td className="py-2 px-4 border-b">{row.titleName}</td>
              {['tvModel2024', 'tvModel2023', 'tvModel2017', 'tab'].map(field => (
                <td key={field} className="py-2 px-4 border-b">
                  <select
                    value={row[field]}
                    onChange={(e) => handleSelectChange(index, field, e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="Select All">Select All</option>
                    <option value="Pass">Pass</option>
                    <option value="Fail">Fail</option>
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Data
        </button>
        <CSVLink
          data={tableData}
          headers={headers}
          filename="table_data.csv"
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Download CSV
        </CSVLink>
      </div>
    </div>
  );
};

export default ReportSheet;
