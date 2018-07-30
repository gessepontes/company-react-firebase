import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = prop => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cadastro
  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="/admin/list-portfolio" className="dropdown-item">Portfolio</Link>
            </div>
        </div>
    )
}

export default AdminMenu;