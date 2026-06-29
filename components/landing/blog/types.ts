export type BlogTextSegment = {
  text: string;
  bold?: boolean;
};

export type BlogContentBlock =
  | { type: "paragraph"; segments: BlogTextSegment[]; className?: string }
  | {
      type: "lineGroup";
      items: (string | BlogTextSegment[])[];
      /** Default: tight (130% leading, no gap). */
      spacing?: "tight" | "relaxed";
    }
  | { type: "heading"; text: string; className?: string }
  | { type: "bullets"; items: string[] }
  | {
      type: "numberedPoint";
      number: number;
      title: string;
      /** When true, renders the title without the "1. " prefix. */
      hideNumber?: boolean;
      paragraphs?: BlogTextSegment[][];
      bullets?: string[];
      closing?: BlogTextSegment[][];
      /** Bullet list rendered after the first closing paragraph (e.g. after "Often turns out to be:"). */
      closingBullets?: string[];
    }
  | {
      type: "twoColumn";
      left: BlogContentBlock[];
      image: {
        src: string;
        alt: string;
        aspectClass?: string;
        /** Extra classes on the image wrapper (e.g. top offset to align with a heading). */
        wrapperClassName?: string;
      };
      /** Larger infographic column on desktop (default: 420px max). */
      imageSize?: "default" | "large";
      /** Tighter vertical gap between left-column blocks (matches article body spacing). */
      leftSpacing?: "default" | "compact";
    };

export type BlogPostFooterCta = {
  primary: { label: string; href: string; caption?: string };
  secondary: { label: string; href: string; caption?: string };
  tertiary: { label: string; href: string; caption?: string };
};

export type BlogTitleLine =
  | string
  | { text: string; nowrap?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  /** When set, the hero renders each line on its own row instead of a single title string. */
  titleLines?: BlogTitleLine[];
  /** On mobile, render title lines inline as one flowing line; stacked from md up. */
  titleInlineOnMobile?: boolean;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: string;
  blocks: BlogContentBlock[];
  footerCta?: BlogPostFooterCta;
};
