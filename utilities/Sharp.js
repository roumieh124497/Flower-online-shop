const sharp = require('sharp');
const uploadedFile = async (name, uploadPath, req) => {
  req.file.filename =
    `${name}-` + new Date().toISOString().replace(/:/g, '-') + '.jpeg';
  await sharp(req.file.buffer)
    .resize(300, 400)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/upload/images/${uploadPath}/${req.file.filename}`);
};

module.exports = uploadedFile;
