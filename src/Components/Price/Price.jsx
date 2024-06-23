
const datas =[
    {
        id:1,
        name:"BASIC PLAN",
        price: "49K",
        discription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:2,
        name:"BEGINNER PLAN",
        price: "79K",
        discription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:3,
        name:"PREMIUM PLAN",
        price: "109K",
        discription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        id:4,
        name:"ULTIMATE PLAN",
        price: "149K",
        discription:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
]

const Price = () => {
    return (
        <div className="mt-6 md:mt-12">
            {/* header */}
            <div className=" space-y-3 text-center py-6">
                <p className="text-[#1eb2a6] font-bold text-lg">OUR PRICING</p>
                <h1 className="font-bold text-3xl md:text-5xl">Pricing & Packages</h1>
            </div>
            
        </div>
    );
};

export default Price;