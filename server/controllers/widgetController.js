
// eslint-disable-next-line no-undef
const Widget = require('../models/widgetModel');

const getWidgets = async (req, res) => {
  try {
    const widgets = await Widget.find();
    res.json(widgets);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createWidget = async (req, res) => {
  try {
    const widget = new Widget(req.body);
    await widget.save();
    res.status(201).json(widget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWidget = async (req, res) => {
  try {
    const widget = await Widget.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!widget) {
      return res.status(404).send('Widget not found');
    }
    res.status(200).json(widget);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// eslint-disable-next-line no-undef
module.exports = {
  getWidgets,
  createWidget,
  updateWidget,
};
