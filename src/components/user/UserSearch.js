const UserSearch = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form className="">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full pr-40 p-8 text-lg bg-white text-black"
          />
          <button
            type="submit"
            className="btn absolute px-10 font-bold text-lg top-0 right-0 h-full rounded-none rounded-r-lg"
          >
            Search
          </button>
        </div>
      </form>
      <button className="font-bold h-full btn w-36 btn-ghost text-lg">
        Clear
      </button>
    </div>
  )
}

export default UserSearch
