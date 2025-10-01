/**
 * Utilitaire pour générer les URLs Cloudinary
 * Combine l'URL de base, la version et le nom de l'image depuis les variables d'environnement
 * @param imageName - Le nom de l'image dans Cloudinary (ex: 'photo_abc123.jpg')
 * @returns L'URL complète de l'image sur Cloudinary
 */
export const getCloudinaryUrl = (imageName: string) => {
  return `${import.meta.env.VITE_CLOUDINARY_URL}/${import.meta.env.VITE_CLOUDINARY_VERSION}/${imageName}`;
};