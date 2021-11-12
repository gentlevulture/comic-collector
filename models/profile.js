import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dreamIssueSchema = new Schema ({
  title: String,
  writer: String,
  penciler: String,
  issue: Number,
  publisher: String,
}, {
  timestamps:true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  dreamIssues: [dreamIssueSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}