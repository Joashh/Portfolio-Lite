export default function Profile() {
    return (
        
        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-gray-800 rounded-md min-h-32 max-h-32">
        <img className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="/images/testprof.jpeg" alt="" />

        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-white">Julius Asher P. Austria</p>
            <p className="font-medium text-gray-500 text-md">Computer Science Degree</p>
          </div>
          <a href="https://github.com/Joashh" className="border-purple-200 text-blue-400 hover:border-transparent  hover:text-white ...">
            Github
          </a>
        </div>
      </div>
      
    );
}
