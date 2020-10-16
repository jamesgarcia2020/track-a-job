const Track = require('../../models/track');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update,
    usertracks
  };
  
  async function usertracks(req, res) {
    console.log('index function', req.params.id)
    const tracks = await Track.find({ 'user': req.params.id})
    console.log(tracks);
    res.status(200).json(tracks);

  }
  async function index(req, res) {
    const tracks = await Track.find({});
    res.status(200).json(tracks);
  }
  
  async function show(req, res) {
    const track = await Track.findById(req.params.id);
    res.status(200).json(track);
  }
  
  async function create(req, res) {
    const track = await Track.create(req.body);
    res.status(201).json(track);
  }
  
  async function deleteOne(req, res) {
    const deletedTrack = await Track.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrack);
  }
  
  async function update(req, res) {
    const updatedTrack = await Track.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTrack);
  }