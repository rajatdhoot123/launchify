const Card = () => {
  return (
    <div className="container mx-auto">
      <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
        <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            class="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          />
          <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              class="h-full w-full rounded-full"
              src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
              alt=""
            />
          </div>
        </div>
        <div class="mt-16 flex flex-col items-center">
          <h4 class="text-xl font-bold text-navy-700 dark:text-white">
            Adela Parkson
          </h4>
          <p class="text-base font-normal text-gray-600">Product Manager</p>
        </div>
        <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold text-navy-700 dark:text-white">17</p>
            <p class="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold text-navy-700 dark:text-white">9.7K</p>
            <p class="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="text-2xl font-bold text-navy-700 dark:text-white">434</p>
            <p class="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
