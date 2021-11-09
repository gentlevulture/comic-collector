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

function create(req, res) {
  req.body.collector = req.user.profile._id
	req.body.stillInPrint = !!req.body.stillInPrint
  Issue.create(req.body)
  .then(issue => {
    res.redirect('/issues')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/issues')
  })
}

function show(req, res) {
  Issue.findById(req.params.id)
  .populate("collector")
  .then(issue => {
    res.render('issues/show', {
      issue,
      title: "show single issue"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/issues')
  })
}

function flipPrint(req, res) {
  Issue.findById(req.params.id)
  .then(issue => {
    issue.stillInPrint = !issue.stillInPrint
    issue.save()
    .then(()=> {
      res.redirect(`/issues/${issue._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/issues')
  })
}

function edit(req, res) {
  Issue.findById(req.params.id)
  .then(issue => {
    res.render('issues/edit', {
      issue,
      title: "edit comic"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/issues')
  })
}

function update(req, res) {
  Issue.findById(req.params.id)
  .then(issue => {
    if (issue.collector.equals(req.user.profile._id)) {
      req.body.stillInPrint = !!req.body.stillInPrint
      issue.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/issues/${issue._id}`)
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/issues`)
  })
}

function deleteIssue(req, res) {
  Issue.findById(req.params.id)
  .then(issue => {
    if (issue.owner.equals(req.user.profile._id)) {
      issue.delete()
      .then(() => {
        res.redirect('/issues')
      })
    } else {
      throw new Error ('🚫 Not authorized 🚫')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/issues')
  })
}

export {
  index,
  create, 
  show,
  flipPrint, 
  edit,
  update,
  deleteIssue as delete
}