export const formatSeconds = (
  seconds: number,
  options: {
    compact?: boolean;
    truncate?: boolean;
  }
): string => {
  const { compact, truncate } = options;

  if (!compact) {
    return `${seconds} seconds`;
  }

  if (seconds < 60) {
    return `${seconds} seconds`;
  }

  if (seconds < 3600) {
    if (truncate) {
      return `${(seconds / 60).toFixed(1)} min`;
    }
    if (seconds % 60 === 0) {
      return `${Math.floor(seconds / 60)} min`;
    }
    return `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;
  }
  return `${Math.floor(seconds / 3600)} hours`;
};
