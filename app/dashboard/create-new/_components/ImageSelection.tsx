"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

type ImageSelectionProps = {
  selectedImage: (file: File | null) => void;
};

const ImageSelection = ({ selectedImage }: ImageSelectionProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      selectedImage(selectedFile);
    }
  };

  return (
    <div>
      <label>Select Image of your room</label>
      <div className="mt-3">
        <label htmlFor="upload-image">
          <div
            className={`${
              file && "p-0 bg-white"
            } p-28 border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg`}
          >
            {!file ? (
              <Image
                src={"/image-upload.png"}
                width={70}
                height={70}
                alt="image-upload"
              />
            ) : (
              <Image
                src={URL.createObjectURL(file)}
                width={300}
                height={300}
                alt="file-image"
                className="w-[300px] h-[300px] object-cover"
              />
            )}
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          style={{
            display: "none",
          }}
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default ImageSelection;
