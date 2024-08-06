/* eslint-disable no-undef */


 
//  // eslint-disable-next-line no-undef
 const express = require('express');
 // eslint-disable-next-line no-undef
 const cors = require('cors');
 // eslint-disable-next-line no-undef
 const bodyParser = require('body-parser');
 // eslint-disable-next-line no-undef
//  const db =require('./data/dbconnection');
 const app = express();


//  eslint-disable-next-line no-undef
 const PORT = process.env.PORT || 5000;

 app.use(cors());
 app.use(bodyParser.json());


 // Mock data for widgets
 const widgetData = [
   { title: "Total AVOD", content: 9835 },
  { title: "In-progress VOD", content: 125 },
   { title: "Fail AVOD", content: 166 },
  { title: "On-Hold AOD", content: 45 }
 ];

 // Endpoint to get widget data
 app.get('/api/widgets', (req, res) => {
   res.json(widgetData);
 });

 // Endpoint to update widget data
 app.put('/api/widgets/:id', (req, res) => {
   const { id } = req.params;
   const { content } = req.body;

 const widget = widgetData.find(w => w.id === parseInt(id));
   if (widget) {
     widget.content = content;
     res.json(widget);
   } else {
     res.status(404).send('Widget not found');
   }
 });

 app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
 });



// // eslint-disable-next-line no-undef
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Widget = require('./models/widgetModel');
// const app = express();

// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/widgets', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// app.use(cors());
// app.use(bodyParser.json());

// // Endpoint to get widget data
// app.get('/api/widgets', async (req, res) => {
//   try {
//     const widgets = await Widget.find();
//     res.json(widgets);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
// app.post('/api/init-widgets', async (req, res) => {
//   const sampleData = [
//     { title: "Total AVOD", content: 9835 },
//     { title: "In-progress VOD", content: 125 },
//     { title: "Fail AVOD", content: 166 },
//     { title: "On-Hold AOD", content: 45 }
//   ];

//   try {
//     await Widget.insertMany(sampleData);
//     res.send('Sample data added');
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Endpoint to update widget data
// app.put('/api/widgets/:id', async (req, res) => {
//   const { id } = req.params;
//   const { content } = req.body;

//   try {
//     const widget = await Widget.findByIdAndUpdate(id, { content }, { new: true });
//     if (widget) {
//       res.json(widget);
//     } else {
//       res.status(404).send('Widget not found');
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
