import { useAtom } from "jotai"
import { petsAtom } from "../atoms/pets"
import { Link } from "react-router-dom";

export function PetList(){
    const [pets] = useAtom(petsAtom)

return (
    <div className="pet-table-wrapper">
        <Link to="/list/add">Add new</Link>
      <table className="pet-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={pet.id}>
              <td>{index + 1}</td>
              <td>{pet.name}</td>
              <td>{pet.breed}</td>
              <td>
                <img src={pet.imgurl} alt={pet.name} className="pet-img" />
              </td>
              <td>{pet.sold && "sold" || "avaliable"}</td>
              <td>
                  <button
                    className="delete-btn">
                    Delete
                  </button>
                <button
                    className="update-btn">
                    Update
                </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AddPetForm(){
    return (
        <div>adding new</div>
    )
}