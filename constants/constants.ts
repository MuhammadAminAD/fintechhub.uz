import { PageLink } from "@/types/types";

export const pagesLink: PageLink[] = [
    { id: 0, linkName: "home", linkPath: "/" },
    { id: 1, linkName: "courses", linkPath: "/courses" },
    { id: 2, linkName: "teachers", linkPath: "/teachers" },
    { id: 3, linkName: "about", linkPath: "/about" },
]


import img1 from "@/assets/images/img1.png"
import img2 from "@/assets/images/img2.png"
import img3 from "@/assets/images/img3.png"
import img4 from "@/assets/images/img4.png"
import img5 from "@/assets/images/img5.png"
import img6 from "@/assets/images/img6.png"
import { StaticImageData } from "next/image";
export const imagesData: StaticImageData[][] = [
    [img1], [img2, img3], [img4], [img5, img6]
]

export const FAQs = [
    {
        id: 0,
        question: "Manzilingiz qayerda?",
        answer: "Bizning manzilimiz — Toshkent shahri, Mirobod tumani, Afrosiyob 4-ko‘chasi."
    },
    {
        id: 1,
        question: "Kurslaringiz kimlar uchun?",
        answer: "Kurslarimiz 8 yoshdan boshlab IT va dasturlashga qiziqqan barcha uchun mo‘ljallangan. Boshlang‘ich bilimga ega bo‘lmagan bolalar ham, kasbini IT sohasi bilan bog‘lamoqchi bo‘lgan o‘smirlar va kattalar ham qatnashishlari mumkin."
    },
    {
        id: 2,
        question: "Kurslar qancha davom etadi?",
        answer: "Kurslarimizning davomiyligi yo‘nalishga qarab turlicha bo‘ladi. O‘quv dasturlarimiz 3 oydan 10 oygacha davom etadi."
    },
]


import IconJs from "@/assets/icons/javascript.svg"
import IconPy from "@/assets/icons/python.svg"
import IconGo from "@/assets/icons/go.svg"
import IconDo from "@/assets/icons/devops.svg"
import IconFt from "@/assets/icons/flutter.svg"
import IconSc from "@/assets/icons/scratch.svg"


export const CoursesData = [
    { id: 0, Icon: IconJs, title: "Frontend Dasturlash", span: "Frontend" },
    { id: 1, Icon: IconPy, title: "BAckend Dasturlash (python)", span: "BAckend" },
    { id: 2, Icon: IconGo, title: "BAckend Dasturlash (Golang)", span: "BAckend" },
    { id: 3, Icon: IconDo, title: "Devops engineering dasturlash", span: "Devops engineering" },
    { id: 4, Icon: IconFt, title: "mobile flutter dasturlash", span: "mobile flutter" },
    { id: 5, Icon: IconSc, title: "bolalar uchun scratch", span: "scratch" },
]

import CT4 from "@/assets/icons/call.svg";
import CT1 from "@/assets/icons/location_on.svg";
import CT2 from "@/assets/icons/mingcute_youtube-line.svg";
import CT3 from "@/assets/icons/ri_instagram-line.svg";


export const ContactData = [
    { id: 0, title: "Telefon raqam", linkTitle: "+998 71 203-88-00", link: "tel:+998712038800", Icon: CT4, desc: "09:00 dan 19:00 gacha telefon qilsangiz bo’ladi" },
    { id: 1, title: "Youtube sahifamiz", linkTitle: "fintechhubuz", link: "https://www.youtube.com/@fintechhubuz", Icon: CT2 },
    { id: 2, title: "Instagram sahifamiz", linkTitle: "fintechhubuz", link: "https://www.instagram.com/fintechhubuz/", Icon: CT3 },
    { id: 3, title: "Manzilimiz", linkTitle: "Toshkent shahri Mirobod tumani Afrosiyob 4 ko'chasi", link: "https://maps.app.goo.gl/sQFYVBrB7CB7Mked7", Icon: CT1 },
]


import te from "@/assets/images/Rectangle 5.png"

export const teachersData = [
    { id: 0, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 1, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 2, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 3, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 4, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 5, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 6, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
    { id: 7, name: "Ibrohimjon Raufjonov", job: "Mobile / Flutter dasturchi.", photo: te },
]