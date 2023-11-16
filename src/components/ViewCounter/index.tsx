import { kv } from '@vercel/kv';

export default async function ViewCounter() {
  const views = await kv.incr('gift:list');
  console.log(views)

  return (
    <p className="text-sm text-gray-500">
      {Intl.NumberFormat('en-us').format(views)} views
    </p>
  )
}