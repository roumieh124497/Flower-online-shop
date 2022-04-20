const multer = require('multer');

//no need for this one because we will use sharp
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/upload/images/flowers');
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       'flower' +
//         new Date().toISOString().replace(/:/g, '-') +
//         file.originalname,
//     );
//   },
// });

//saving to memory and with charp we save in a disk
const storage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype == 'image/jpeg' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/tiff'
  ) {
    //correct format
    return cb(null, true);
  } else {
    //wrong format
    return cb(req.flash('message', 'not an image'), false);
  }
};

module.exports = {
  storage,
  multerFilter,
};
