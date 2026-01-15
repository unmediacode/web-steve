import svgPaths from "./svg-to3lcgzlpn";

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
    <div className="absolute bg-[rgba(255,255,255,0.3)] bottom-[14.99px] content-stretch flex items-center justify-center right-[17px] rounded-[1.67772e+07px] size-[42px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#669bbc] h-[218.992px] overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[265.38px] top-[4px] w-[32.875px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">1993</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#003049] text-[16px] top-[-1px] w-[266px]">The Man Who Loves Gary Lineker</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#003049] text-[14px] top-[0.5px] w-[373px]">The personal video diary of Ylli Hasani, a rural doctor in Albania, revealing a life marked by dignity, resilience and longing.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[100.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-end left-[310px] px-[7px] py-[4px] rounded-[4px] top-[343px]" data-name="Container2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">1h 03min</p>
    </div>
  );
}

export default function VideoCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="VideoCard">
      <Container1 />
      <Container3 />
      <Container2 />
    </div>
  );
}