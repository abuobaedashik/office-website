import { useContext, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { Authcontext } from "../Components/Provider/Authprovider";
import { Link, useLoaderData } from "react-router-dom";

const MyReviews = () => {
  const mydata = useLoaderData();
  console.log(mydata);
  const { user } = useContext(Authcontext);
  console.log(user?.email);

  // Filtered user data stored in state
  const [datato, setdatato] = useState(
    mydata.filter((item) => item.email === user?.email)
  );

  const handleDelete = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("delete successfull");
          fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });

                // Update the state after deletion
                const remainData = datato.filter((total) => total._id !== id);
                setdatato(remainData); // Update state
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
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
            {/* Render from state */}
            {datato.map((data) => (
              <tr key={data._id} className="bg-base-200">
                <th>{data?.name}</th>
                <td>{data?.gamename} </td>
                <td className="">{data?.email}</td>
                <td className="flex items-center gap-5 mr-4 justify-center text-xl font-bold ">
                  <Link to={`/myreview/update/${data._id}`}>
                    <MdUpdate />
                  </Link>
                  <p onClick={() => handleDelete(data._id)}>
                    <MdDeleteForever />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
