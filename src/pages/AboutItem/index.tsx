import { useParams, useNavigate } from 'react-router-dom';

export const AboutItem = () => {

    const params = useParams();
    const navigate = useNavigate();

    const  handleBackPage = () => {
        navigate(-1);
    }

    const  handleBackHome = () => {
        navigate('/');
    }

    return(
        <div>
            Página de {params.slug}
            <br />
            <button onClick={handleBackPage}>Voltar</button>
            <button onClick={handleBackHome}>Home</button>
        </div>
    );
}