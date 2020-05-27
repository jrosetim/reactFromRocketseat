import React, {Component} from 'react'
import api from '../../services/api'
import './style.css'

export default class Main extends Component{
  constructor(){
    super()
    this.state = {
      products: [],
      productsInfo: {},
      page: 1
    }
  }

  componentDidMount() {
    this.loadProdutos();
  }

  loadProdutos = async(page=1) => {
    const response = await api.get(`/products?page=${page}`)

    const {docs, ...productsInfo} = response.data;
    this.setState({
      products: docs,
      productsInfo,
      page
    })
  }

  prevPage = () => {
    const {page, productsInfo} = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;
    
    this.loadProdutos(pageNumber);

  }

  nextPage = () => {
    const {page, productsInfo} = this.state;

    if (page === productsInfo.pages) return;

    const pageNumber = page + 1;
    
    this.loadProdutos(pageNumber);
  }

  render() {
    const { products, productsInfo, page } = this.state;

    return (
      <div className="product-list">
        {
          products.map(product =>(
          <article key={product._id}>
             <strong>{product.title}</strong>
             <p>{product.description}</p>

             <a href="">Acessar</a>
          </article>
          ))
        }
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productsInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>

      </div>
    )
  }

}