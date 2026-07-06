import Song from "../../models/song";

export const mockSongs: Song[] = [
  {
    id: "1",
    title: "Amazing Grace",
    lyrics:
      "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now am found\nWas blind, but now I see",
    key: "G",
    isCover: true,
    secondsPracticed: 3600,
    author: "John Newton",
  },
  {
    id: "2",
    title: "How Great Is Our God",
    lyrics:
      "How great is our God, sing with me\nHow great is our God, and all will see\nHow great, how great is our God",
    key: "C",
    isCover: false,
    secondsPracticed: 7200,
  },
  {
    id: "3",
    title: "10,000 Reasons",
    lyrics:
      "Bless the Lord, O my soul\nWorship His holy name\nSing like never before\nO my soul",
    key: "E",
    isCover: true,
    secondsPracticed: 1800,
    author: "Matt Redman",
  },
  {
    id: "4",
    title: "Oceans",
    lyrics:
      "You call me out upon the waters\nThe great unknown where feet may fail\nAnd there I find You in the mystery\nIn oceans deep my faith will stand",
    key: "D",
    isCover: true,
    secondsPracticed: 5400,
    author: "Jhon Pork",
  },
  {
    id: "5",
    title: "Good Good Father",
    lyrics:
      "I've heard a thousand stories\nOf what they think You're like\nBut I've heard the tender whisper\nOf love in the dead of night",
    key: "A",
    isCover: false,
    secondsPracticed: 900,
  },
];
