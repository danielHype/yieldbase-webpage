import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaProductHunt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export function SocialLinks() {
  return (
    <ul className="flex space-x-4 items-center md:ml-5">
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com">
          <span className="sr-only">Twitter</span>
          <FaXTwitter
            size={22}
            className="fill-[#707070] dark:fill-[#878787]"
          />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com">
          <span className="sr-only">Github</span>
          <FaGithub size={22} className="fill-[#707070] dark:fill-[#878787]" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://linkedin.com">
          <span className="sr-only">LinkedIn</span>
          <FaLinkedinIn
            size={22}
            className="fill-[#707070] dark:fill-[#878787]"
          />
        </a>
      </li>
    </ul>
  );
}
