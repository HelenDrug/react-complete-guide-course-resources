'use client';
import classes from './ImagePicker.module.css';
import { useRef, useState } from 'react';
import ImagePickerInput from './ImagePickerInput';
import ImagePickerPreview from './ImagePickerPreview';

interface ImagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const { picker, controls, button, preview, input } = classes;

  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  return (
    <div className={picker}>
      <label htmlFor={name}>{label}</label>
      <div className={controls}>
        <ImagePickerPreview pickedImage={pickedImage} previewClass={preview} />
        <ImagePickerInput
          inputClass={input}
          name={name}
          onImagePicked={setPickedImage}
          imageInput={imageInput}
        />
        <button className={button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
