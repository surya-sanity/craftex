// 'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface NavigationToPostUrlPropsType {
  url: string
}

const NavigationToPostUrl = (props: NavigationToPostUrlPropsType) => {
  // props
  const { url } = props;

  return (
    <Link href={url} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-5 w-5" />
      </a>
    </Link>
  );
};

export default NavigationToPostUrl;