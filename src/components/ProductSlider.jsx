import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "../styles/ProductSlider.css";
import ProductDesc from "./ProductDesc";

const products = [
    {
        title: "Moksham gachami",
        desc: "Depicting way to peace on path of lord Buddha ",
        price: "SOLD",
        img: "https://zigguratss.com/assets/upload/art-963.jpeg",
    },
    {
        title: "Suramyaa",
        desc: "Depicting Krishna Radha love towards cows",
        price: " 43750/-",
        img: "https://zigguratss.com/assets/upload/art-960.jpeg",
    },
    {
        title: "Shepherd",
        desc: "I had just stepped out into a new world as my first solo traveller. So many questions in my head, i was beginning to feel overwhelmed by all the insecurities and confusions. As i was walking thtough this small tree cover through a Rajasthan. I suddnenly noticed a flock of sheeps walking past me, a shephered brushed past me and ran towards a ditch on the open field. For some reason i felt a pang of energy within me, i followed him and the sheeps, and next moment i knew, i was running behind them, taking hold of that one moment. After that euphoria, I realised all my insecurities and confusions had been replaced into a sense of wonder and love for adventure. This was the reason i left home. Realising again, I am in God's own lap forever. ",
        price: "226200/-",
        img: "https://zigguratss.com/assets/upload/art-1087.jpg",
    },
    {
        title: "Celibration-7",
        desc: "Celibration-7",
        price: " 169000",
        img: "https://zigguratss.com/assets/upload/art/zigguratss_df2895a67970247c650c120119df4d70.jpg",
    },
    {
        title: "Milano e le storie sulla Darsena",
        desc: "La Darsena, un antico bacino portuale situato nel quartiere Navigli di Milano, sia un luogo simbolico che rappresenta la storia legata all'acqua della città. Il cuore liquido di Milano, rappresenta, così, la connessione tra il passato storico e l'attualità della città, testimoniando l'importanza che l'acqua ha avuto nella sua evoluzione. La sua riqualificazione ha contribuito a valorizzare questo patrimonio e a creare uno spazio pubblico vivace e attrattivo.",
        price: "175000/-",
        img: "https://zigguratss.com/assets/upload/art-361.jpg",
    },
    {
        title: "Eternal Grace",
        desc: "This artwork places the peacock within an opulent interior, blending natural beauty with architectural grandeur. The ornate pillars, vessels, and carved furniture symbolize heritage and cultural richness, while the peacock embodies grace, pride, and divine elegance — as though nature itself has claimed the palace. In halls carved with time, the peacock stands — not as a visitor, but as royalty returned. Its feathers spill like silk, guarding stories older than the walls.",
        price: " 68750/-",
        img: "https://zigguratss.com/assets/upload/art/zigguratss_40ab5c59106bbfaa3de56dc5194fcfc0.jpeg",
    },
    {
        title: "Tranquil Awakening",
        desc: "Tranquil Awakening embodies the serene beauty and transformative power of meditation in today’s fast-paced, chaotic world. This soothing artwork centers on a meditative figure radiating calmness and introspection. Her closed eyes and gentle posture reflect a deep connection to her inner self, symbolized by the radiant white lotus on her forehead—a timeless emblem of purity, enlightenment, and rebirth..",
        price: " 13750/-",
        img: "https://zigguratss.com/assets/upload/art-1259.jpg",
    },
];

export default function ProductSlider() {
    return (
        <main>
            <div className="logo">
                <h1>logo</h1>
            </div>

            <Swiper
                modules={[Mousewheel]}
                loop={true}
                mousewheel={true}
                slidesPerView={4}
                speed={1500}
                spaceBetween={0}
                className="mySwiper"

            >
                {products.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <div className="info">
                                <h2>{item.title}</h2>
                                <ProductDesc text={item.desc} />
                            </div>
                            <div className="price">{item.price}</div>

                            <button className="explore-btn">
                                <span>Explore Product</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M3.33334 12.6667L12.6667 3.33333M12.6667 3.33333H4.66667M12.6667 3.33333V11.3333"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="slide-img">
                            <img src={item.img} alt="" />
                        </div>

                        <div className="slide-img-blur">
                            <img src={item.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}