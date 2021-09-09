const Blog = () => {
    return ( 
        <div className="md:flex space-y-5 md:space-y-0 md:space-x-5 lg:space-x-10 mt-4 lg:mt-10">
            <div className="w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src="https://picsum.photos/200" alt="" className="w-10 h-10 object-cover"/>
                    </div>
                    <div>
                        <span className="block leading-3">Lilly Donovan</span>
                        <span className="text-gray-400 text-xs">Business trainer</span>
                    </div>
                </div>
                <h3 className="text-lg font-semibold">
                    <a href="#" className="hover:text-blue-800">how to properly manage yaour personal budget ?</a>
                </h3>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        </div>
                        <span className="text-sm text-gray-600">Video</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <span className="text-sm text-gray-600">15 min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-red-500">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                           </svg>
                        </div>
                        <span className="text-sm text-gray-600">20 likes</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-gray-600 font-semibold">5 days ago</div>
                    <a href="#" className="bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex items-center space-x-3">
                        <span>Connect</span>

                        <div className="w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
           
            <div className="w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src="https://picsum.photos/200" alt="" className="w-10 h-10 object-cover"/>
                    </div>
                    <div>
                        <span className="block leading-3">Lilly Donovan</span>
                        <span className="text-gray-400 text-xs">Business trainer</span>
                    </div>
                </div>
                <h3 className="text-lg font-semibold">
                    <a href="#" className="hover:text-blue-800">how to properly manage yaour personal budget ?</a>
                </h3>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        </div>
                        <span className="text-sm text-gray-600">Video</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                        </div>
                        <span className="text-sm text-gray-600">15 min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-6 text-red-500">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                           </svg>
                        </div>
                        <span className="text-sm text-gray-600">20 likes</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-gray-600 font-semibold">5 days ago</div>
                    <a href="#" className="bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex items-center space-x-3">
                        <span>Connect</span>

                        <div className="w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
          
        </div>
     );
}
 
export default Blog;