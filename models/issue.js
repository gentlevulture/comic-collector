import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tacoSchema = new Schema({
  title: String,
  stillInPrint: Boolean,
  collector: {type: Schema.Types.ObjectId, 'ref': "Profile"}
})

const Issue = mongoose.model('Issue', tacoSchema)

export {
  Issue
}