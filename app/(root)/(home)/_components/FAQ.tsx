'use client'
import { useState } from "react";
import chevronIcon from "@/assets/icons/ChevronY.svg"
import { styles } from "@/styles/styles";
import { FAQs } from "@/constants/constants";

export default function FAQ() {
    const [opened, setOpened] = useState<number | null>(null);
    const [formModal, setFormModal] = useState(false)

    return (
        <>
            <section className="text-white max-w-[768px] mx-auto xl:py-[112px] max-xl:p-8 max-xl:w-full">
                <h2 className={`${styles.title} text-center text-[28px]`}><span className="text-purple">Ko’p</span> beriladigan savollar</h2>
                <p className="text-[20px] leading-[150%] font-nunito mb-5 xl:mb-20 mt-6 text-center" >Sizni qiziqtirishi mumkin bo’lgan savollarga shu yerdan javob topishingiz mumkin!</p>

                <div>
                    {FAQs.map(({ id, question, answer }) => (
                        <div key={id} className="border-y border-collapse border-[#FFFFFF33]" data-aos="fade-right">
                            <button className="flex items-center justify-between w-full py-[21px]" onClick={() => setOpened(opened === id ? null : id)}>
                                <h4 className="text-[20px] leading-[150%] font-nunito font-bold">{question}</h4>
                                <img src={chevronIcon} alt="" className=" duration-300" style={{ transform: opened !== id ? `rotate(-180deg)` : "" }} />
                            </button>
                            <p className="text-[18px] leading-[150%] font-nunito overflow-hidden duration-300" style={{ maxHeight: opened === id ? "300px" : "0px", marginBottom: opened === id ? "24px" : 0 }}>{answer}</p>
                        </div>
                    ))}
                </div>


                <div className="max-w-[560px] mx-auto mt-5 xl:mt-20" data-aos="zoom-in">
                    <h2 className={`${styles.title} text-center mb-4 xl:mb-4.5 text-[28px]`}>
                        <span className="text-purple">Hali ham </span> <br /> savolingiz <br /> bormi?
                    </h2>

                    <p className="text-[20px] leading-[150%] font-nunito mt-6 text-center">Biz bilan bog’lanib, barcha savollaringizga javob oling!</p>



                    <button className={`${styles.redBtn} block  max-md:w-full w-fit mx-auto my-6`}
                        onClick={() => setFormModal(true)}
                    >
                        Bog’lanish
                    </button>


                </div>
            </section>
        </>

    )
}
