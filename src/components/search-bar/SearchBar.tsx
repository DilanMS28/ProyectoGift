//updated
import { startSetGif } from "@/root/redux/thunks/gif-thunk/gifThunk"; 
import { useDispatch } from "react-redux";

function SearchBar() {
const dispatch = useDispatch();

const handleSearch = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault();
let searchTerm = event.currentTarget.searchTerm.value.trim(); if (!searchTerm) {
searchTerm="dogs";
}
console.log(searchTerm);

dispatch(startSetGif(searchTerm));
};

return (
<form onSubmit={handleSearch} className="my-8 w-3/4 ">
<label
htmlFor="default-search"
className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
>
Search
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg
aria-hidden="true"
className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
 
stroke="currentColor" viewBox="0 0 24 24"
xmlns="<http://www.w3.org/2000/svg>"
>
<path
strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
></path>
</svg>
</div>
<input
type="search" name="searchTerm" id="default-search"
className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="Search for dogs, GIFs dogs or maybe other GIFs related with dogs"
required
/>
<button type="submit"
className="btn-primary absolute right-2.5 bottom-2.5"
>
Search
</button>
</div>
</form>
);
}

export default SearchBar;
