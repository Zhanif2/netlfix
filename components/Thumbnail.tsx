import { Movie } from "@/typing";
import Image from "next/image";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
    </div>
  );
}

export default Thumbnail;
