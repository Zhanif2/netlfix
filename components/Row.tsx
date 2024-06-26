import { Movie } from "@/typing"

interface Props{
    title: string
    movies: Movie[]
}
function Row({title,movies}:Props)  {
  return (
    <div>
      row
    </div>
  )
}

export default Row
