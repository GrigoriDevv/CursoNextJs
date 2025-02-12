import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export const KeepWatching = () => {
  return (
    <Link
      href={`/player/{courseId}/{classId}`}
      className=" mx-4 p-4 flex bg-primary rounded-2xl hover:no-underline gap-2"
    >
      <div className="flex gap-2 flex-col flex-1">
        <h1 className="font-bold line-clamp-1">
          NextJS, TailwindCSS e Typescript: #02 - Apresentação do código fonte
        </h1>
        <p className=" line-clamp-1">NextJS, TailwindCSS e Typescript</p>
      </div>
      <div className="gap-2 flex flex-row items-center justify-center">
        <span className="hidden md:block">Continuar assistindo</span>
        <MdPlayCircle size={28} />
      </div>
    </Link>
  );
};
