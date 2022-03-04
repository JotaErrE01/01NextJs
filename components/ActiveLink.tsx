import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';


interface Props {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }: Props) => {

  const { asPath } = useRouter();  

  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}} >{ text }</a>
    </Link>
  )
};
