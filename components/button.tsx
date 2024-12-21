export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-[#006C39] text-white lg:font-medium lg:py-2 lg:px-4 lg:rounded lg:mt-2 inline-flex">
      {text}
    </button>
  );
}
