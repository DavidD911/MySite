interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}

function getDisplayUrl(url?: string) {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

export default function BrowserFrame({ src, alt, url, className = "" }: BrowserFrameProps) {
  const displayUrl = getDisplayUrl(url);

  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-surface-2 ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-pink/70" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-yellow/70" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-accent/70" aria-hidden="true" />
        {displayUrl ? (
          <span className="ml-2 truncate rounded bg-canvas px-2 py-0.5 font-mono text-[11px] text-muted">
            {displayUrl}
          </span>
        ) : null}
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden bg-canvas">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
