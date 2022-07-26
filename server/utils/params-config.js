const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
      Bucket: 'user-images-58aa3414-b951-4f49-9a15-be2272ff8c84',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
    };
  
    return imageParams;
  };




  module.exports = params;