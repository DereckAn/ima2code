"use client";
import { AiPDF } from "@/components/ui/pdf-drag-drop";

const PDFai = () => {
  const DragPdf = async (file: File) => {
    // const pdf = await file.arrayBuffer();
    console.log(file);
  };

  // const transformImage2Code = async (file: File) => {
  //   const imag = await toBase64(file);
  //   await transform2Code(JSON.stringify({ imag }));
  // };

  return (
      <div className="relative top-0 z-[-2] h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-x-hidden">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl text-white">Ask PDF</h1>
          <p className="text-gray-300">
            Upload your PDF and Ask me anything about it, I will try to help you
          </p>
<div className="flex flex-col gap-4">
          <AiPDF pdf={DragPdf} />

</div>
        </div>
      </div>
  );
};

export default PDFai;
