function Principal (){
    return(
        <main className="principal">
            <section className="contenedor">
                <div className="contenedor-imagen">
                    <img src="/imagen-clon-google.jpg" />
                </div>
                <div className="contenedor-barra-busqueda">
                    <img src="/buscando-lupa.png" />
                    <img src="/voz-de-google.png" />
                </div>
                <div className="contenedor-botones">
                    <button>Buscar Con Google</button>
                    <button>I'm Feeling Lucky</button>
                </div>
                <div className="contenedor-parrafo">
                    <p>Ofecido por Google en: <span>English</span></p>
                </div>
            </section>
        </main>
    )
}

export default Principal