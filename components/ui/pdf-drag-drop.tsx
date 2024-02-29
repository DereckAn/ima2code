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
    if (file != null) pdf(file); // para recuperar el file. Si tienes dudasd investiga el objeto File. Para pasarlo al API tenemos que pasar a base 64
    // transformImage2Code(files[0].file); // Esto no funciona porque no es un file. Es un ExtFile.
    // base 64 es transformar una imagen en un string
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
