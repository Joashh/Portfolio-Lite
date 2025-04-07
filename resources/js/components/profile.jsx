export default function Profile() {
    return (
        
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-gray-800 rounded-md min-h-32 max-h-32">
        <img class="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0" src="/storage/testprof.jpeg" alt="" />

        <div class="space-y-2 text-center sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg font-semibold text-white">Julius Asher P. Austria</p>
            <p class="font-medium text-gray-500">Computer Science</p>
          </div>
          <button class="border-purple-200 text-blue-400 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Github
          </button>
        </div>
      </div>
      
    );
}
