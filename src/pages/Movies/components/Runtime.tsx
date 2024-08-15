const Runtime = ({ runtime }: { runtime: number }) => {
  const formatRuntime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return <p className="text-sm text-gray-500">{formatRuntime(runtime)}</p>;
};

export default Runtime;
