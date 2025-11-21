import images from "../../../assets/images.ts";
import type { Image } from "../../../shared/types.ts";
import {motion, stagger} from "framer-motion";

interface ImagesSectionProps {
  onSelectImage: (image: Image) => void;
  selectedImage: Image | null;
}
export default function ImagesSection({
  onSelectImage,
  selectedImage,
}: ImagesSectionProps) {
  return (
    <motion.ul id="new-challenge-images" variants={{
        visible: {
          transition: {
            delayChildren: stagger(0.1),
          },
        },
        hidden: {},
    }}>
      {images.map((image: Image) => (
        <motion.li
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring" }}
          key={image.alt}
          onClick={() => onSelectImage(image)}
          className={selectedImage === image ? "selected" : undefined}
        >
          <img src={image.src} alt={image.alt} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
