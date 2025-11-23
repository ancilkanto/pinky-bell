interface SectionTitleProps {
  title: string;
  subTitle: string;
}

export default function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      {subTitle ? (
        <h4
          className="text-[16px] text-gray-500 font-inter font-medium uppercase tracking-[2px] mb-2"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {subTitle}
        </h4>
      ) : null}
      <h2
        className="text-[40px] highlight-text font-quicksand font-normal mb-0 font-regular"
        style={{ fontFamily: "var(--font-quicksand), sans-serif", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}


