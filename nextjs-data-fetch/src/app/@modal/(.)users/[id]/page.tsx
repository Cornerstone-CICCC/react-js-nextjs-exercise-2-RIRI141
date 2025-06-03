import Link from "next/link";
import { User } from "@/types/user";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data: User = await res.json();

  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center ">
      <div className="bg-white text-black max-w-md w-full mx-4 p-6">
        <h3>
          Name: {data.firstName}
          {data.lastName} <br />
          Gender: {data.gender} <br />
          Age: {data.age} <br />
          Email: {data.email}
        </h3>
        <a
          href="/users"
          className="border-1 px-2 mt-1 inline-block rounded-md shadow-md"
        >
          Close
        </a>
      </div>
    </div>
  );
};

export default page;
