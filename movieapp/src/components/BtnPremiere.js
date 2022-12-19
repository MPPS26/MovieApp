import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function BtnProximamente() {

    const navigate = useNavigate();
    const [showPremiere, setShowPremiere] = useState(true);
    const [premiereData, setPremiereData] = useState([]);

    useEffect(() => {
        const getPremiereData = async () => {
            const respPremiere = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=90c2c57ed9eabcec0ae2b8ebe7b81547&language=es-ES&&primary_release_year=2022&page=1&region=ES')
            setPremiereData(respPremiere.data.results)
        }
        getPremiereData();
    }, []);

    function GoNewPage() {
        setShowPremiere(!showPremiere)
    }

    return (
        <>
            <div id="separar">

                <button className='buttons' onClick={() => navigate('/upcoming')}>Proximamente</button>

            </div>

            <div id="separar">
                <button className='buttons' onClick={() => navigate('/topRated')}>Mejor valoradas</button>
            </div>


            <div id="separar">
                <button className='buttons' onClick={() => navigate('/now_playing')}>Cartelera</button>
            </div>

        </>

    );
}

export default BtnProximamente


