export default async function Page({
  params,
}: {
  params: Promise<{ chat_id: string }>;
}) {
  const { chat_id } = await params;
  return <div>My Post: {chat_id}</div>;
}
