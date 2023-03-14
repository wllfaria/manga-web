import { useRouter } from 'next/router'

export default function ReadDoujinPage() {
  const router = useRouter()
  const { id } = router.query

  return <h1>reading doujin {id}</h1>
}
