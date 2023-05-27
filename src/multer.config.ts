import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerOptions = {
    storage: diskStorage({
        destination: './img', // Directorio donde se almacenarán las imágenes
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const extension = extname(file.originalname);
            callback(null, uniqueSuffix + extension);
        },
    }),
};