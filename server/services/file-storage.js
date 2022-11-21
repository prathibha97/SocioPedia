import multer from 'multer'


// file storage
export const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'src/public/assets')
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
  }
})

export const upload = multer({storage})