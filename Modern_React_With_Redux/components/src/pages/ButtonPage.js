import Button from "../components/Button"
import { FaLinux } from "react-icons/fa";

const ButtonPage = () => {

    const handleClick = () => {
        console.log('Click')
    }

    return (
        <div>
            <div className="mb-5">
            <Button primary rounded  onClick={handleClick}>
                <FaLinux />
                Click Me !!
            </Button>
            </div>
            <div>
            <Button primary rounded onClick={handleClick}>
                <FaLinux />
                Dont Click Me !!
            </Button>
            </div>
        </div>
    )
}

export default ButtonPage