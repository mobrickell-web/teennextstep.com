import Image from "next/image";
import { Fragment } from "react";

import type {
  BlogContentBlock,
  BlogTextSegment,
} from "@/components/landing/blog/types";
import { Typography } from "@/components/ui/typography";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const HEADING_CLASS =
  "text-[clamp(20px,2.4vw,28px)] font-[800] leading-[131%] text-[#194783]";
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;

function renderSegments(segments: BlogTextSegment[]) {
  return segments.map((segment, index) =>
    segment.bold ? (
      <strong key={index} className="font-bold">
        {segment.text}
      </strong>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

function BlogBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <Typography variant="body-regular" as="p" className={BODY_CLASS}>
          {renderSegments(block.segments)}
        </Typography>
      );

    case "heading":
      return (
        <Typography variant="h2" as="h2" className={`${HEADING_CLASS} mt-3`}>
          {block.text}
        </Typography>
      );

    case "bullets":
      return (
        <ul className={BULLETS_CLASS}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "numberedPoint":
      return (
        <div className="space-y-2">
          <Typography
            variant="h3"
            as="h3"
            className="text-[clamp(17px,2vw,22px)] font-[800] leading-[131%] text-black"
          >
            {block.hideNumber ? block.title : `${block.number}. ${block.title}`}
          </Typography>
          {block.paragraphs?.map((segments, index) => (
            <Typography
              key={index}
              variant="body-regular"
              as="p"
              className={BODY_CLASS}
            >
              {renderSegments(segments)}
            </Typography>
          ))}
          {block.bullets?.length ? (
            <ul className={BULLETS_CLASS}>
              {block.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {block.closing?.map((segments, index) => (
            <Fragment key={`closing-${index}`}>
              <Typography
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {renderSegments(segments)}
              </Typography>
              {index === 0 && block.closingBullets?.length ? (
                <ul className={BULLETS_CLASS}>
                  {block.closingBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Fragment>
          ))}
        </div>
      );

    case "twoColumn":
      return (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-start lg:gap-10">
          <div className="space-y-6">
            {block.left.map((child, index) => (
              <BlogBlock key={index} block={child} />
            ))}
          </div>
          <div
            className={`relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[8px] lg:mx-0  lg:max-w-none lg:sticky lg:top-[calc(var(--site-navbar-height)+1.5rem)] ${block.image.aspectClass ?? "aspect-[4/5]"}`}
          >
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-contain object-center"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}

type BlogPostContentProps = {
  blocks: BlogContentBlock[];
};

export default function BlogPostContent({ blocks }: BlogPostContentProps) {
  return (
    <article className="w-full space-y-1.5 px-[49px] pb-16 sm:space-y-2 sm:pb-20 lg:pb-24">
      {blocks.map((block, index) => (
        <BlogBlock key={index} block={block} />
      ))}
    </article>
  );
}
