interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="pt-8 px-8 pb-0 rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col h-full bg-white">
      <h3 className="font-semibold text-neutral-950 mb-4">
        {name}
      </h3>
      <p className="text-[#364153] text-[14px] leading-[22.75px] mb-4 flex-1">
        {quote}
      </p>
      <p className="text-[#6a7282] text-[13px] leading-[18.571px] text-right mt-auto pb-8">
        {role}
      </p>
    </div>
  );
}