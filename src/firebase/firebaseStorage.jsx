import {
	storage,
	ref,
	uploadBytes,
	getDownloadURL,
} from './firebase-config';

// Se encarga de subir file a storage y te retorna el url la imagen
export const subirFileStorage = async (file) => {
	const archivoRef = ref(storage, `${file.name}`);
	await uploadBytes(archivoRef, file);
	const traerFile = getDownloadURL(archivoRef);
	return traerFile;
};
