import Link from "next/link";
import { useRouter } from "next/router";

export function TicketPurchaseRedirector() {
  const route = useRouter();
  const newPath = "ticket-purchase";

  return (
    <>
      <button onClick={() => route.push(newPath)}>
        <Link href={newPath} ></Link>
      </button>
    </>

  );
}