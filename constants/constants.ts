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
    {
        id: 0,
        Icon: IconJs,
        title: "Frontend Dasturlash",
        span: "Frontend",
        name: "Frontend",
        path: "frontend",
        toshkentda_kurslar: "Biz shunday asrda yashayapmizki, undagi o‘zgarishlar kun sayin amalga oshmoqda. Kecha ishlab turgan g‘oyalar, qarashlar yoki uslublar hech qancha vaqt o‘tmasdan eskirmoqda. Zamon yangi trendlarni ommaga chiqarmoqda. Bu hamma sohaga tegishli bo‘lib qoldi. Ayniqsa, axborot kommunikatsion texnologiyalar sohasi dunyoga ko‘p yangilik va ixtirolarni bermoqda. Dasturchilarga bo‘lgan talab ortmoqda. Kompьyuterlar uchun desktop dasturlar, Internetda veb saytlar va mobil ilovalar kuni tartibimizning ajralmas qismiga aylandi. Frontend, Backend, Mobile degan iboralar tobora ko‘p qo‘llanilmoqda. Bugun Toshkentda Frontend kurslari haqida so‘z yuritamiz.",
        fintech_labaratoriyas: "Ilm olish borasida bugungi yoshlarga teng kelib bo‘lmaydi. Ular har kuni axborot oqimini qabul qilish bilan birga, IT bilimlarni ham mukammal o‘rganishmoqda. Bu albatta yaxshi, chunki bekorchilik har jihatdan bizning xalqqa to‘g‘rikelmaydigan narsa. Biror kasb ustasi bo‘lib etishish, ertaga tirikchilik uchun zamin hozirlashi haqiqatlir. Shunday ekan, IT bilimlarni olish bugunning dolzrab vazifasi hisoblanadi. Bugunga kelib, Web-dasturlash bu yo‘nalishning engrivojlangan qismi bo‘lib ulgurdi. Uni dasturchilar tilida Frontend va Backend deb atashadi. Backend asosan veb saytlarning ichki ko‘rinishi, ya’ni server tarafdan ishlasa Frontend tashqi ko‘rinishga ishlaydi.",
        malumot: `Keling, bu so‘zning ma’nosini tushuntirib berishga harakat qilaylik. Frontend - bu foydalanuvchi uchun va u ko‘rib turadigan interfeys (ko‘rinish) degani. Ya’ni, veb sayt yoki mobil ilovaning inson ko‘zi ko‘rib turgan qismiga aytiladi.Dizayn, baner, navigatsiya, tugma va havolalarni bosish va hokazo. Foydalanuvchi nima ko‘rib utrgan bo‘lsa o‘sha narsa Frontend deyiladi. U mahsulot yoki xizmat turi haqidagi mantiq bilan bog‘liq bo‘ladi. Mijoz tarafida "labbay" deb,"muloqot" qiladi va server bilan aloqada bo‘lib turadi. Server bilan aloqa qismini Backend-dasturchilar yozishadi.
Frontend dasturchilar ishlatadigan eng asosiy mehnat qurollari - instrumentlar bu HTML, CSS va JavaScript hisoblanadi.
- HTML bu sahifalar tizimi ("strukturasi") va kontent uchun;
- CSS bu tashqi ko‘rinishni (rang, hajm, o‘lcham va hokazo )uslubiy jihatdan to‘g‘irlash uchun;
- JavaScript bu interfaol qo‘shimchalarni qo‘shish uchun.
Huddi shu asbob-uskunalari mobil ilovalarni yaratishda ham ishlatiladi.`,
        dars_soati: 2,
        davomiyligi: 10,
        oquvchilar_soni: 12,
        daraja: "boshlang'ich",
        talim_turi: "offline",
        dars_tili: "o'zbek"
    },
    { id: 1, Icon: IconPy, title: "BAckend Dasturlash (python)", span: "BAckend", name: "Backend", path: "backend-python", },
    { id: 2, Icon: IconGo, title: "BAckend Dasturlash (Golang)", span: "BAckend", path: "backend-golang" },
    { id: 3, Icon: IconDo, title: "Devops engineering dasturlash", span: "Devops engineering", name: "Flutter", path: "flutter" },
    { id: 4, Icon: IconFt, title: "mobile flutter dasturlash", span: "mobile flutter", name: "Devops", path: "devops" },
    { id: 5, Icon: IconSc, title: "bolalar uchun scratch", span: "scratch", name: "Scratch", path: "scratch" },
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

import basito from "@/assets/icons/basito.svg"
import bellatime from "@/assets/icons/bellatime.svg"
import eduon from "@/assets/icons/eduon.svg"
import mfactor from "@/assets/icons/mfactor.svg"
import millimarket from "@/assets/icons/Millimarket.svg"
import mysafar from "@/assets/icons/Mysafar.svg"
import promark from "@/assets/icons/Promark.svg"

export const partnersData = [
    basito,
    bellatime,
    eduon,
    mfactor,
    millimarket,
    mysafar,
    promark
]