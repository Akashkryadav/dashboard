import  { useState, useEffect } from 'react';

const Forum = () => {
    // Initialize state to store current form input values
    const [formFields, setFormFields] = useState({
        assetName: '',
        seriesTitle: '',
        ticketId: '',
        targetDate: ''
    });

    // Initialize state to store submitted data
    const [submittedData, setSubmittedData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend on component mount using fetch
        fetch('http://localhost:5000/api/forms')
            .then(response => response.json())
            .then(data => setSubmittedData(data))
            .catch(error => console.log(error));
    }, []);

    // Handle input change
    const handleInputChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formFields),
        })
            .then(response => response.json())
            .then(data => {
                setSubmittedData([...submittedData, data]);
                setFormFields({
                    assetName: '',
                    seriesTitle: '',
                    ticketId: '',
                    targetDate: ''
                });
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Dynamic Form</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                <input
                    type="text"
                    name="assetName"
                    placeholder="Asset Name"
                    value={formFields.assetName}
                    onChange={handleInputChange}
                    style={{ marginRight: '5px' }}
                />
                <input
                    type="text"
                    name="seriesTitle"
                    placeholder="Series Title"
                    value={formFields.seriesTitle}
                    onChange={handleInputChange}
                    style={{ marginRight: '5px' }}
                />
                <input
                    type="text"
                    name="ticketId"
                    placeholder="Ticket ID"
                    value={formFields.ticketId}
                    onChange={handleInputChange}
                    style={{ marginRight: '5px' }}
                />
                <input
                    type="date"
                    name="targetDate"
                    placeholder="Target Date"
                    value={formFields.targetDate}
                    onChange={handleInputChange}
                    style={{ marginRight: '5px' }}
                />
                <button type="submit">Add Data</button>
            </form>

            <h2>Submitted Data</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Asset Name</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Series Title</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Ticket ID</th>
                        <th style={{ border: '1px solid #ccc', padding: '8px' }}>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((form, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{form.assetName || 'N/A'}</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{form.seriesTitle || 'N/A'}</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{form.ticketId || 'N/A'}</td>
                            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{form.targetDate || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Forum;
