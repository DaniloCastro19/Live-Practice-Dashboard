import { majorKeys } from "../../models/keys";
export default function isMajorKey(key: string): boolean {
  return majorKeys.includes(key);
}
