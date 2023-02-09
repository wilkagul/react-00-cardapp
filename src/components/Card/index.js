import "./Card.css";
// Aşağıdaki arrow funtion ile oluşturduğumuz hal:
const Card = ({ title, par }) => (
  <div className="Card">
    <h6>{title}</h6>
    <p>{par}</p>
    <button>Devamı</button>
  </div>
);
// Normal fonksiyon ile oluşturduğumuz hal yukarıdaki ile aynı

// function Card({ title, par }) {
//   return (
//     <div className="Card">
//       <h6>{title}</h6>
//       <p>{par}</p>
//       <button>Devamı</button>
//     </div>
//   );
// }
export default Card;
