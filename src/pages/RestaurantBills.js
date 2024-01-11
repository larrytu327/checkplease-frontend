import { useState } from 'react';

const RestaurantBills = (props) => {
    const [ restaurantbills, setRestaurantbills ] = useState([]);

    const BASE_URL = "http://localhost:4000/restaurantbills"

    const getRestaurantBills = async () => {
        try {
            const response = await fetch(BASE_URL);
            const allRestaurantBills = await response.json();
            setRestaurantbills(allRestaurantBills);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(()=>{getRestaurantBills()}, []);
    console.log(`There are ${restaurantbills.length} restaurant bills available to render`);

    const loaded = () => {
        return restaurantbills?.map((restaurantbill) => {
        return (
            <div key={restaurantbill._id}>
            <h1>{restaurantbill.name}</h1>
            <img src={restaurantbill.image} />
            <h3>{restaurantbill.name}</h3>
            </div>
        );
        });
    };

    const loading = () => (
        <section className="people-list">
        <h1>
            Loading...
            <span>
            <img
                className="spinner"
                src="https://freesvg.org/img/1544764567.png"
            />{" "}
            </span>
        </h1>
        </section>
    );

  return (
    <section className="people-list">{restaurantbills && restaurantbills.length ? loaded() : loading()}</section>
  );


    return <h1>Restaurant Bills Page</h1>
}

export default RestaurantBills