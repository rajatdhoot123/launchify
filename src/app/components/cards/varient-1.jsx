const Cards = () => {
  return (
    <div className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
      <div className="flex items-center justify-between px-4">
        <div className="flex justify-between items-center py-4">
          <img
            className="w-12 rounded-full"
            src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
            alt="Alex"
          />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              Stuar Manson
            </h1>
            <p className="text-sm text-gray-800 hover:underline cursor-pointer">
              #Publicado hace 2 horas
            </p>
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
          </svg>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=966&amp;q=80"
        alt=""
      />

      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 cursor-pointer ">
          Flores
        </h1>
        <h2 className="text-xl text-gray-800 font-semibold">by Stuar Manson</h2>
        <p className="text-lg font font-thin">
          Lorem ipsum carrots, enhanced undergraduate developer, but they do
          occaecat time and vitality, Lorem ipsum carrots,
        </p>
      </div>
    </div>
  );
};

export default Cards;
