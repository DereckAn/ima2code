"use client";
import { Dropzone, ExtFile, FileMosaic } from "@files-ui/react";
import { useState } from "react";

export const DragAndDrop = () => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (files: ExtFile[]) => {
    console.log(files);
    setFiles(files);
  };
  return (
    <Dropzone
      accept="image/*"
      label="Drag and Drop you IMAGES"
      onDrop={console.log}
      onChange={updateFiles}
      header={false}
      footer={false}
      multiple={false}
      maxFiles={1}
    >
      {files.map((file, index) => {
        return <FileMosaic key={index} {...file} preview />;
      })}
    </Dropzone>
  );
};
