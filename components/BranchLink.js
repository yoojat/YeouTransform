import Link from "next/link";

export default props => (
  <div>
    <Link href={`/branch?id=${props.id}`} as={`/branch/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </div>
);
