import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <Link to="/input-com-foto">
                <h1>Input com Foto</h1>
            </Link>
        </div>
    )
}

export default Home;