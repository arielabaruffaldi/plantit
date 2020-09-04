import img1 from "./../assets/img/1.jpg";
import img2 from "./../assets/img/2.jpg";
import img3 from "./../assets/img/3.jpg";
import img4 from "./../assets/img/4.jpg";

export default function productsList() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{
                    id: "1",
                    title: "Monstera",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio",
                    price: 10,
                    color: "blanco",
                    img: img1,
                },
                {
                    id: "2",
                    title: "Sanseviera",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio",
                    price: 5,
                    color: "blanco",
                    img: img2,
                },
                {
                    id: "3",
                    title: "Dieffembaquia",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio",
                    price: 50,
                    color: "blanco",
                    img: img3,
                },
                {
                    id: "4",
                    title: "Potus",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptates distinctio",
                    price: 500,
                    color: "blanco",
                    img: img4,
                },
            ]);
        }, 0);
    });
}