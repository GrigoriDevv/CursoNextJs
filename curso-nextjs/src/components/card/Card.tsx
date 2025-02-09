import Image from "next/image";
import Link from "next/link";

export interface ICardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}
export const Card = ({ title, description, image, href }: ICardProps) => {
  return (
    <Link href={href} className="hover:no-underline ">
      <article className=" flex gap-2 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          alt={title}
          src={image}
          className="aspect-video object-cover rounded-2xl"
          width={1000}
          height={0}
          draggable={false}
        />
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p className="line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
          {description}
        </p>
      </article>
    </Link>
  );
};
