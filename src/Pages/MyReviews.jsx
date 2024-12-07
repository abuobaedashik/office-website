import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Components/Provider/Authprovider";
import Table from "../Components/Table";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const MyReviews = () => {
  const mydata = useLoaderData();
  console.log(mydata);

  const { user } = useContext(Authcontext);
  console.log(user?.email);

  const spasicUserData = mydata.filter((item) => item.email === user?.email);
  console.log(spasicUserData);

   
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-[#23f245]">
              <th>Reviewer</th>
              <th>Game Name</th>
              <th className="">Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {spasicUserData.map(data => <tr key={data._id}  className="bg-base-200">
              <th>{data?.name}</th>
              <td>{data?.gamename} </td>
              <td className="">{data?.email}</td>
              <td className="flex items-center gap-5 mr-4 justify-center text-xl font-bold ">
                <p><GrUpdate></GrUpdate></p> 
                <p><MdDeleteForever/></p> 
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
