import { newsMock } from "../../mocks/newsMock";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ModificarBlog = () => {
    const {idblog} = useParams ();
    const [blog,setBlog] = useState(...newsMock.filter((blog) => blog.source.id == idblog));

    const navigate = useNavigate ();

    const [titulo, setTitulo] = useState(blog.title);
    const [descripcion, setDescripcion] = useState(blog.description);
    const [contenido, setContenido] = useState(blog.content);
    const [imagen, setImagen] = useState(blog.urlToImage);

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
        toast.info("blog modificado");
        navigate("/mis-blogs");
    }


    return (
        <div className="contenedor">
        <form onSubmit={handleSubmit} className="form">
            <h1>modificar blog</h1>

            <div className="input">
                <label htmlFor="titulo" className="label">Titulo</label>
                <input type="text" name="title" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo} />
            </div>

            <div className="input">
                <label htmlFor="descripcion" className="label">Descripcion</label>
                <input type="text" id="descripcion" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} />
            </div>

            <div className="input">
                <label htmlFor="contenido" className="label">Contenido</label>
                <textarea type="text" id="contenido" onChange={(e) => setContenido(e.target.value)} cols={50} rows={10} value={contenido}/>
            </div>

            <div className="input">
                <label htmlFor="imagen" className="label"> Imegen</label>
                <input type="text" id="imagen" onChange={(e) => setImagen(e.target.value)} value={imagen}/>
            </div>

            <button type="submit" className="boton">modificar</button>
        </form>
    </div>
    )
}

export default ModificarBlog