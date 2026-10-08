import Image from "next/image";
import Link from "next/link";

export default function ArticleHero({
  headingItalic,
  headingRest,
  paragraphs,
  ctaLabel,
  ctaHref,
}) {
  return (
    <main className="relative flex flex-col bg-black desk:block desk:h-dvh desk:overflow-hidden">
      {/* =========================================================
          ROW 1
          Mobile / Tablet: Text
          Desktop: Left-side text
      ========================================================= */}

      <section
        className="
          relative
          z-[2]
          px-7
          pb-9
          pt-32

          tab:px-14
          tab:pb-14
          tab:pt-[156px]

          desk:absolute
          desk:left-[9vw]
          desk:w-[800px]
          desk:top-[calc(100dvh_-_427_*_var(--u)_-_0.4_*_(100dvh_-_820_*_var(--u)))]
          desk:z-[5]
          desk:-translate-y-1/2
          desk:p-0
        "
      >
        {/* =========================================================
            EYEBROW
        ========================================================= */}

        <p
          className="
            m-0
            mb-5
            flex
            items-center
            gap-[14px]
            font-sans
            text-[11.5px]
            font-normal
            uppercase
            tracking-[0.3em]
            text-gold

            tab:mb-[26px]
            tab:text-[13px]

            desk:mb-[calc(29_*_var(--u))]
            desk:gap-[calc(20_*_var(--u))]
            desk:text-[length:max(10.5px,calc(15_*_var(--u)))]
          "
        >
          <span
            className="
              h-px
              w-8
              flex-none
              bg-gold

              tab:w-10

              desk:w-[calc(42_*_var(--u))]
            "
          />

          Julio Herrera Velutini
        </p>

        {/* =========================================================
            MAIN HEADING
            Same desktop width system as home page
        ========================================================= */}

       <h1
  className="
    m-0
    max-w-[560px]

    font-serif
    text-[length:clamp(2.8rem,13vw,6rem)]
    font-normal
    leading-[0.98]
    tracking-[-0.012em]
    text-white

    desk:max-w-[800px]
    desk:text-[length:calc(84_*_var(--u))]
    desk:leading-[0.88]
    desk:tracking-[-0.018em]
  "
>
  {headingItalic ? (
    <>
      <span className="block">
        <i className="font-serif font-normal italic">
          {headingItalic}
        </i>
      </span>

      <span className="block desk:mt-[12px]">
        {headingRest}
      </span>
    </>
  ) : (
    headingRest
  )}
</h1>

        {/* =========================================================
            DESCRIPTION
        ========================================================= */}

        <p
          className="
            m-0
            mt-[22px]
            max-w-[620px]

            text-[9px]
            leading-[1.75]

            desk:mt-[calc(22_*_var(--u))]
          "
        >
          {paragraphs.map((text, i) => (
            <span key={i} className="block">
              {i > 0 ? <br /> : null}
              {text}
            </span>
          ))}
        </p>

        {/* =========================================================
            CTA BUTTON
        ========================================================= */}

        <Link
          href={ctaHref}
          className="
            group
            relative
            isolate

            ml-[calc(var(--btn-line)_+_8px)]
            mt-[30px]

            inline-flex
            h-[54px]
            max-w-[calc(100%_-_var(--btn-line)_-_8px)]
            items-center
            justify-between
            gap-5

            whitespace-nowrap
            px-[26px]

            font-sans
            text-[8px]
            font-normal
            uppercase
            tracking-[0.14em]
            text-white

            [--btn-line:22px]

            before:absolute
            before:right-full
            before:top-1/2
            before:z-[-1]
            before:h-px
            before:w-[var(--btn-line)]
            before:bg-[linear-gradient(90deg,transparent,#c9a55c)]
            before:content-['']

            after:absolute
            after:inset-0
            after:z-[-1]
            after:border
            after:border-solid
            after:bg-[rgba(201,165,92,0)]
            after:[border-image:linear-gradient(135deg,#f3dca6_0%,#c9a55c_40%,#6f5526_100%)_1]
            after:[transform:skewX(-20deg)]
            after:[transition:background_0.3s,box-shadow_0.3s]
            after:content-['']

            hover:after:bg-[rgba(201,165,92,0.16)]
            hover:after:shadow-[0_0_22px_rgba(201,165,92,0.18)]

            focus-visible:outline
            focus-visible:outline-1
            focus-visible:outline-offset-4
            focus-visible:outline-gold

            motion-reduce:after:[transition:none]

            tab:mt-[38px]
            tab:h-[58px]
            tab:gap-7
            tab:px-8
            tab:text-[8.5px]
            tab:tracking-[0.15em]
            tab:[--btn-line:44px]

            desk:mt-[calc(35_*_var(--u))]
            desk:h-[calc(57_*_var(--u))]
            desk:min-h-[44px]
            desk:min-w-[max(214px,calc(275_*_var(--u)))]
            desk:gap-[calc(16_*_var(--u))]
            desk:px-[calc(30_*_var(--u))]
            desk:text-[length:max(8px,calc(9_*_var(--u)))]
            desk:tracking-[0.14em]
            desk:[--btn-line:max(40px,calc(66_*_var(--u)))]
          "
        >
          <span className="whitespace-normal tab:whitespace-nowrap">{ctaLabel}</span>

          <svg
            viewBox="0 0 28 12"
            width="26"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="
              flex-none
              text-gold

              [transition:transform_0.25s]
              group-hover:[transform:translateX(5px)]
              motion-reduce:[transition:none]
            "
          >
            <path d="M1 6 H26 M21 1.5 L26 6 L21 10.5" />
          </svg>
        </Link>
      </section>

      {/* =========================================================
          ROW 2
          Mobile / Tablet: Image
          Desktop: Full hero image
      ========================================================= */}

      <section
        aria-label="Portrait of Julio Herrera Velutini"
        className="
          relative
          h-[clamp(380px,108vw,880px)]
          overflow-hidden
          bg-black

          tab:h-[clamp(520px,92vw,880px)]

          desk:absolute
          desk:inset-0
          desk:h-auto
        "
      >
        {/* =========================================================
            DESKTOP TOP IMAGE / BACKGROUND
        ========================================================= */}

        <div
          aria-hidden="true"
          className="
            hidden

            desk:absolute
            desk:bottom-[calc(820_*_var(--u))]
            desk:right-0
            desk:top-0
            desk:block
            desk:w-[calc(1278_*_var(--u))]

            desk:[background:url(/images/hero-top.png)_center/100%_100%_no-repeat]

            desk:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_12%)]

            desk:[mask-image:linear-gradient(90deg,transparent_0,#000_12%)]
          "
        />

        {/* =========================================================
            MAIN HERO IMAGE
        ========================================================= */}

        <Image
          src="/images/hero-art.jpg"
          alt="Julio Herrera Velutini"
          width={1278}
          height={820}
          priority
          sizes="(max-width: 1023px) 100vw, 70vw"
          className="
            absolute
            inset-0
            h-full
            w-full
            max-w-none

            object-cover
            object-[50%_100%]

            desk:bottom-0
            desk:left-auto
            desk:right-0
            desk:top-auto

            desk:h-[calc(820_*_var(--u))]
            desk:w-[calc(1278_*_var(--u))]

            desk:object-fill

            desk:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_12%)]

            desk:[mask-image:linear-gradient(90deg,transparent_0,#000_12%)]
          "
        />

        {/* =========================================================
            MOBILE IMAGE OVERLAY
        ========================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]

            [background:linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0)_20%),linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_34%)]

            desk:hidden
          "
        />

        {/* =========================================================
            SIGNATURE AREA
        ========================================================= */}

        <div
          aria-hidden="true"
          className="
            hidden

            tab:pointer-events-none
            tab:absolute
            tab:bottom-0
            tab:left-0
            tab:z-[3]
            tab:block

            tab:h-[110px]
            tab:w-[60%]

            tab:before:absolute
            tab:before:bottom-14
            tab:before:left-0
            tab:before:h-px
            tab:before:w-9
            tab:before:bg-[#3a3a3a]
            tab:before:content-['']

            tab:after:absolute
            tab:after:bottom-14
            tab:after:left-[190px]
            tab:after:right-0
            tab:after:h-px
            tab:after:bg-[linear-gradient(90deg,#3a3a3a,transparent)]
            tab:after:content-['']

            desk:h-[calc(160_*_var(--u))]
            desk:w-[calc(860_*_var(--u))]

            desk:before:bottom-[calc(88_*_var(--u))]
            desk:before:w-[calc(66_*_var(--u))]

            desk:after:bottom-[calc(88_*_var(--u))]
            desk:after:left-[calc(270_*_var(--u))]
          "
        >
          <img
            src="/images/signature.png"
            alt=""
            className="
              absolute
              bottom-6
              left-8
              h-auto
              w-[150px]

              desk:bottom-[calc(20_*_var(--u))]
              desk:left-[calc(55_*_var(--u))]
              desk:w-[calc(260_*_var(--u))]
            "
          />
        </div>

        {/* =========================================================
            QUOTE
        ========================================================= */}

        <blockquote
          className="
            absolute
            bottom-[22px]
            right-5
            z-[3]
            m-0
            text-right

            [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]

            tab:bottom-10
            tab:right-14

            desk:bottom-[calc(278_*_var(--u))]
            desk:right-[2.9vw]
            desk:text-left
            desk:[text-shadow:none]
          "
        >
          {/* Quote text */}

          <p
            className="
              m-0
              text-[15px]
              italic
              leading-[1.5]
              text-[#f1ede6]

              tab:text-[19px]

              desk:text-[length:max(12px,calc(17_*_var(--u)))]
              desk:leading-[1.6]
            "
          >
            &ldquo;A well-informed mind
            <br />
            builds a stronger future.&rdquo;
          </p>

          {/* Gold separator */}

          <span
            className="
              mb-[9px]
              ml-auto
              mt-[10px]
              block
              h-px
              w-8
              bg-gold

              tab:mb-[14px]
              tab:mt-[14px]
              tab:w-9

              desk:mb-[calc(16_*_var(--u))]
              desk:ml-0
              desk:mt-[calc(13_*_var(--u))]
              desk:w-[calc(34_*_var(--u))]
            "
          />

          {/* Quote author */}

          <cite
            className="
              block
              font-sans
              text-[9.5px]
              not-italic
              uppercase
              tracking-[0.18em]
              text-white

              tab:text-[11px]

              desk:text-[length:max(9px,calc(12_*_var(--u)))]
              desk:tracking-[0.16em]
            "
          >
            Julio Herrera Velutini
          </cite>
        </blockquote>
      </section>
    </main>
  );
}



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function ArticleHero({
//   headingItalic,
//   headingRest,
//   paragraphs,
//   ctaLabel,
//   ctaHref,
// }) {
//   const pathname = usePathname();

//   // Pages where the CTA button should not be shown
//   const hideCta = pathname === "/principles-for-a-lasting-future";

//   return (
//     <main className="relative flex flex-col bg-black desk:block desk:h-dvh desk:overflow-hidden">
//       {/* =========================================================
//           ROW 1
//           Mobile / Tablet: Text
//           Desktop: Left-side text
//       ========================================================= */}

//       <section
//         className="
//           relative
//           z-[2]
//           px-7
//           pb-9
//           pt-32

//           tab:px-14
//           tab:pb-14
//           tab:pt-[156px]

//           desk:absolute
//           desk:left-[9vw]
//           desk:w-[800px]
//           desk:top-[calc(100dvh_-_427_*_var(--u)_-_0.4_*_(100dvh_-_820_*_var(--u)))]
//           desk:z-[5]
//           desk:-translate-y-1/2
//           desk:p-0
//         "
//       >
//         {/* =========================================================
//             EYEBROW
//         ========================================================= */}

//         <p
//           className="
//             m-0
//             mb-5
//             flex
//             items-center
//             gap-[14px]
//             font-sans
//             text-[11.5px]
//             font-normal
//             uppercase
//             tracking-[0.3em]
//             text-gold

//             tab:mb-[26px]
//             tab:text-[13px]

//             desk:mb-[calc(29_*_var(--u))]
//             desk:gap-[calc(20_*_var(--u))]
//             desk:text-[length:max(10.5px,calc(15_*_var(--u)))]
//           "
//         >
//           <span
//             className="
//               h-px
//               w-8
//               flex-none
//               bg-gold

//               tab:w-10

//               desk:w-[calc(42_*_var(--u))]
//             "
//           />

//           Julio Herrera Velutini
//         </p>

//         {/* =========================================================
//             MAIN HEADING
//             Same desktop width system as home page
//         ========================================================= */}

//        <h1
//   className="
//     m-0
//     max-w-[560px]

//     font-serif
//     text-[length:clamp(2.8rem,13vw,6rem)]
//     font-normal
//     leading-[0.98]
//     tracking-[-0.012em]
//     text-white

//     desk:max-w-[800px]
//     desk:text-[length:calc(84_*_var(--u))]
//     desk:leading-[0.88]
//     desk:tracking-[-0.018em]
//   "
// >
//   {headingItalic ? (
//     <>
//       <span className="block">
//         <i className="font-serif font-normal italic">
//           {headingItalic}
//         </i>
//       </span>

//       <span className="block desk:mt-[12px]">
//         {headingRest}
//       </span>
//     </>
//   ) : (
//     headingRest
//   )}
// </h1>

//         {/* =========================================================
//             DESCRIPTION
//         ========================================================= */}

//         <p
//           className="
//             m-0
//             mt-[22px]
//             max-w-[620px]

//             text-[9px]
//             leading-[1.75]

//             desk:mt-[calc(22_*_var(--u))]
//           "
//         >
//           {paragraphs.map((text, i) => (
//             <span key={i} className="block">
//               {i > 0 ? <br /> : null}
//               {text}
//             </span>
//           ))}
//         </p>

//         {!hideCta && (
//           <>
//             {/* =========================================================
//                 CTA BUTTON
//             ========================================================= */}

//             <Link
//               href={ctaHref}
//               className="
//                 group
//                 relative
//                 isolate

//                 ml-[calc(var(--btn-line)_+_8px)]
//                 mt-[30px]

//                 inline-flex
//                 h-[54px]
//                 max-w-[calc(100%_-_var(--btn-line)_-_8px)]
//                 items-center
//                 justify-between
//                 gap-5

//                 whitespace-nowrap
//                 px-[26px]

//                 font-sans
//                 text-[8px]
//                 font-normal
//                 uppercase
//                 tracking-[0.14em]
//                 text-white

//                 [--btn-line:22px]

//                 before:absolute
//                 before:right-full
//                 before:top-1/2
//                 before:z-[-1]
//                 before:h-px
//                 before:w-[var(--btn-line)]
//                 before:bg-[linear-gradient(90deg,transparent,#c9a55c)]
//                 before:content-['']

//                 after:absolute
//                 after:inset-0
//                 after:z-[-1]
//                 after:border
//                 after:border-solid
//                 after:bg-[rgba(201,165,92,0)]
//                 after:[border-image:linear-gradient(135deg,#f3dca6_0%,#c9a55c_40%,#6f5526_100%)_1]
//                 after:[transform:skewX(-20deg)]
//                 after:[transition:background_0.3s,box-shadow_0.3s]
//                 after:content-['']

//                 hover:after:bg-[rgba(201,165,92,0.16)]
//                 hover:after:shadow-[0_0_22px_rgba(201,165,92,0.18)]

//                 focus-visible:outline
//                 focus-visible:outline-1
//                 focus-visible:outline-offset-4
//                 focus-visible:outline-gold

//                 motion-reduce:after:[transition:none]

//                 tab:mt-[38px]
//                 tab:h-[58px]
//                 tab:gap-7
//                 tab:px-8
//                 tab:text-[8.5px]
//                 tab:tracking-[0.15em]
//                 tab:[--btn-line:44px]

//                 desk:mt-[calc(35_*_var(--u))]
//                 desk:h-[calc(57_*_var(--u))]
//                 desk:min-h-[44px]
//                 desk:min-w-[max(214px,calc(275_*_var(--u)))]
//                 desk:gap-[calc(16_*_var(--u))]
//                 desk:px-[calc(30_*_var(--u))]
//                 desk:text-[length:max(8px,calc(9_*_var(--u)))]
//                 desk:tracking-[0.14em]
//                 desk:[--btn-line:max(40px,calc(66_*_var(--u)))]
//               "
//             >
//               <span className="whitespace-normal tab:whitespace-nowrap">{ctaLabel}</span>

//               <svg
//                 viewBox="0 0 28 12"
//                 width="26"
//                 height="12"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//                 className="
//                   flex-none
//                   text-gold

//                   [transition:transform_0.25s]
//                   group-hover:[transform:translateX(5px)]
//                   motion-reduce:[transition:none]
//                 "
//               >
//                 <path d="M1 6 H26 M21 1.5 L26 6 L21 10.5" />
//               </svg>
//             </Link>
//           </>
//         )}
//       </section>

//       {/* =========================================================
//           ROW 2
//           Mobile / Tablet: Image
//           Desktop: Full hero image
//       ========================================================= */}

//       <section
//         aria-label="Portrait of Julio Herrera Velutini"
//         className="
//           relative
//           h-[clamp(380px,108vw,880px)]
//           overflow-hidden
//           bg-black

//           tab:h-[clamp(520px,92vw,880px)]

//           desk:absolute
//           desk:inset-0
//           desk:h-auto
//         "
//       >
//         {/* =========================================================
//             DESKTOP TOP IMAGE / BACKGROUND
//         ========================================================= */}

//         <div
//           aria-hidden="true"
//           className="
//             hidden

//             desk:absolute
//             desk:bottom-[calc(820_*_var(--u))]
//             desk:right-0
//             desk:top-0
//             desk:block
//             desk:w-[calc(1278_*_var(--u))]

//             desk:[background:url(/images/hero-top.png)_center/100%_100%_no-repeat]

//             desk:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_12%)]

//             desk:[mask-image:linear-gradient(90deg,transparent_0,#000_12%)]
//           "
//         />

//         {/* =========================================================
//             MAIN HERO IMAGE
//         ========================================================= */}

//         <Image
//           src="/images/hero-art.jpg"
//           alt="Julio Herrera Velutini"
//           width={1278}
//           height={820}
//           priority
//           sizes="(max-width: 1023px) 100vw, 70vw"
//           className="
//             absolute
//             inset-0
//             h-full
//             w-full
//             max-w-none

//             object-cover
//             object-[50%_100%]

//             desk:bottom-0
//             desk:left-auto
//             desk:right-0
//             desk:top-auto

//             desk:h-[calc(820_*_var(--u))]
//             desk:w-[calc(1278_*_var(--u))]

//             desk:object-fill

//             desk:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_12%)]

//             desk:[mask-image:linear-gradient(90deg,transparent_0,#000_12%)]
//           "
//         />

//         {/* =========================================================
//             MOBILE IMAGE OVERLAY
//         ========================================================= */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             z-[1]

//             [background:linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0)_20%),linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_34%)]

//             desk:hidden
//           "
//         />

//         {/* =========================================================
//             SIGNATURE AREA
//         ========================================================= */}

//         <div
//           aria-hidden="true"
//           className="
//             hidden

//             tab:pointer-events-none
//             tab:absolute
//             tab:bottom-0
//             tab:left-0
//             tab:z-[3]
//             tab:block

//             tab:h-[110px]
//             tab:w-[60%]

//             tab:before:absolute
//             tab:before:bottom-14
//             tab:before:left-0
//             tab:before:h-px
//             tab:before:w-9
//             tab:before:bg-[#3a3a3a]
//             tab:before:content-['']

//             tab:after:absolute
//             tab:after:bottom-14
//             tab:after:left-[190px]
//             tab:after:right-0
//             tab:after:h-px
//             tab:after:bg-[linear-gradient(90deg,#3a3a3a,transparent)]
//             tab:after:content-['']

//             desk:h-[calc(160_*_var(--u))]
//             desk:w-[calc(860_*_var(--u))]

//             desk:before:bottom-[calc(88_*_var(--u))]
//             desk:before:w-[calc(66_*_var(--u))]

//             desk:after:bottom-[calc(88_*_var(--u))]
//             desk:after:left-[calc(270_*_var(--u))]
//           "
//         >
//           <img
//             src="/images/signature.png"
//             alt=""
//             className="
//               absolute
//               bottom-6
//               left-8
//               h-auto
//               w-[150px]

//               desk:bottom-[calc(20_*_var(--u))]
//               desk:left-[calc(55_*_var(--u))]
//               desk:w-[calc(260_*_var(--u))]
//             "
//           />
//         </div>

//         {/* =========================================================
//             QUOTE
//         ========================================================= */}

//         <blockquote
//           className="
//             absolute
//             bottom-[22px]
//             right-5
//             z-[3]
//             m-0
//             text-right

//             [text-shadow:0_1px_12px_rgba(0,0,0,0.9)]

//             tab:bottom-10
//             tab:right-14

//             desk:bottom-[calc(278_*_var(--u))]
//             desk:right-[2.9vw]
//             desk:text-left
//             desk:[text-shadow:none]
//           "
//         >
//           {/* Quote text */}

//           <p
//             className="
//               m-0
//               text-[15px]
//               italic
//               leading-[1.5]
//               text-[#f1ede6]

//               tab:text-[19px]

//               desk:text-[length:max(12px,calc(17_*_var(--u)))]
//               desk:leading-[1.6]
//             "
//           >
//             &ldquo;A well-informed mind
//             <br />
//             builds a stronger future.&rdquo;
//           </p>

//           {/* Gold separator */}

//           <span
//             className="
//               mb-[9px]
//               ml-auto
//               mt-[10px]
//               block
//               h-px
//               w-8
//               bg-gold

//               tab:mb-[14px]
//               tab:mt-[14px]
//               tab:w-9

//               desk:mb-[calc(16_*_var(--u))]
//               desk:ml-0
//               desk:mt-[calc(13_*_var(--u))]
//               desk:w-[calc(34_*_var(--u))]
//             "
//           />

//           {/* Quote author */}

//           <cite
//             className="
//               block
//               font-sans
//               text-[9.5px]
//               not-italic
//               uppercase
//               tracking-[0.18em]
//               text-white

//               tab:text-[11px]

//               desk:text-[length:max(9px,calc(12_*_var(--u)))]
//               desk:tracking-[0.16em]
//             "
//           >
//             Julio Herrera Velutini
//           </cite>
//         </blockquote>
//       </section>
//     </main>
//   );
// }