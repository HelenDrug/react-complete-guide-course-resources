import images from "../../../assets/images.ts";
import type { Image } from "../../../shared/types.ts";

interface ImagesSectionProps {
  onSelectImage: (image: Image) => void;
  selectedImage: Image | null;
}
export default function ImagesSection({
  onSelectImage,
  selectedImage,
}: ImagesSectionProps) {
  return (
    <ul id="new-challenge-images">
      {images.map((image: Image) => (
        <li
          key={image.alt}
          onClick={() => onSelectImage(image)}
          className={selectedImage === image ? "selected" : undefined}
        >
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
