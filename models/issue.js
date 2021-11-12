import mongoose from 'mongoose'

const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: String,
  writer: String,
  penciler: String,
  publisher: String,
  stillInPrint: Boolean,
  collector: {type: Schema.Types.ObjectId, 'ref': "Profile"}
})

const Issue = mongoose.model('Issue', issueSchema)

export {
  Issue
}