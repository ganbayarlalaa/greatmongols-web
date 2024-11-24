import { useState } from "react";
import CustomModal from "./CustomModal";
import { Facebook, Gmail, Instagram, Phone } from "./ContactIcons";
const AboutUs = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <section id="about" className="py-16 dark:bg-gray-800">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white ">
        Бидний тухай
      </h2>
      <section className="relative py-12 ">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5 ">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
            <img
              className="mx-auto h-full rounded-3xl object-cover lg:mx-0"
              src="https://ganbayarlalaa.github.io/greatmongols-web/toastmasters.jpg"
              alt="about Us image"
            />
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
              <div className="flex w-full flex-col items-start justify-center gap-8">
                <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                  {/* <h2 className=" text-center text-4xl font-bold leading-normal text-gray-900 lg:text-start dark:text-white ">
                    Бидний тухай
                  </h2> */}
                  <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                    Great Mongols Toastmasters Club нь Олон улсын Toastmasters
                    International байгууллагын Монгол Улс дахь салбар гишүүн
                    клуб бөгөөд олон нийтэд нээлттэй, Монгол дахь хамгийн том
                    клубын нэг гэдгээрээ онцлог юм. Мөн долоо хоног бүрийн
                    хурлаа Мягмар гарагт тогтмол Англи хэлээр зохион байгуулдаг
                    бөгөөд "Toastmasters Pathways Learning Experience" хэмээх
                    боловсролын хөтөлбөрийн дагуу илтгэх ур чавдар, харилцааны
                    ур чадвар болон манлайллын ур чадваруудыг хөгжүүлэхээс гадна
                    Англи хэлээ сайжруулах давуу талтай.
                  </p>
                  <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                    ✅ Түүнчлэн хуралд зочноор оролцож манай үйл ажиллагаатай
                    танилцах бүрэн боломжтой
                  </p>
                </div>
                <div className="inline-flex w-full items-center justify-center gap-5 sm:gap-10 lg:justify-start">
                  {/* facebook */}
                  <Facebook />
                  {/* instagram */}
                  <Instagram />
                  {/* mail */}
                  <Gmail />
                  <Phone />
                  <div className="inline-flex flex-col items-start justify-start"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5 dark:bg-gray-800">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start">
              <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start">
                {/* <h2 className="text-center text-4xl font-bold leading-normal text-gray-900 lg:text-start dark:text-white">
                  Бидний тухай
                </h2> */}
                <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                  Great Mongols Toastmasters Club нь Олон улсын Toastmasters
                  International байгууллагын Монгол Улс дахь салбар гишүүн клуб
                  бөгөөд олон нийтэд нээлттэй, Монгол дахь хамгийн том клубын
                  нэг гэдгээрээ онцлог юм. Мөн долоо хоног бүрийн хурлаа Мягмар
                  гарагт тогтмол Англи хэлээр зохион байгуулдаг бөгөөд
                  "Toastmasters Pathways Learning Experience" хэмээх боловсролын
                  хөтөлбөрийн дагуу илтгэх ур чавдар, харилцааны ур чадвар болон
                  манлайллын ур чадваруудыг хөгжүүлэхээс гадна Англи хэлээ
                  сайжруулах давуу талтай.
                </p>
                <p className="text-center text-base font-normal leading-relaxed text-gray-500 lg:text-start">
                  ✅ Түүнчлэн хуралд зочноор оролцож манай үйл ажиллагаатай
                  танилцах бүрэн боломжтой
                </p>
              </div>
              <button
                onClick={handleShow}
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-blue-800 sm:w-fit"
              >
                <span className="px-1.5 text-sm font-medium leading-6 text-white">
                  Элсэх
                </span>
              </button>
            </div>
            <img
              className="mx-auto h-full rounded-3xl object-cover lg:mx-0"
              src="https://ganbayarlalaa.github.io/greatmongols-web/about-us.jpg"
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      <CustomModal
        show={show}
        body={
          <div className="relative">
            <div className="absolute right-5 top-5">
              <svg
                className="fill-white"
                onClick={handleShow}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </div>
            <img
              className="rounded-lg"
              src="https://ganbayarlalaa.github.io/greatmongols-web/payment.jpg"
            />
          </div>
        }
        onClose={handleShow}
      />
    </section>
  );
};

export default AboutUs;
