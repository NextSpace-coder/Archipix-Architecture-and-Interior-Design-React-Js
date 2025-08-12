import Breadcrumb from "@/components/Breadcrumb";
import HeroAboutPageSection from "@/components/PageSections/HeroAboutPageSection";
import HistorySection from "@/components/PageSections/HistorySection";
import ServiceSectionFour from "@/components/PageSections/ServiceSectionFour";
import WhyChooseUsSection from "@/components/PageSections/WhyChooseUsSection";
import CounterSection from "@/components/PageSections/CounterSection";
import TeamSectionTwo from "@/components/PageSections/TeamSectionTwo";
import AwardSection from "@/components/PageSections/AwardSection";
import NewsletterSection from "@/components/PageSections/NewsletterSection";

const menus = [
    { label: "About", to: "" },
];

export const metadata = {
    title: "About Us - Archipix | Architecture &amp; Interior Design Next Js Template",
    description: "About Us - Archipix | Architecture &amp; Interior Design Next Js Template",
};

export default function About() {
    return (
        <>
            {/*breadcrumb*/}
            <Breadcrumb menus={menus}/>

            {/*Hero Area*/}
            <HeroAboutPageSection />

            {/*History Section*/}
            <HistorySection />

            {/*Service Section*/}
            <ServiceSectionFour />

            {/*Why Choose Us Section*/}
            <WhyChooseUsSection />

            {/*Counter Section*/}
            <CounterSection customClass={'pt-0 pb-50'}/>

            {/*Team Section*/}
            <TeamSectionTwo />

            {/*Award Section*/}
            <AwardSection />

            {/*Newsletter Section*/}
            <NewsletterSection />
        </>
    )
}