export default interface Song {
  id: string;
  title: string;
  lyrics: string;
  key: string;
  isCover: boolean;
  author?: string;
  secondsPracticed: number;
}
