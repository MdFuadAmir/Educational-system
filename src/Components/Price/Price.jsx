
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
            <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-12">
                {
                    datas.map((data) => <div key={data.id} className="px-3 py-6 text-center items-center bg-white rounded-md">
                        <p className="font-bold text-xl">{data.name}</p>
                        <h1 className="mt-6 font-bold text-4xl text-[#1eb2a6]"><span className="text-xl text-black pr-2">$</span>{data.price}</h1>
                        <p className="text-gray-400 my-8 text-lg">{data.discription}</p>
                        <button className="btn w-full btn-outline border-2 border-[#1eb2a6] text-[#1eb2a6] hover:text-white hover:bg-[#1eb2a6] hover:border-[#1eb2a6]">GET STARTED</button>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default Price;