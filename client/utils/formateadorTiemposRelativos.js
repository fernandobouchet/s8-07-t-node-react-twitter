const TIME_UNITS = [
  { unit: 'día', seconds: 86400 },
  { unit: 'h', seconds: 3600 },
  { unit: 'min', seconds: 60 },
  { unit: 'seg', seconds: 1 }
];

export const getTimeAgo = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();

  const timeDiff = now.getTime() - date.getTime();

  if (timeDiff > 0) {
    const secondsElapsed = Math.floor(timeDiff / 1000);

    for (const { unit, seconds } of TIME_UNITS) {
      if (secondsElapsed >= seconds || unit === 'seg') {
        const value = Math.floor(secondsElapsed / seconds);
        return `${value}${unit}`;
      }
    }
  } else {
    return date.toLocaleString('es-ES', { day: 'numeric', month: 'short' }) + ".";
  }
};
