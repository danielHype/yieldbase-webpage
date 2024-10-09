import { VoteButton } from "@/components/vote-button";
// import { client } from "@yieldbase/kv";

type Props = {
  id: string;
};

export async function Vote({ id }: Props) {
  // const count = await client.mget(`apps:${id}`);
  const count = "1"
  return <VoteButton count={count} id={id} />;
}
