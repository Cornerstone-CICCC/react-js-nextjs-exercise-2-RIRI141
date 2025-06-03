import Link from "next/link";
import { User } from "@/types/user";

interface UserDetailPageProps {
  params: { id: string };
}


const UserDetailPage = async ({ params }: UserDetailPageProps) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data: User = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/users"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Users
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-6 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {data.firstName} {data.lastName}
            </h1>
            <p className="text-gray-600 text-lg">{data.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Personal Information
              </h3>
              <div className="mt-2 space-y-2">
                <p>
                  <span className="font-medium">Age:</span> {data.age}
                </p>
                <p>
                  <span className="font-medium">Gender:</span> {data.gender}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {data.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
