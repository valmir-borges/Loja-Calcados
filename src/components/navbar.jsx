import React from 'react'
import Style from '../styles/NavBar.module.css'

function navbar() {
  return (
    <div>
      <header class={Style.header}>
            <div class={Style.container}>
                <span class={Style.texto}>HOME</span>
                <span class={Style.texto}>MENU</span>
                <span class={Style.texto}>MARCAS</span>
            </div>
      </header>
    </div>
  )
}

export default navbar
