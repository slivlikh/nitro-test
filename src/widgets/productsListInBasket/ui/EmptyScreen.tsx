import {Link} from 'react-router'

export const EmptyScreen = () => {

    return (
        <>
            <p>Basket is empty</p>
            <Link to="/products">Go to products page</Link>
        </>
    )
}