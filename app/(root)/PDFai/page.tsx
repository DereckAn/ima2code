"use client";
import { PdfDragDrop } from "@/components/ui/pdf-drag-drop";
import { Dropzone } from "@files-ui/react";

const PDFai = () => {
  const DragPdf = async (file: File) => {
    // const pdf = await file.arrayBuffer();
    console.log(file);
  };

  return (
    <>
      <div className="relative top-0 z-[-2] h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl text-white">Ask PDF</h1>
          <p className="text-gray-300">
            Upload your PDF and Ask me anything about it, I will try to help you
          </p>

          <PdfDragDrop pdf={DragPdf} />
          

        </div>
      </div>
    </>
  );
};

export default PDFai;
