// ... existing code ...
<div className="social-links">
  {websiteConfig.social.github && (
    <a href={websiteConfig.social.github} target="_blank" rel="noopener noreferrer">
      <GitHubIcon />
    </a>
  )}
  {/* 由于我们设置了空字符串，这些链接会自动隐藏 */}
  {websiteConfig.social.twitter && (
    <a href={websiteConfig.social.twitter} target="_blank" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
  )}
  {websiteConfig.social.youtube && (
    <a href={websiteConfig.social.youtube} target="_blank" rel="noopener noreferrer">
      <YouTubeIcon />
    </a>
  )}
</div>
// ... existing code ...