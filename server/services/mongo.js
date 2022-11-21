import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

const connectDB = async()=>{
try {
  await mongoose.connect(MONGO_URI)
  console.log('connected to database')
} catch (err) {
  console.log(err)
}
}

export default connectDB