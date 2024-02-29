"use client";
import { Dropzone, ExtFile, FileMosaic } from "@files-ui/react";
import { useState } from "react";

interface AiPDFProps {
  pdf: (file: File) => Promise<void>;
}

export const AiPDF = ({ pdf }: AiPDFProps) => {
  const [files, setFiles] = useState<ExtFile[]>([]);
  const updateFiles = (files: ExtFile[]) => {
    const file = files[0].file;
    if (file != null) pdf(file);
    console.log(files);
    setFiles(files);
  };
  return (
    <Dropzone
      accept="application/pdf"
      label="Drag and Drop you PDF"
      onChange={updateFiles}
      header={false}
      footer={false}
      multiple={false}
      maxFiles={1}
    >
      {files.map((file, index) => {
        return <FileMosaic key={file.size} {...file} preview />;
      })}
    </Dropzone>
  );
};
