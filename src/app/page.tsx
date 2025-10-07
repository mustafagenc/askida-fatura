import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen gap-10">
            <Image
                src={'/images/logo/askidafatura.png'}
                width={128}
                height={128}
                alt="Askıda Fatura"
            />
            <h1 className="text-3xl font-bold text-center">Askıda Fatura</h1>
        </div>
    );
}
