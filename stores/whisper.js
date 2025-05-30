import {
  Whisper
} from '../database.js'

// Obtiene todos los whispers y reemplaza el campo 'author' (que es un ObjectId)
// por el documento del usuario asociado, pero solo incluyendo el campo 'username'.
const getAll = () => Whisper.find().populate('author', 'username')
const getById = id => Whisper.findById({ _id: id }).populate('author', 'username')
const create = async (message, authorId) => {
  const whisper = new Whisper({ message, author: authorId })
  await whisper.save()
  return whisper
}
const updateById = async (id, message) => Whisper.findOneAndUpdate({ _id: id }, { message }, { new: false })
const deleteById = async (id) => Whisper.deleteOne({ _id: id })

export { getAll, getById, create, updateById, deleteById }
