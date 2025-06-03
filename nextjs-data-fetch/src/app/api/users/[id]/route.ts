export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = await params;
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
  
    return Response.json(data);
  }