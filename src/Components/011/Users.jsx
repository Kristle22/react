function Users({ users }) {
  if (users.length === 0) {
    return <div class='lds-hourglass'></div>
  }
  return (
    <>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </>
  )
}

export default Users
