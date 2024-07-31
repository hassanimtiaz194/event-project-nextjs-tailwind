import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";

export default async function Home() {
  const { product } = await getProducts(params.pId);
  return (
    <>
      <h2>{product.title}</h2>
      <p>{product?.description}</p>
    </>
  );
}