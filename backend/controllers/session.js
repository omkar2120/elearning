const Subject = require("../models/subject.schema");
const user = require("../models/userSchema");
const Session = require("../models/session.schema");

//create session
exports.createsession = async (req, res) => {
  try {
    const { sessionname, subject, topic, subtopic, date, time, isCostom } =
      req.body;
    console.log(req.body);
    let theSession;
    if (isCostom)
      theSession = new Session({
        sessionname,
        subject,
        date,
        time,
        teacher: req._id,
      });
    else
      theSession = new Session({
        subject,
        topic,
        subtopic,
        date,
        time,
        teacher: req._id,
      });
    const newsession = await theSession.save();
    if (!newsession) return res.status(400).send("Session Not Created!");
    return res.status(200).send("Session  Created!");
  } catch (err) {
    console.log(err);
    return res.status(400).send("Session Not Created!");
  }
};

//get all sessions
exports.getsession = async (req, res) => {
  try {
    //  console.log("working")
    const { _id, course } = req;
    const dataToSend = [];
    const theSubjects = await Subject.find({ course });
    for (let i = 0; i < theSubjects.length; i++) {
      const { _id, Name, course, Semester } = theSubjects[i];
      let dataToAdd = { _id, Name, course, Semester };
      let topics = [];
      for (let j = 0; j < theSubjects[i].topics.length; j++) {
        const { Name } = theSubjects[i].topics[j];
        let topic = { Name };
        let subTopics = [];
        for (let k = 0; k < theSubjects[i].topics[j].SubTopics.length; k++) {
          let subTopicIs = theSubjects[i].topics[j].SubTopics[k];
          let subtopic = { Name: subTopicIs };
          let session = await Session.findOne({
            subject: _id,
            topic: Name,
            subtopic: subTopicIs,
          })
            .select(["-subject", "-topic", "-subtopic"])
            .populate("teacher", ["fullname", "email", "mobile"]);
          subtopic.session = session;
          subTopics.push(subtopic);
        }
        topic.subTopic = subTopics;
        topics.push(topic);
      }
      dataToAdd.topics = topics;
      dataToSend.push(dataToAdd);
    }
    return res.status(200).send(dataToSend);
  } catch (err) {
    console.log(err);
    return res.status(400).json("something went wrong");
  }
};

//get session according to the query
exports.getsesbyquery = async (req, res) => {
  const datequery = req.query.date;
  const subquery = req.query.subject;
  try {
    let sessions;

    if (datequery) {
      sessions = await Session.find().sort({ createdAT: -1 }).limit(6);
    } else if (subquery) {
      sessions = await Session.find({
        subject: {
          $in: [subquery],
        },
      });
    } else {
      sessions = await Session.findById(req.params.id);
    }
    return res.status(200).json(sessions);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
};
