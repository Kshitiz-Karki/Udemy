import useNavigation from "../hooks/UseNavigation"

const Route = ({ path, children }) => {

    const { currentPath } = useNavigation()

    if ( path === currentPath) {
        return children
    }

    return null
}

export default Route