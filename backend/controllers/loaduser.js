const auth = require("../models/userSchema");
const course = require("../models/course.schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
exports.loadUser = async (_id) => {
  try {
    const theUser = await auth.findById(_id).select("-password");
    if (theUser.role == "admin") {
      let dataToSend = {};
      dataToSend.user = theUser;
      dataToSend.token = await jwt.sign(
        { id: theUser._id },
        process.env.SECRETKEY
      );
      dataToSend.courses = [];
      const totalCourse = await course.find({});
      for (let i = 0; i < totalCourse.length; i++) {
        let toAdd = {};
        toAdd._id = totalCourse[i]._id;
        toAdd.course = totalCourse[i].cName;
        toAdd.totalYear = totalCourse[i].Years.length;
        toAdd.totalSem = totalCourse[i].Semesters.length;
        toAdd.totalStudent = await auth.count({
          role: "student",
          course: totalCourse[i]._id,
        });
        toAdd.totalTeacher = await auth.count({
          role: "teacher",
          course: totalCourse[i]._id,
        });
        dataToSend.courses.push(toAdd);
      }
      return dataToSend;
    }
    if (theUser.role == "teacher") {
      let dataToSend = {};
      dataToSend.user = theUser;
      dataToSend.token = await jwt.sign(
        { id: theUser._id },
        process.env.SECRETKEY
      );
      dataToSend.course=await course.findById(theUser.course)
      dataToSend.students=await auth.find({role:"student",course:theUser.course})
      return dataToSend
    }
  } catch (err) {
    console.log(err);
  }
};
