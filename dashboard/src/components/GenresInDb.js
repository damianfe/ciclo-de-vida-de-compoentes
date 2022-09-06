import React from 'react';
import Genre  from './Genre';
import {Component} from 'react'

/* let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
] */

class GenresInDb extends Component{

    constructor(){
        super();
        this.state = {
            genresList : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/genres').then(result => result.json()).then(generos => {
                this.setState({genresList : generos.data})
            }).catch(error => console.log(error))
    }


    cambio(){
        console.log("entro")
        document.querySelector('div.fondoCaja').classList.add("bg-secondary");
    } 



    render() {
        return (
            <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.cambio}>Genres in Data Base</h6>
                    </div>
                    <div className="card-body fondoCaja">
                        <div className="row">
                            {
                                this.state.genresList.map((genre,index)=>{
                                    return  <Genre  genre={genre.name}  key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
        );
    }
}
export default GenresInDb;