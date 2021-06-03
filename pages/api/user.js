import { getSession } from '../../lib/iron'

// reqは/api/userに対するリクエスト、resはそのリクエストに対するレスポンス
export default async function user(req, res) {
  const session = await getSession(req)
  // セッションからクッキーが取得できない場合はnullを返す
  // After getting the session you may want to fetch for the user instead
  // of sending the session's payload directly, this example doesn't have a DB
  // so it won't matter in this case
  res.status(200).json({ user: session || null })
}
