import { useState } from "react"
import { toast } from "react-toastify";

const CrearBlog = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [contenido, setContenido] = useState("");
    const [imagen, setImagen] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title: titulo,
            description: descripcion,
            content: contenido,
            urlToImage: imagen,
            publishedAt: new Date(),
            author: "user1",

        }
        console.log(blog);
        toast.success("blog creado");
    }
    return (
        <div className="contenedor">
            <form onSubmit={handleSubmit} className="form">
                <h1>Crear Blog</h1>

                <div className="input">
                    <label htmlFor="titulo" className="label">Titulo</label>
                    <input type="text" name="title" id="titulo" onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className="input">
                    <label htmlFor="descripcion" className="label">Descripcion</label>
                    <input type="text" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} />
                </div>

                <div className="input">
                    <label htmlFor="contenido" className="label">Contenido</label>
                    <textarea type="text" id="contenido" onChange={(e) => setContenido(e.target.value)} cols={50} rows={10} />
                </div>

                <div className="input">
                    <label htmlFor="imagen" className="label"> Imegen</label>
                    <input type="text" id="imagen" onChange={(e) => setImagen(e.target.value)} />
                </div>

                <button type="submit" className="boton">Crear Blog</button>
            </form>
        </div>
    )

}

export default CrearBlog