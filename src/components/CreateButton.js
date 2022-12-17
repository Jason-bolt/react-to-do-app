import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";



const CreateButton = ({ text, toggleForm, showForm }) => {
    const [colors, setColors] = useState(
        {
            bgColor: "bg-green-500",
            hoverBgColor: "hover:bg-green-600"
        }
    )

    const changeColor = () => {
        if (showForm) {
            setColors(
                {
                    bgColor: "bg-green-500",
                    hoverBgColor: "hover:bg-green-600"
                }
            )
        }else{
            setColors(
                {
                    bgColor: "bg-red-500",
                    hoverBgColor: "hover:bg-red-600"
                }
            )
        }
    }

  return (
    <div className="my-7 flex items-center justify-center">
        <button className={colors.bgColor + " " + colors.hoverBgColor + " py-4 px-3 text-white rounded flex flex-row items-center justify-center"} onClick={() => {
            toggleForm()
            changeColor()
            }}>
            <span className="mr-2">{showForm ? 'Close' : 'Create Task'}</span>

            {
                showForm ? (
                    <IoMdCloseCircleOutline className="text-xl" />
                    ) : (
                        <IoIosAddCircleOutline className="text-xl" />
                )
            }
        </button>
    </div>
  )
}

export default CreateButton