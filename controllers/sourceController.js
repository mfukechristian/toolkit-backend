import asyncHandler from "express-async-handler";
import imagekit from "../config/imageKitConfing.js";
import Source from "../models/SourceModel.js";

// @desc    Get all sources
// @route   GET /api/sources
// @access  Public
const getAllSources = asyncHandler(async (req, res) => {
  const sources = await Source.find({}).sort({ createdAt: -1 });
  res.json(sources);
});

// @desc    Get single source
// @route   GET /api/sources/:id
// @access  Public
const getSourceById = asyncHandler(async (req, res) => {
  const source = await Source.findById(req.params.id);
  if (source) {
    res.json(source);
  } else {
    res.status(404);
    throw new Error("Source not found");
  }
});

// @desc    Create a source
// @route   POST /api/sources
// @access  Private
const createSource = asyncHandler(async (req, res) => {
  const { name, description, category, url, image } = req.body;

  // Upload image to ImageKit if file is provided
  let imageUrl = "";
  if (req.file) {
    const uploadResponse = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/toolkit-sources",
    });
    imageUrl = uploadResponse.url;
  }

  const source = await Source.create({
    name,
    description,
    category,
    url,
    image: imageUrl || image, // Use uploaded image URL or provided image URL
  });

  res.status(201).json(source);
});

// @desc    Update a source
// @route   PUT /api/sources/:id
// @access  Private
const updateSource = asyncHandler(async (req, res) => {
  const source = await Source.findById(req.params.id);

  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }

  let imageUrl = source.image;

  // Handle image update if file is provided
  if (req.file) {
    // Delete old image if it exists
    if (source.image) {
      const fileId = source.image.split("/").pop().split(".")[0];
      try {
        await imagekit.deleteFile(fileId);
      } catch (error) {
        console.error("Error deleting old image:", error);
      }
    }

    // Upload new image
    const uploadResponse = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/toolkit-sources",
    });
    imageUrl = uploadResponse.url;
  } else if (req.body.image) {
    // If no file but image URL provided in body
    imageUrl = req.body.image;
  }

  const updatedSource = await Source.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name || source.name,
      description: req.body.description || source.description,
      category: req.body.category || source.category,
      url: req.body.url || source.url,
      image: imageUrl,
    },
    { new: true }
  );

  res.json(updatedSource);
});

// @desc    Delete a source
// @route   DELETE /api/sources/:id
// @access  Private
const deleteSource = asyncHandler(async (req, res) => {
  const source = await Source.findById(req.params.id);

  if (!source) {
    res.status(404);
    throw new Error("Source not found");
  }

  // Delete image from ImageKit if exists
  if (source.image) {
    const fileId = source.image.split("/").pop().split(".")[0];
    try {
      await imagekit.deleteFile(fileId);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  }

  await source.deleteOne();
  res.json({ message: "Source removed" });
});

export {
  getAllSources,
  getSourceById,
  createSource,
  updateSource,
  deleteSource,
};
