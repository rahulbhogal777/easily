import multer from "multer";

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/public/files/');
    },
    filename: (req, file, cb) => {
        const name = new Date().toISOString() + '_' + file.originalname;
        cb(null, name);
    }
})

export const uploadFile = multer({
    storage: storageConfig,
})