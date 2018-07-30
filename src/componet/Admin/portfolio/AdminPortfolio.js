import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config, { storage } from './../../../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beSave: true,
            error: false
        }


        this.savePortfolio = this.savePortfolio.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    savePortfolio(e) {


        // const { name } = file
        //, size, type

        const ref = storage.ref()

        const dt = new Date();

        var mountainsRef = ref.child(dt.getTime().toString())
        const file = this.image.files[0]

        mountainsRef.put(file)
            .then(img => {
                img.ref.getDownloadURL()
                    .then(downloadURL => {
                        const newPortfolio = {
                            title: this.title.value,
                            description: this.description.value,
                            image: downloadURL
                        }

                        config.push('portfolio', {
                            data: newPortfolio
                        })

                        alert('Operação realizada com sucesso.')
                        this.props.history.push('/admin/list-portfolio')

                    })
            })

        e.preventDefault()
    }

    onChange() {
        if (this.title.value && this.description.value && this.image.files[0]) {
            this.setState({
                beSave: false
            });
        }
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <h5>Novo Portfolio</h5>
                <br />

                <form onSubmit={this.savePortfolio}>
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <input type="text" className="form-control" id="title" placeholder="Título" onChange={this.onChange} ref={(ref) => this.title = ref} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripion">Descrição</label>
                        <textarea className="form-control" id="description" rows="3" onChange={this.onChange} ref={(ref) => this.description = ref}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Imagem</label>
                        <input type="file" className="form-control-file" id="image" onChange={this.onChange} ref={(ref) => this.image = ref} />
                    </div>
                    <button type="submit" disabled={this.state.beSave} className="btn btn-primary">Salvar</button>

                    <Link to="/admin/list-portfolio" className="btn btn-danger">Cancelar</Link>
                </form>
            </div>
        )
    }
}


export default AdminPortfolio;