import './Menu.css';

const Menu = () => {
  return (
    <header>
      <div>
        <img src="/images/logo.svg" alt="Casa Verde"/>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/como-fazer">Como fazer</a>
          </li>
          <li>
            <a href="/ofertas">Ofertas</a>
          </li>
          <li>
            <a href="/depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="/videos">Videos</a>
          </li>
          <li>
            <a href="/carrinho">Meu Carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
