import Image from 'next/image';

interface ImagePickerPreviewProps {
  pickedImage: string | null;
  previewClass: string;
}

export default function ImagePickerPreview({ pickedImage, previewClass }: ImagePickerPreviewProps) {
  return (
    <div className={previewClass}>
      {pickedImage ? (
        <Image src={pickedImage} alt={'The image selected by the user'} fill />
      ) : (
        <p>No image picked yet.</p>
      )}
    </div>
  );
}
