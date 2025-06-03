import Link from "next/link";
import { User } from "@/types/user";

const  getUsers = async() =>  {
  const res = await fetch('http://localhost:3000/api/users');
  const data = await res.json();
  return data.users; 
}

const  UsersPage = async() => {
  const users: User[] = await getUsers();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-lg font-semibold text-blue-600">
                  {user.firstName}
                </h2>
                <div className="mt-2">
                  <Link
                    href={`/users/${user.id}`}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage