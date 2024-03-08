 const image2codeSection = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Home</h1>
      <h2 className="text-4xl font-bold">{process.env.NODE_ENV}</h2>
      <p className="text-orange-400 font-semibold">
        {process.env.NEXT_PUBLIC_REACT_APP_API_URL_BASE}
      </p>
    </section>  
  );
};

export default image2codeSection;