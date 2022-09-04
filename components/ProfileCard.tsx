function ProfileCard() {
  return (
    <div className="flex flex-col w-72 drop-shadow-2xl">
      <img src="bg-pattern-card.svg" className="rounded-t-2xl" alt="" />
      <div className="flex flex-col bg-white items-center rounded-b-2xl">
        <img
          src="image-victor.jpg"
          className="-mt-12 mb-2 w-1/3 rounded-full border-4 border-white"
          alt=""
        />
        <div className="flex flex-row space-x-3 p-2">
          <h2 className="font-kumbh font-bold tracking-tight">Victor Crest</h2>
          <p className="font-kumbh font-normal text-gray-500">26</p>
        </div>
        <p className="font-kumbh text-xs text-gray-500 mb-2">London</p>
        <hr className="border-1 border-gray my-2 w-full" />
        <div className="flex flex-row space-x-10 p-2 mb-2">
          <div className="flex flex-col items-center">
            <p className="font-kumbh font-bold">80K</p>
            <p className="font-kumbh text-xxs tracking-widest text-gray-500">
              Followers
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-kumbh font-bold">803K</p>
            <p className="font-kumbh text-xxs tracking-widest text-gray-500">
              Likes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-kumbh font-bold">1.4K</p>
            <p className="font-kumbh text-xxs tracking-widest text-gray-500">
              Photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
