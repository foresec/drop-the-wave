export default function calculateTrackDurationFormat(val: number) {
  const millieToSeconds = val / 1000;
  const minute = Math.floor(millieToSeconds / 60);
  const second = Math.floor(millieToSeconds % 60);

  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedSecond = second < 10 ? `0${second}` : second;

  return `${formattedMinute}:${formattedSecond}`;
}
