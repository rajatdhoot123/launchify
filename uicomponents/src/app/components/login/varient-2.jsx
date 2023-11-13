const Login = () => {
  return (
    <div
      className="w-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-200 container mx-auto p-5 rounded-lg"
      data-id="1"
    >
      <div
        className="bg-white shadow-md max-w-md w-full overflow-hidden relative p-12 rounded-md"
        data-id="2"
      >
        <h1 className="text-2xl font-bold text-center mb-5" data-id="4">
          Login
        </h1>
        <button
          className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full py-2 mb-4 flex items-center justify-center"
          data-id="5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" mr-2 text-red-500 h-5 w-5"
            data-id="6"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Login with Google
        </button>
        <div
          className="border-b border-gray-200 dark:border-gray-600 my-4"
          data-id="7"
        ></div>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400" data-id="8">
          Or get a magic link sent to your email
        </p>
        <div className="mb-4" data-id="9">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
            data-id="10"
          >
            Email
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="you@example.com"
            required=""
            data-id="11"
            type="email"
          />
        </div>
        <button
          className="rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary-foreground hover:bg-gray-100 h-10 px-4 py-2 w-full flex items-center justify-center border border-gray-300"
          type="submit"
          data-id="12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" mr-2 text-blue-500 h-5 w-5"
            data-id="13"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          Send Magic Link
        </button>
      </div>
    </div>
  );
};

export default Login;
