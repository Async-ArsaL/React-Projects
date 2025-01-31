import React from 'react'
// props.username = {username} for props.username in props{destructuring bolte hai isko}
const Cards = ({username}) => {
  return (
    <>
    <div className="flex flex-col  gap-6 p-7  md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  </div>
  <div className="flex flex-col items-center md:items-start">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </>
  )
}

export default Cards