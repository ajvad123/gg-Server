const events = require('../Models/eventModel')

exports.addEvents = async (req, res) => {

  const userId = req.payload
  const { etitle, etype, elocation, etime, eticket } = req.body
  const eimage = req.file.filename

  console.log(etitle, etype, elocation, etime, eticket, userId, eimage);

  try {
    const existingEvents = await events.findOne({ etitle })

    if (existingEvents) {
      res.status(406).json("Event Already Added!!")
    }
    else {
      const newEvent = new events({
        etitle, etype, elocation, etime, eticket, eimage, userId
      })
      await newEvent.save()
      res.status(200).json(newEvent)
    }

  } catch (err) {
    console.log(err);
    res.status(401).json(err)
  }

}


exports.allEvents = async (req, res) => {

  try {
    const result = await events.find()

    if (result) {
      res.status(200).json(result)

    } else {
      res.status(404).json("No Events Available")
    }

  }
  catch (err) {
    res.status(404).json(err)
  }

}

exports.dashEvents = async (req, res) => {



  try {
    const result = await events.find().limit(3)

    console.log(result);

    if (result) {

      res.status(200).json(result)

    } else {
      res.status(404).json("No project available")
    }

  } catch (err) {

    res.status(404).json(err)

  }



}

exports.dashAllEvents = async (req, res) => {

  console.log(req.query);
  const search= req.query.search

  try {
    const query={
      etitle:{$regex:search,$options:'i'},
    }
    const result = await events.find(query)
   
   
    // console.log(result);

    if (result) {

      res.status(200).json(result)

    } else {
      res.status(404).json("No project available")
    }

  } catch (err) {

    res.status(404).json(err)

  }



}


exports.updateEvents = async (req, res) => {

  const { etitle, etype, elocation, etime, eticket, eimage } = req.body
  const userId = req.payload
  const image = req.file ? req.file.filename : eimage
  const { pid } = req.params

  try {

    const editEvent = await events.findByIdAndUpdate({ _id: pid }, { etitle, etype, elocation, etime, eticket, eimage: image, userId }, { new: true })
    await editEvent.save()

    res.status(200).json(editEvent)

  } catch (err) {

    console.log(err);
    res.status(404).json(err)
  }





}


exports.removeEvents = async (req, res) => {
  const { pid } = req.params;

  try {
    const result = await events.findByIdAndDelete({_id:pid});
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
