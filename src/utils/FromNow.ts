import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function fromNow(instant: string) {
  const date = parseISO(instant);
  return formatDistanceToNowStrict(date, { addSuffix: true });
}
