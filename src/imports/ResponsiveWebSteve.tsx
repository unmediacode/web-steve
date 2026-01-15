import svgPaths from "./svg-xuw6fhjzwm";


function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.328px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">A Worker of the 20th Century</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[388px]">Filmed in Galicia and in the Galician language. The film tells the life story of Manuel Barros, a shipyard worker with communist leanings during the Franco dictatorship.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black h-[28px] relative rounded-[4px] shrink-0 w-[62.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[62.578px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">32 min</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[51.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[51.938px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">1998</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[389.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[389.328px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[136.25px] items-start left-0 top-[234.99px] w-[389.328px]" data-name="Container">
      <Heading2 />
      <Paragraph />
      <Container2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[218.992px] left-0 top-0 w-[389.328px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/films/worker.png" />
    </div>
  );
}

function Container4() {
  return <div className="absolute h-[229.616px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.215px]" data-name="Container" />;
}

function VideoCard() {
  return <div className="absolute h-[218.992px] left-0 top-0 w-[389.328px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.33 218.99\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.66 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.33px] rounded-[1.67772e+07px] size-[42px] top-[162.01px]" data-name="Container">
      <VideoCard1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#669bbc] h-[218.992px] left-0 overflow-clip rounded-[10px] top-0 w-[389.328px]" data-name="Container">
      <ImageWithFallback />
      <Container4 />
      <VideoCard />
      <Container5 />
    </div>
  );
}

function VideoCard2() {
  return (
    <div className="absolute h-[371.25px] left-0 top-0 w-[389.328px]" data-name="VideoCard">
      <Container3 />
      <Container6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.336px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Nicolas Economou</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[368px]">An intimate portrait of Cypriot pianist and composer Nicolas Economou, exploring his musical sensitivity and cultural legacy.</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-black h-[28px] relative rounded-[4px] shrink-0 w-[75.273px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[75.273px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">1h 35min</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[52.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[52.047px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">2014</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[389.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[389.336px]">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[136.25px] items-start left-0 top-[235px] w-[389.336px]" data-name="Container">
      <Heading4 />
      <Paragraph1 />
      <Container9 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/films/nicolas-economou.png" />
    </div>
  );
}

function Container11() {
  return <div className="absolute h-[229.624px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.223px]" data-name="Container" />;
}

function VideoCard3() {
  return <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.34 219\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.67 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.34px] rounded-[1.67772e+07px] size-[42px] top-[162.02px]" data-name="Container">
      <VideoCard4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#669bbc] h-[219px] left-0 overflow-clip rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <ImageWithFallback1 />
      <Container11 />
      <VideoCard3 />
      <Container12 />
    </div>
  );
}

function VideoCard5() {
  return (
    <div className="absolute h-[371.25px] left-[421.33px] top-0 w-[389.336px]" data-name="VideoCard">
      <Container10 />
      <Container13 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.336px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Above All Compassion: The Story of XP School</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[338px]">A three-year observational study of XP School in Doncaster and its expeditionary learning approach.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-black h-[28px] relative rounded-[4px] shrink-0 w-[62.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[62.711px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">38 min</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[53.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[53.523px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">2020</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-[389.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[389.336px]">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113.5px] items-start left-0 top-[235px] w-[389.336px]" data-name="Container">
      <Heading5 />
      <Paragraph2 />
      <Container16 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/images/films/xp-school.png" />
    </div>
  );
}

function Container18() {
  return <div className="absolute h-[229.624px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.223px]" data-name="Container" />;
}

function VideoCard6() {
  return <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.34 219\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.67 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.34px] rounded-[1.67772e+07px] size-[42px] top-[162.02px]" data-name="Container">
      <VideoCard7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#669bbc] h-[219px] left-0 overflow-clip rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <ImageWithFallback2 />
      <Container18 />
      <VideoCard6 />
      <Container19 />
    </div>
  );
}

function VideoCard8() {
  return (
    <div className="absolute h-[371.25px] left-[842.66px] top-0 w-[389.336px]" data-name="VideoCard">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[371.25px] left-[179px] top-[688px] w-[1232px]" data-name="Section">
      <VideoCard2 />
      <VideoCard5 />
      <VideoCard8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[84px] left-[24px] top-0 w-[720px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[84px] left-[360.48px] not-italic text-[#f2f1f1] text-[56px] text-center text-nowrap top-0 tracking-[-3px] translate-x-[-50%] whitespace-pre">Steve Sklair</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[52px] leading-[26px] left-[24px] not-italic text-[16px] text-center text-nowrap text-white top-[108px] w-[720px] whitespace-pre" data-name="Paragraph">
      <p className="absolute left-[360.09px] top-[-1px] translate-x-[-50%]">Steve is an all round film maker who has worked</p>
      <p className="absolute left-[360.06px] top-[25px] translate-x-[-50%]">with all the major UK broadcasters.</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-black h-[48px] left-[309.03px] rounded-[4px] top-[192px] w-[149.938px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[75px] not-italic text-[16px] text-center text-nowrap text-white top-[11px] translate-x-[-50%] whitespace-pre">Learn More</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph3 />
      <Link />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[432px] items-start left-0 pb-0 pt-[96px] px-[411px] top-[1139.25px] w-[1590px]" data-name="Section">
      <Container21 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.328px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Yaba Badoe</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[317px]">Steve is a pleasure to work with. A consummate professional, he has great ideas and knows how to implement them. Since we worked together Steve has become an experienced, camera operator, director and producer. Most important of all he knows how to engage with different kinds of people and get the best out of them. I strongly recommend him.</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[326.19px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Documentary Filmmaker and Author</p>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[179px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[80px] w-[389.328px]" data-name="TestimonialCard">
      <Heading6 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Bob Long</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[325px]">In all my time in TV I never met a more all-round talented programme maker. When I got the job at the BBC the first thing I did was to get Steve on board. He started as an AP (Assistant Producer), within a year he was a Producer and a year later a Series Producer. He became my troubleshooter – any commission that was extremely difficult I gave it to him, like working with impossibly difficult presenters or huge series that were logistical nightmares. He never failed to deliver…often more than I hoped for.</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[325.5px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Executive Producer BBC</p>
      </div>
    </div>
  );
}

function TestimonialCard1() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[600.33px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[80px] w-[389.336px]" data-name="TestimonialCard">
      <Heading7 />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Madeleine Holt</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[319px]">Steve Sklair is an exceptionally talented filmmaker, and a real joy to work with. Steve has an unerring feel for the story in factual and documentary programmes, and a great way of getting the best out of contributors. I have booked Steve as director, as camera, as editor. He wears his experience and knowledge lightly, but you can always trust him to frame an arresting shot, to cut a captivating sequence, to lead a happy team. Steve delivers.</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[325.64px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Producer / Reporter</p>
      </div>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[1021.66px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[80px] w-[389.336px]" data-name="TestimonialCard">
      <Heading8 />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#fdf0d5] h-[548.82px] left-0 top-[1571.25px] w-[1590px]" data-name="Section">
      <TestimonialCard />
      <TestimonialCard1 />
      <TestimonialCard2 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">NAVIGATION</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[39.039px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[34.344px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Films</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[81.203px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">About Steve</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[129.328px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Working With Steve</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[81.375px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Project Brief</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-0 top-0 w-[378.664px]" data-name="Container">
      <Heading9 />
      <List />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">EQUIPMENT / EDITING</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">CAMERAS</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Sony Z90</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Panasonic GH5</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">OSMO Pocket Gimbal</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">DJI Mini 3</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">SOFTWARE</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Final Cut Studio Pro</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[192px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-[426.66px] top-0 w-[378.664px]" data-name="Container">
      <Heading10 />
      <Container25 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">+44 7743 671868</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">steve_sklair@yahoo.co.uk</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">London</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-[853.33px] top-0 w-[378.664px]" data-name="Container">
      <Heading12 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container26 />
      <Container28 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-0 top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0">
              <path d={svgPaths.p1a8d3600} fill="var(--fill-0, #D30000)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[117.96px] top-0 w-[23.227px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[8.15%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 0">
              <path d={svgPaths.p29ba47e0} fill="var(--fill-0, #D30000)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[144.98px] top-0 w-[11.867px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[2.19%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 0">
              <path d={svgPaths.p14fba900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[3.19px] top-0 w-[22.711px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[2.35%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0">
              <path d={svgPaths.p365db700} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[30.89px] top-0 w-[23.945px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[1.32%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 0">
              <path d={svgPaths.p9694180} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[58.48px] top-0 w-[17.828px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[1.97%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0">
              <path d={svgPaths.p2fd2d080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[78.13px] top-0 w-[25.305px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[4.21%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0">
              <path d="M0 0V0H5.91949V0H0Z" fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[108.35px] top-0 w-[6.18px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function LogoSklair() {
  return (
    <div className="absolute h-0 left-[536px] top-[49px] w-[160px]" data-name="LogoSklair">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[16px] left-0 top-[65px] w-[1232px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[616.39px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">camera, editor and director</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[16px] left-0 top-[97px] w-[1232px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[616.35px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">© 2025 Steve Sklair LTD. All rights reserved.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[113px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4a5565] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <LogoSklair />
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#001a28] box-border content-stretch flex flex-col gap-[64px] h-[545px] items-start left-0 pb-0 pt-[64px] px-[179px] top-[2120.07px] w-[1590px]" data-name="Footer">
      <Container29 />
      <Container37 />
    </div>
  );
}

function Source() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[536px] items-start left-0 opacity-40 overflow-clip pb-0 pl-0 pr-[1590px] top-0 w-[1590px]" data-name="Video">
      <Source />
    </div>
  );
}

function Container38() {
  return <div className="absolute h-[536px] left-0 opacity-[0.85] top-0 w-[1590px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="font-['Inter:Bold',sans-serif] font-bold h-[140px] leading-[70px] not-italic relative shrink-0 text-[#feeded] text-[64px] text-center text-nowrap tracking-[-2px] w-full whitespace-pre" data-name="Heading 1">
      <p className="absolute left-[424.56px] top-0 translate-x-[-50%]">Camera, editor</p>
      <p className="absolute left-[424.02px] top-[70px] translate-x-[-50%]">and director.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[623.85px] top-[3px] w-[5.883px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-gray-100 text-nowrap whitespace-pre">|</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[421.26px] not-italic text-[18px] text-center text-gray-100 text-nowrap top-0 translate-x-[-50%] whitespace-pre">Honest documentaries, told with a human gaze.</p>
      <Text />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-white h-[48px] left-[274.26px] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[2px] w-[142.344px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[71.5px] not-italic text-[16px] text-black text-center text-nowrap top-[11px] translate-x-[-50%] whitespace-pre">View work</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[52px] left-[432.6px] rounded-[4px] top-0 w-[141.141px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[71px] not-italic text-[16px] text-center text-nowrap text-white top-[13px] translate-x-[-50%] whitespace-pre">About me</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[280px] items-start left-[347px] px-[24px] py-0 top-[128px] w-[896px]" data-name="Container">
      <Heading />
      <Paragraph16 />
      <Container39 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute h-[536px] left-0 overflow-clip top-[72px] w-[1590px]" data-name="Section">
      <Video />
      <Container38 />
      <Container40 />
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute bg-[#fdf0d5] h-[2665.07px] left-0 top-0 w-[1590px]" data-name="HomePage">
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
      <Section3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 36">
          <path d={svgPaths.p20e3def2} fill="var(--fill-0, #D30000)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[94.37px] top-[1.98px] w-[18.586px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[3.52%] left-0 right-[8.15%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <path d={svgPaths.p373e0c80} fill="var(--fill-0, #D30000)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.008px] items-start left-[115.99px] top-[3.66px] w-[9.492px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[37px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[0.21%] left-0 right-[2.19%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 37">
          <path d={svgPaths.p29f53e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37px] items-start left-[2.56px] top-[1.74px] w-[18.172px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[2.35%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 36">
          <path d={svgPaths.p204b2470} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[24.71px] top-[2.07px] w-[19.156px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[1.32%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 36">
          <path d={svgPaths.pf36fc40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[46.78px] top-[2.07px] w-[14.266px]" data-name="Container">
      <Icon11 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[1.97%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 36">
          <path d={svgPaths.p211cb480} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[62.5px] top-[2.07px] w-[20.242px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[4.21%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 36">
          <path d={svgPaths.p1d9cb9d0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[86.68px] top-[2.07px] w-[4.945px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function LogoSklair1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="LogoSklair">
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[40px] relative shrink-0 w-[128px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[128px]">
        <LogoSklair1 />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#c1121f] h-[2px] left-0 top-[26px] w-[44.617px]" data-name="Text" />;
}

function Link9() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[44.617px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Home</p>
      <Text1 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[28px] left-[76.62px] top-0 w-[39.25px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Films</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[28px] left-[147.87px] top-0 w-[42.891px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Steve</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[28px] left-[222.76px] top-0 w-[147.797px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Working With Steve</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[28px] left-[402.56px] top-0 w-[60.141px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Contact</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[28px] relative shrink-0 w-[462.695px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[462.695px]">
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#001a28] box-border content-stretch flex h-[72px] items-center justify-between left-0 px-[179px] py-0 top-0 w-[1590px]" data-name="Header">
      <Link8 />
      <Navigation />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_60_461)" id="Icon">
          <path d={svgPaths.p275bd980} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_60_461">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute bg-[#00c950] box-border content-stretch flex items-center justify-center left-[1510px] rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[817px]" data-name="HomePage">
      <Icon14 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.328px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#003049] text-[16px] text-nowrap top-[-1px] whitespace-pre">A Worker of the 20th Century</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#003049] text-[14px] top-[0.5px] w-[388px]">Filmed in Galicia and in the Galician language. The film tells the life story of Manuel Barros, a shipyard worker with communist leanings during the Franco dictatorship.</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[136.25px] items-start left-0 top-[234.99px] w-[389.328px]" data-name="Container">
      <Heading13 />
      <Paragraph17 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[218.992px] left-0 top-0 w-[389.328px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container49() {
  return <div className="absolute h-[229.616px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.215px]" data-name="Container" />;
}

function VideoCard9() {
  return <div className="absolute h-[218.992px] left-0 top-0 w-[389.328px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.33 218.99\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.66 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.33px] rounded-[1.67772e+07px] size-[42px] top-[162.01px]" data-name="Container">
      <VideoCard10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#669bbc] h-[218.992px] left-0 overflow-clip rounded-[10px] top-0 w-[389.328px]" data-name="Container">
      <ImageWithFallback3 />
      <Container49 />
      <VideoCard9 />
      <Container50 />
    </div>
  );
}

function VideoCard11() {
  return (
    <div className="absolute h-[371.25px] left-0 top-0 w-[389.328px]" data-name="VideoCard">
      <Container48 />
      <Container51 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.336px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#003049] text-[16px] text-nowrap top-[-1px] whitespace-pre">Nicolas Economou</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#003049] text-[14px] top-[0.5px] w-[368px]">An intimate portrait of Cypriot pianist and composer Nicolas Economou, exploring his musical sensitivity and cultural legacy.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#003049] h-[28px] relative rounded-[4px] shrink-0 w-[75.273px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[75.273px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">1h 35min</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[52.047px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[52.047px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">2014</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[28px] relative shrink-0 w-[389.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[389.336px]">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[136.25px] items-start left-0 top-[235px] w-[389.336px]" data-name="Container">
      <Heading14 />
      <Paragraph18 />
      <Container54 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container56() {
  return <div className="absolute h-[229.624px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.223px]" data-name="Container" />;
}

function VideoCard12() {
  return <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.34 219\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.67 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.34px] rounded-[1.67772e+07px] size-[42px] top-[162.02px]" data-name="Container">
      <VideoCard13 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute bg-[#669bbc] h-[219px] left-0 overflow-clip rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <ImageWithFallback4 />
      <Container56 />
      <VideoCard12 />
      <Container57 />
    </div>
  );
}

function VideoCard14() {
  return (
    <div className="absolute h-[371.25px] left-[421.33px] top-0 w-[389.336px]" data-name="VideoCard">
      <Container55 />
      <Container58 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[389.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[389.336px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[#003049] text-[16px] text-nowrap top-[-1px] whitespace-pre">Above All Compassion: The Story of XP School</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[389.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[389.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#003049] text-[14px] top-[0.5px] w-[338px]">A three-year observational study of XP School in Doncaster and its expeditionary learning approach.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#003049] h-[28px] relative rounded-[4px] shrink-0 w-[62.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[62.711px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">38 min</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[53.523px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[53.523px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">2020</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[28px] relative shrink-0 w-[389.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[389.336px]">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113.5px] items-start left-0 top-[235px] w-[389.336px]" data-name="Container">
      <Heading15 />
      <Paragraph19 />
      <Container61 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container63() {
  return <div className="absolute h-[229.624px] left-[-9.44px] opacity-[0.229] top-[-5.31px] w-[408.223px]" data-name="Container" />;
}

function VideoCard15() {
  return <div className="absolute h-[219px] left-0 top-0 w-[389.336px]" data-name="VideoCard" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 389.34 219\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -22.335 -22.335 0 194.67 109.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />;
}

function VideoCard16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="VideoCard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="VideoCard">
          <path d={svgPaths.p2bb5f600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center left-[330.34px] rounded-[1.67772e+07px] size-[42px] top-[162.02px]" data-name="Container">
      <VideoCard16 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-[#669bbc] h-[219px] left-0 overflow-clip rounded-[10px] top-0 w-[389.336px]" data-name="Container">
      <ImageWithFallback5 />
      <Container63 />
      <VideoCard15 />
      <Container64 />
    </div>
  );
}

function VideoCard17() {
  return (
    <div className="absolute h-[371.25px] left-[842.66px] top-0 w-[389.336px]" data-name="VideoCard">
      <Container62 />
      <Container65 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[371.25px] left-[179px] top-[688px] w-[1232px]" data-name="Section">
      <VideoCard11 />
      <VideoCard14 />
      <VideoCard17 />
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#003049] h-[28px] relative rounded-[4px] shrink-0 w-[62.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[62.578px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">32 min</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#669bbc] h-[28px] relative rounded-[4px] shrink-0 w-[51.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[51.938px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[12px] text-nowrap text-white top-[6.5px] whitespace-pre">1998</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[28px] items-center left-[179px] top-[1031.24px] w-[389.328px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[84px] left-[24px] top-0 w-[720px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[84px] left-[360.48px] not-italic text-[#f2f1f1] text-[56px] text-center text-nowrap top-0 tracking-[-1px] translate-x-[-50%] whitespace-pre">Steve Sklair</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[52px] leading-[26px] left-[24px] not-italic text-[16px] text-center text-nowrap text-white top-[108px] w-[720px] whitespace-pre" data-name="Paragraph">
      <p className="absolute left-[360.09px] top-[-1px] translate-x-[-50%]">Steve is an all round film maker who has worked</p>
      <p className="absolute left-[360.06px] top-[25px] translate-x-[-50%]">with all the major UK broadcasters.</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute bg-white h-[48px] left-[309.03px] rounded-[4px] top-[192px] w-[149.938px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[75px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[11px] translate-x-[-50%] whitespace-pre">Learn More</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Paragraph20 />
      <Link14 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#c1121f] box-border content-stretch flex flex-col h-[432px] items-start left-0 pb-0 pt-[96px] px-[411px] top-[1139.25px] w-[1590px]" data-name="Section">
      <Container69 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.328px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.328px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Yaba Badoe</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[317px]">Steve is a pleasure to work with. A consummate professional, he has great ideas and knows how to implement them. Since we worked together Steve has become an experienced, camera operator, director and producer. Most important of all he knows how to engage with different kinds of people and get the best out of them. I strongly recommend him.</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.328px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[326.19px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Documentary Filmmaker and Author</p>
      </div>
    </div>
  );
}

function TestimonialCard3() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[179px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_3.9px_0px_rgba(0,48,73,0.31)] top-[80px] w-[389.328px]" data-name="TestimonialCard">
      <Heading17 />
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Bob Long</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[325px]">In all my time in TV I never met a more all-round talented programme maker. When I got the job at the BBC the first thing I did was to get Steve on board. He started as an AP (Assistant Producer), within a year he was a Producer and a year later a Series Producer. He became my troubleshooter – any commission that was extremely difficult I gave it to him, like working with impossibly difficult presenters or huge series that were logistical nightmares. He never failed to deliver…often more than I hoped for.</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[325.5px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Executive Producer BBC</p>
      </div>
    </div>
  );
}

function TestimonialCard4() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[600.33px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_3.9px_0px_rgba(0,48,73,0.31)] top-[80px] w-[389.336px]" data-name="TestimonialCard">
      <Heading18 />
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[325.336px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Madeleine Holt</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[319px]">Steve Sklair is an exceptionally talented filmmaker, and a real joy to work with. Steve has an unerring feel for the story in factual and documentary programmes, and a great way of getting the best out of contributors. I have booked Steve as director, as camera, as editor. He wears his experience and knowledge lightly, but you can always trust him to frame an arresting shot, to cut a captivating sequence, to lead a happy team. Steve delivers.</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[50.57px] relative shrink-0 w-[325.336px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.57px] relative w-[325.336px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18.571px] left-[325.64px] not-italic text-[#6a7282] text-[13px] text-nowrap text-right top-[0.5px] translate-x-[-100%] whitespace-pre">Producer / Reporter</p>
      </div>
    </div>
  );
}

function TestimonialCard5() {
  return (
    <div className="absolute bg-[#fdf0d5] box-border content-stretch flex flex-col gap-[16px] h-[388.82px] items-start left-[1021.66px] pb-0 pl-[32px] pr-0 pt-[32px] rounded-[10px] shadow-[0px_4px_3.9px_0px_rgba(0,48,73,0.31)] top-[80px] w-[389.336px]" data-name="TestimonialCard">
      <Heading19 />
      <Paragraph25 />
      <Paragraph26 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-[#fdf0d5] h-[548.82px] left-0 top-[1571.25px] w-[1590px]" data-name="Section">
      <TestimonialCard3 />
      <TestimonialCard4 />
      <TestimonialCard5 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">NAVIGATION</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[39.039px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Home</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[34.344px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Films</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[81.203px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">About Steve</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[129.328px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Working With Steve</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[1.5px] w-[81.375px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Project Brief</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link19 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-0 top-0 w-[378.664px]" data-name="Container">
      <Heading20 />
      <List2 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">EQUIPMENT / EDITING</p>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">CAMERAS</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Sony Z90</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Panasonic GH5</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">OSMO Pocket Gimbal</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">DJI Mini 3</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading22 />
      <List3 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">SOFTWARE</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Final Cut Studio Pro</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading23 />
      <Paragraph27 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[192px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-[426.66px] top-0 w-[378.664px]" data-name="Container">
      <Heading21 />
      <Container73 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[0.4px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">+44 7743 671868</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">steve_sklair@yahoo.co.uk</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-[0.5px] whitespace-pre">London</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
      <Paragraph30 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[240px] items-start left-[853.33px] top-0 w-[378.664px]" data-name="Container">
      <Heading24 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Container74 />
      <Container76 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-0 top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0">
              <path d={svgPaths.p1a8d3600} fill="var(--fill-0, #D30000)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[117.96px] top-0 w-[23.227px]" data-name="Container">
      <Icon15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[8.15%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 0">
              <path d={svgPaths.p29ba47e0} fill="var(--fill-0, #D30000)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[144.98px] top-0 w-[11.867px]" data-name="Container">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[2.19%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 0">
              <path d={svgPaths.p14fba900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[3.19px] top-0 w-[22.711px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[2.35%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 0">
              <path d={svgPaths.p365db700} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[30.89px] top-0 w-[23.945px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[1.32%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 0">
              <path d={svgPaths.p9694180} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[58.48px] top-0 w-[17.828px]" data-name="Container">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[1.97%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 0">
              <path d={svgPaths.p2fd2d080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[78.13px] top-0 w-[25.305px]" data-name="Container">
      <Icon20 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-0 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-full flex items-center justify-center left-0 right-[4.21%] top-0">
        <div className="flex-none">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 0">
              <path d="M0 0V0H5.91949V0H0Z" fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[108.35px] top-0 w-[6.18px]" data-name="Container">
      <Icon21 />
    </div>
  );
}

function LogoSklair2() {
  return (
    <div className="absolute h-0 left-[536px] top-[49px] w-[160px]" data-name="LogoSklair">
      <Container78 />
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[16px] left-0 top-[65px] w-[1232px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[616.39px] not-italic text-[#99a1af] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">camera, editor and director</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[16px] left-0 top-[97px] w-[1232px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[616.35px] not-italic text-[#6a7282] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre">© 2025 Steve Sklair LTD. All rights reserved.</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[113px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4a5565] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <LogoSklair2 />
      <Paragraph31 />
      <Paragraph32 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-[#003049] box-border content-stretch flex flex-col gap-[64px] h-[545px] items-start left-0 pb-0 pt-[64px] px-[179px] top-[2120.07px] w-[1590px]" data-name="Footer">
      <Container77 />
      <Container85 />
    </div>
  );
}

function Source1() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[536px] items-start left-0 opacity-40 overflow-clip pb-0 pl-0 pr-[1590px] top-0 w-[1590px]" data-name="Video">
      <Source1 />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-[#c1121f] h-[536px] left-0 opacity-[0.85] top-0 w-[1590px]" data-name="Container" />;
}

function Heading25() {
  return (
    <div className="font-['Inter:Bold',sans-serif] font-bold h-[140px] leading-[70px] not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white tracking-[-2px] w-full whitespace-pre" data-name="Heading 1">
      <p className="absolute left-[424.56px] top-0 translate-x-[-50%]">Camera, editor</p>
      <p className="absolute left-[424.02px] top-[70px] translate-x-[-50%]">and director.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[22px] items-start left-[623.85px] top-[3px] w-[5.883px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-gray-100 text-nowrap whitespace-pre">|</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[421.26px] not-italic text-[18px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Honest documentaries, told with a human gaze.</p>
      <Text2 />
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute bg-white h-[48px] left-[274.26px] rounded-[4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[2px] w-[142.344px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[71.5px] not-italic text-[16px] text-black text-center text-nowrap top-[11px] translate-x-[-50%] whitespace-pre">View work</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[52px] left-[432.6px] rounded-[4px] top-0 w-[141.141px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[71px] not-italic text-[16px] text-center text-nowrap text-white top-[13px] translate-x-[-50%] whitespace-pre">About me</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Link20 />
      <Link21 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[280px] items-start left-[347px] px-[24px] py-0 top-[128px] w-[896px]" data-name="Container">
      <Heading25 />
      <Paragraph33 />
      <Container87 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute h-[536px] left-0 overflow-clip top-[72px] w-[1590px]" data-name="Section">
      <Video1 />
      <Container86 />
      <Container88 />
    </div>
  );
}

function HomePage2() {
  return (
    <div className="absolute bg-[#fdf0d5] h-[2665.07px] left-0 top-0 w-[1590px]" data-name="HomePage">
      <Section4 />
      <Container68 />
      <Section5 />
      <Section6 />
      <Footer1 />
      <Section7 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 36">
          <path d={svgPaths.p20e3def2} fill="var(--fill-0, #CA333A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[94.37px] top-[1.98px] w-[18.586px]" data-name="Container">
      <Icon22 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[16.008px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[3.52%] left-0 right-[8.15%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
          <path d={svgPaths.p373e0c80} fill="var(--fill-0, #CA333A)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col h-[16.008px] items-start left-[115.99px] top-[3.66px] w-[9.492px]" data-name="Container">
      <Icon23 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[37px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[0.21%] left-0 right-[2.19%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 37">
          <path d={svgPaths.p29f53e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37px] items-start left-[2.56px] top-[1.74px] w-[18.172px]" data-name="Container">
      <Icon24 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[2.35%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 36">
          <path d={svgPaths.p204b2470} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[24.71px] top-[2.07px] w-[19.156px]" data-name="Container">
      <Icon25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[1.32%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 36">
          <path d={svgPaths.pf36fc40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[46.78px] top-[2.07px] w-[14.266px]" data-name="Container">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[1.97%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 36">
          <path d={svgPaths.p211cb480} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[62.5px] top-[2.07px] w-[20.242px]" data-name="Container">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[36.297px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[2.12%] left-0 right-[4.21%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 36">
          <path d={svgPaths.p1d9cb9d0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.297px] items-start left-[86.68px] top-[2.07px] w-[4.945px]" data-name="Container">
      <Icon28 />
    </div>
  );
}

function LogoSklair3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="LogoSklair">
      <Container89 />
      <Container90 />
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
      <Container95 />
    </div>
  );
}

function Link22() {
  return (
    <div className="h-[40px] relative shrink-0 w-[128px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[40px] items-start relative w-[128px]">
        <LogoSklair3 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#ca333a] h-[2px] left-0 top-[26px] w-[44.617px]" data-name="Text" />;
}

function Link23() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[44.617px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Home</p>
      <Text3 />
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[28px] left-[76.62px] top-0 w-[39.25px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Films</p>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute h-[28px] left-[147.87px] top-0 w-[42.891px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Steve</p>
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute h-[28px] left-[222.76px] top-0 w-[147.797px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Working With Steve</p>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[28px] left-[402.56px] top-0 w-[60.141px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] whitespace-pre">Contact</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[462.695px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[462.695px]">
        <Link23 />
        <Link24 />
        <Link25 />
        <Link26 />
        <Link27 />
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute bg-[#003049] box-border content-stretch flex h-[72px] items-center justify-between left-0 px-[179px] py-0 top-0 w-[1590px]" data-name="Header">
      <Link22 />
      <Navigation1 />
    </div>
  );
}

function ResponsiveWebSteve() {
  return (
    <div className="absolute bg-white h-[2665px] left-0 top-0 w-[1590px]" data-name="Responsive Web Steve">
      <HomePage2 />
      <Header1 />
    </div>
  );
}

export default function ResponsiveWebSteve1() {
  return (
    <div className="bg-white relative size-full" data-name="Responsive Web Steve">
      <HomePage />
      <Header />
      <HomePage1 />
      <ResponsiveWebSteve />
    </div>
  );
}