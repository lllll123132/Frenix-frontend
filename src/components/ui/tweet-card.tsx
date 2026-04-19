import { Suspense } from "react"
import { enrichTweet, type EnrichedTweet, type TweetProps } from "react-tweet"
import { getTweet, type Tweet } from "react-tweet/api"

import { cn } from "@/lib/utils"

interface TwitterIconProps {
  className?: string
  [key: string]: unknown
}
const Twitter = ({ className, ...props }: TwitterIconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
)

const Verified = ({ className, ...props }: TwitterIconProps) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
)

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length - 3)}...`
}

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("bg-white/5 rounded-md animate-pulse", className)} {...props} />
  )
}

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: unknown
}) => (
  <div
    className={cn(
      "flex size-full max-h-max min-w-72 flex-col gap-2 rounded-xl border border-white/5 p-4 bg-white/[0.02]",
      className
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
)

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: unknown
}) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-2 rounded-lg border border-white/5 p-4 bg-white/[0.02]",
      className
    )}
    {...props}
  >
    <h3 className="text-white/60 text-sm font-bold">Tweet not found</h3>
  </div>
)

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-row items-start justify-between tracking-normal">
    <div className="flex items-center space-x-3">
      <a
        href={tweet.user.url}
        target="_blank"
        rel="noreferrer"
        className="shrink-0"
      >
        <img
          title={`Profile picture of ${tweet.user.name}`}
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          src={tweet.user.profile_image_url_https}
          className="border-white/10 overflow-hidden rounded-full border"
        />
      </a>
      <div className="flex flex-col gap-0.5">
        <a
          href={tweet.user.url}
          target="_blank"
          rel="noreferrer"
          className="text-white flex items-center font-bold tracking-tight whitespace-nowrap transition-opacity hover:opacity-80"
        >
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified ||
            (tweet.user.is_blue_verified && (
              <Verified className="ml-1 inline size-4 text-blue-500" />
            ))}
        </a>
        <div className="flex items-center space-x-1">
          <a
            href={tweet.user.url}
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-white/60 text-xs font-medium transition-colors"
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="text-white/40 hover:text-white size-5 items-start transition-all ease-in-out hover:scale-105" />
    </a>
  </div>
)

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="text-[14px] leading-relaxed tracking-normal wrap-break-word text-white/80 font-medium">
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case "url":
        case "symbol":
        case "hashtag":
        case "mention":
          return (
            <a
              key={idx}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-[14px] font-bold transition-colors"
            >
              <span>{entity.text}</span>
            </a>
          )
        case "text":
          return (
            <span
              key={idx}
              className="text-white/80 text-[14px] font-medium"
              dangerouslySetInnerHTML={{ __html: entity.text }}
            />
          )
        default:
          return null
      }
    })}
  </div>
)

export const TweetMedia = ({ tweet }: { tweet: EnrichedTweet }) => {
  if (!tweet.video && !tweet.photos) return null
  return (
    <div className="flex flex-1 items-center justify-center mt-2">
      {tweet.video && (
        <video
          poster={tweet.video.poster}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl border border-white/10 shadow-sm"
        >
          <source src={tweet.video.variants[0].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {tweet.photos && (
        <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
          <div className="shrink-0 snap-center sm:w-2" />
          {tweet.photos.map((photo) => (
            <img
              key={photo.url}
              src={photo.url}
              width={photo.width}
              height={photo.height}
              title={"Photo by " + tweet.user.name}
              alt={tweet.text}
              className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border border-white/10 object-cover shadow-sm"
            />
          ))}
          <div className="shrink-0 snap-center sm:w-2" />
        </div>
      )}
    </div>
  )
}

export const MagicTweet = ({
  tweet,
  className,
  ...props
}: {
  tweet: Tweet
  className?: string
}) => {
  const enrichedTweet = enrichTweet(tweet)
  return (
    <div
      className={cn(
        "relative flex h-fit w-full max-w-lg flex-col gap-4 overflow-hidden rounded-[2rem] border border-white/5 p-6 bg-white/[0.02]",
        className
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  )
}

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err)
        } else {
          console.error(err)
        }
      })
    : undefined

  if (!tweet) {
    const NotFound = components?.TweetNotFound ?? TweetNotFound
    return <NotFound {...props} />
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  )
}

/**
 * ClientTweetCard (Client Side)
 */
import { useTweet } from "react-tweet"

export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions)

  if (isLoading) return fallback
  if (error || !data) {
    const NotFound = components?.TweetNotFound ?? TweetNotFound
    return <NotFound error={onError ? onError(error) : error} />
  }

  return <MagicTweet tweet={data} {...props} />
}

