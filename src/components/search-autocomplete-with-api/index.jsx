import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);
   const [error, setError] = useState(false);
   const [searchParam, setSearchParam] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const [filteredusers, setFilteresusers] = useState([]);

   function handleChange(event) {
      const query = event.target.value.toLowerCase();
      setSearchParam(query);
      if (query.length > 1) {
         const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexof(query) > -1)
            : [];
         setFilteresusers(filteredData)
         setShowDropdown(true);
      } else {
         setShowDropdown(false);
      }

   }

   async function fetchListOfUsers() {
      try {
         const response = await fetch("https://dummyjson.com/users");
         const data = await response.json();

         if (data && data.users && data.users.length) {
            setUsers(data.users.map((userItem) => userItem.firstName));
            setLoading(false)
            setError(null)
         }
      } catch (error) {
         setLoading(false);
      console.log(error);
      setError(error);

      }

   }




   useEffect(() => {
      fetchListOfUsers();

   }, []);

   return (
      <div className="search-autocomplete-container">
         {loading ? (<h1>loading data...please wait</h1>) : (<input value={searchParam} name="search-users" placeholder="Search users here ..."
            onChange={handleChange}
         />)}


         {
            showDropdown && <Suggestions data={filteredusers} />
         }
      </div>
   );

}