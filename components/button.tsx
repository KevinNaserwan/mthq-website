export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-[#006C39] text-white font-medium py-2 px-4 rounded mt-2 inline-flex">
      {text}
    </button>
  );
}
