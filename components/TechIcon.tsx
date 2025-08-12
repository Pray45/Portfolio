export default function TechIcon({ src, label, alt }) {
  return (
    <div className="relative group">
      <img
        className="w-10 cursor-pointer hover:scale-115 duration-300"
        src={src}
        alt={alt || label}
      />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 
        bg-black text-white text-xs  py-1 rounded opacity-0 
        group-hover:opacity-100 transition whitespace-nowrap z-10">
        {label}
      </span>
    </div>
  );
}
