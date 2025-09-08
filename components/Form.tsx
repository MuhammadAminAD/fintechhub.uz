'use client'

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { styles } from "@/styles/styles"
import { FormsSchema } from "@/models/Form.zod"
import { useEffect } from "react"


export default function Form() {


    useEffect(() => {

    }, [])

    const { register, handleSubmit, control, formState: { errors },
    } = useForm({
        resolver: zodResolver(FormsSchema),
        defaultValues: {
            ism: "",
            phone: "",
        },
    })

    const onSubmit = async (data: { ism: string; phone: string }) => {
        const newData = {
            ...data,
            kurs: "frontend",
            target: 4,
            desc: ""
        }
    }

    return (
        <section className="py-8 xl:py-[112px] relative text-white text-center max-md:px-[32px]">
            <div className="bg-purple w-full h-full top-1/2 left-1/2 -translate-1/2 absolute z-[-1] form-bg"></div>

            <h3 className={`${styles.tagline}`}>
                Fintechhub
            </h3>
            <h2 className={`${styles.title} mt-4 mb-6 max-w-[786px] mx-auto text-center`}>
                Bepul sinov darsga yoziling
            </h2>
            <p className="text-[20px] font-nunito leading-[150%]">
                Biz siz bilan rivojlanishga doim xursandmiz!
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col max-w-[560px] mx-auto mt-5 xl:mt-20 text-start "
            >
                {/* Ism */}
                <label className="text-[18px] font-nunito leading-[150%] mb-2">
                    Isimingiz
                </label>
                <input
                    type="text"
                    {...register("ism")}
                    className="mb-1 w-full outline-0 bg-[#FFFFFF1A] h-12 px-4 text-[20px] font-nunito leading-[150%]"
                />
                {errors.ism && (
                    <span className="text-red-400 text-sm mb-5">
                        {errors.ism.message}
                    </span>
                )}

                {/* Telefon */}
                <label className="text-[18px] font-nunito leading-[150%] mb-2">
                    Telefon raqamingiz
                </label>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <PhoneInput
                            country={'uz'}
                            value={field.value}
                            onChange={field.onChange}
                            inputStyle={{
                                background: "#FFFFFF1A",
                                height: "48px",
                                // paddingLeft: "16px",
                                fontSize: "20px",
                                fontFamily: "Nunito, sans-serif",
                                lineHeight: "150%",
                                width: "100%",
                                marginBottom: "4px",
                                border: 'none'
                            }}
                            buttonStyle={{
                                border: 'none',
                                background: "transparent"
                            }}
                            dropdownStyle={{
                                color: "black"
                            }}

                        />
                    )}
                />
                {errors.phone && (
                    <span className="text-red-400 text-sm mb-5">
                        {errors.phone.message}
                    </span>
                )}

                <button
                    type="submit"
                    className={`${styles.redBtn} max-md:w-full mx-auto my-6 md:w-70 w-full`}
                >
                    Yuborish
                </button>

                <a href="https://t.me/Fintech_Sotuv" target="_blank" rel="noopener noreferrer">
                    <button
                        type="button"
                        className={`${styles.redBtn} flex mx-auto gap-2 justify-center items-center bg-blue-500 border-blue-500 md:w-70 w-full`}
                    >
                        Telegram orqali bog’lanish
                    </button>
                </a>
            </form>



        </section>
    )
}
