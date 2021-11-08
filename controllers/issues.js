import { Issue } from '../models/issue.js'

function index(req, res) {
  Issue.find({})
  .then(issues => {
    res.render('issues/index', {
      title: "title",
      issues,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/issues")
  })
}

export {
  index
}