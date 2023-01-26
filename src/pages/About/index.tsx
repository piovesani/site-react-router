import { useSearchParams } from "react-router-dom";

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return(
        <div>
            Filtro: {searchParams.get('filter')}<br/>
            Página sobre
        </div>
    );
}