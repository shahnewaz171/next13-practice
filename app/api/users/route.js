export async function Get(request) {
  // handle get request for /api/users
  // retrieve users from the database or any data resource

  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  // send the users as a response
  return new Response(JSON.stringify(users));
}
