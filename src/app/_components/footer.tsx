import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

interface SocialsMap {
  type: "github" | "twitter" | "instagram",
  link: string,
}

const socialsIconMap = {
  "github": GithubIcon,
  "twitter": TwitterIcon,
  "instagram": InstagramIcon
}

const socialMap: SocialsMap[] = [
  {
    type: "github",
    link: "https://github.com/surya-sanity",
  },
  {
    type: "twitter",
    link: "https://x.com/suryasanity",
  },
  {
    type: "instagram",
    link: "https://instagram.com/sanitycodes/"
  }
]

const Footer = () => {
  return <div className="flex flex-row flex-wrap w-full justify-between items-center py-5 px-5 border-border border-t">
    <div className="text-sm">Made with ❤️ by surya-sanity</div>
    <div className="flex flex-row items-center gap-4 text-sm">Follow my socials
      <div className="flex flex-row items-center gap-3">
        {
          React.Children.toArray(socialMap.map((social) => {
            const { link, type } = social;
            const Icon = socialsIconMap[type];

            return (<Link href={link}>
              <Icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>)
          }))
        }
      </div>
    </div>
  </div>
}

export default Footer