const audioExtensions = ['.mp3', '.ogg', '.wav', '.aac', '.flac']

export function isAudio(media: string): boolean {
  return audioExtensions.some(ext => media.toLowerCase().endsWith(ext))
}
