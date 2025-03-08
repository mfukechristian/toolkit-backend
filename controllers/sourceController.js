import Source from "../models/SourceModel.js";

// Get all sources
export const getSources = async (req, res) => {
  try {
    const sources = await Source.find({});
    res.json(sources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single source by ID
export const getSourceById = async (req, res) => {
  try {
    const source = await Source.findById(req.params.id);
    if (source) {
      res.json(source);
    } else {
      res.status(404).json({ message: "Source not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new source
export const createSource = async (req, res) => {
  try {
    const { name, description, category, url } = req.body;
    const source = new Source({
      name,
      description,
      category,
      image: req.body.image || "",
      url,
    });

    const createdSource = await source.save();
    res.status(201).json(createdSource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update source
export const updateSource = async (req, res) => {
  try {
    const source = await Source.findById(req.params.id);

    if (source) {
      source.name = req.body.name || source.name;
      source.description = req.body.description || source.description;
      source.category = req.body.category || source.category;
      source.image = req.body.image || source.image;
      source.url = req.body.url || source.url;

      const updatedSource = await source.save();
      res.json(updatedSource);
    } else {
      res.status(404).json({ message: "Source not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete source
export const deleteSource = async (req, res) => {
  try {
    const source = await Source.findById(req.params.id);

    if (source) {
      await Source.deleteOne({ _id: req.params.id });
      res.json({ message: "Source removed" });
    } else {
      res.status(404).json({ message: "Source not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
