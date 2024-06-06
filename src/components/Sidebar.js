import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import fireIcon from './images/fire.png';
import boxIcon from './images/box.png';
import receiptIcon from './images/invoice.png';
import couponIcon from './images/ticket.png';
import storeIcon from './images/pharmacy.png';
import whatsappIcon from './images/phone-message.png';
import phoneIcon from './images/telephone.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <h2>Compras</h2>
        <ul>
          <li>
            <Link to="#">
              <img src={fireIcon} alt="Promotions" />
              Promoções
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={boxIcon} alt="Products" />
              Produtos
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={receiptIcon} alt="Orders" />
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={couponIcon} alt="Coupons" />
              Cupons
            </Link>
          </li>
        </ul>
        <h2>Administrativo</h2>
        <ul>
          <li>
            <Link to="#">
              <img src={storeIcon} alt="Stores" />
              Estabelecimentos
            </Link>
          </li>
        </ul>
        <h2>Ajuda</h2>
        <ul>
          <li>
            <Link to="#">
              <img src={whatsappIcon} alt="Whatsapp" />
              Whatsapp
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={phoneIcon} alt="Distributor Contact" />
              Contato Distribuidora
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
