import "./Card.css";
// Aşağıdaki arrow funtion ile oluşturduğumuz hal:
const Card = ({ title, par, lesson, index }) => (
  <div className="Card">
    <h6>{title}</h6>
    <b>{index}</b>
    <p>{par}</p>
    {lesson > 20 && index == 0 && <div>İleri Düzey</div>}
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
