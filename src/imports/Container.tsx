import svgPaths from "./svg-hw8ykw7i6y";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] bottom-[44.99px] content-stretch flex items-center justify-center right-[24.33px] rounded-[1.67772e+07px] size-[42px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-black h-[24px] left-[309.84px] rounded-[4px] top-[182.99px] w-[67.484px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[8px] not-italic text-[12px] text-nowrap text-white top-[4.5px] whitespace-pre">1h 03min</p>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-[#669bbc] overflow-clip relative rounded-[10px] size-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}