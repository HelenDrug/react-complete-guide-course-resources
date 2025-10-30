import { type ChangeEvent, type RefObject } from 'react';

interface ImagePickerInputProps {
  inputClass: string;
  name: string;
  onImagePicked: (image: string | null) => void;
  imageInput: RefObject<HTMLInputElement>;
}

export default function ImagePickerInput({
  inputClass,
  name,
  onImagePicked,
  imageInput,
}: ImagePickerInputProps) {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!file) {
        onImagePicked(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        onImagePicked(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <input
      className={inputClass}
      type="file"
      id={name}
      accept="image/png, image/jpeg"
      name={name}
      ref={imageInput}
      onChange={handleImageChange}
      required
    />
  );
}
