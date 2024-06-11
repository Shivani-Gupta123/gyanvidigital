
import { FaFacebook, FaTwitter, FaStar } from 'react-icons/fa';
import './HappyClients.css';

const HappyClients = () => {
  const clients = [
    {
      img: 'https://via.placeholder.com/100',
      name: 'John Doe',
      time: '2 days ago',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?'
    },
    {
      img: 'https://via.placeholder.com/100',
      name: 'Jane Smith',
      time: '1 week ago',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?.'
    },
    {
        img: 'https://via.placeholder.com/100',
        name: 'Jane Smith',
        time: '1 week ago',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?'
      },
      {
        img: 'https://via.placeholder.com/100',
        name: 'Jane Smith',
        time: '1 week ago',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?'
      },
      {
        img: 'https://via.placeholder.com/100',
        name: 'Jane Smith',
        time: '1 week ago',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?'
      },
      {
        img: 'https://via.placeholder.com/100',
        name: 'Jane Smith',
        time: '1 week ago',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quia voluptates rem dolorum aliquam modi facere earum tempora vero voluptate sit laboriosam, eius explicabo, repudiandae temporibus voluptas ea hic voluptatem?'
      },
        
    
  ];

  return (
    <section className="happy-clients">
      <h2>Happy Clients</h2>
      <div className="client-cards">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="client-info">
              <img src={client.img} alt={client.name} className="client-img" />
              <div className="client-details">
                <h3>{client.name}</h3>
                <p className="review-time">{client.time}</p>
                <div className="client-rating">
                  {Array.from({ length: client.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <div className="client-social">
              <FaFacebook />
              <FaTwitter />
            </div>
            <p className="client-review">{client.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
