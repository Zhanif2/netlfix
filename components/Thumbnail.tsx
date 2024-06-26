import { Movie } from "@/typing"

interface Props {
    movie: Movie
}
function Thumbnail({movie}:Props) {
  return (
    <div>
      Thumbnail
    </div>
  )
}

export default Thumbnail
