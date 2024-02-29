"use client";
import { AiPDF } from "@/components/ui/pdf-drag-drop";

const PDFai = () => {
  const DragPdf = async (file: File) => {
    console.log(file);
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="max-w-5xl w-full mx-auto p-10">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl text-white pb-1">Ask PDF</h1>
          <p className="text-gray-300 pb-10">
            Upload your PDF and Ask me anything about it, I will try to help you
          </p>
          <div className="flex flex-col gap-4">
            <AiPDF pdf={DragPdf} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PDFai;
