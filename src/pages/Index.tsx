const Index = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-xl md:text-3xl font-medium text-primary text-center drop-shadow">
          Something amazing starts here...
        </h1>
        <p className="text-sm text-primary/20 text-center mt-6">
          This is a SteerCode starting template.
          <br />
          Ask AI to make any changes.
        </p>
      </div>
    </div>
  );
};

export default Index;
