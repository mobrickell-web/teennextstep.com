export default function NumberedItem({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#194783] text-[clamp(10px,1vw,12px)] font-bold text-white">
        {index}
      </span>
      <span className="text-[clamp(11px,1.2vw,13.64px)] font-bold leading-[22.16px] text-black">
        {label}
      </span>
    </li>
  );
}
