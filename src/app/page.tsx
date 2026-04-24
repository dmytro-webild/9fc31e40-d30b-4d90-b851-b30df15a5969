"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Feather } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Ma'lumot",          id: "ma'lumot"},
        {
          name: "Quiz",          id: "quiz"},
        {
          name: "Matching",          id: "matching"},
        {
          name: "To'g'ri/Noto'g'ri",          id: "true-false"},
        {
          name: "Tezkor",          id: "tezkor"},
      ]}
      brandName="Temir (Fe)"
      button={{ text: "Boshlash" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "plain"}}
      title="Temir: Davriy jadval qiroli"
      description="Temir (Fe) atomi, xossalari va kimyoviy reaksiyalari bilan interaktiv tarzda tanishing. Keling, o'rganishni boshlaymiz!"
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/polonium-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-12061.jpg",          imageAlt: "Iron Sample"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ferromagnetic-metal-with-blurred-background_23-2148253604.jpg",          imageAlt: "Iron Sample"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/test-tubes-with-colorful-liquids_1098-1575.jpg",          imageAlt: "Iron Sample"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blue-close-up-ferromagnetic-metal_23-2148253654.jpg",          imageAlt: "Iron Sample"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/science-banner-with-glassware-assortment_23-2149731485.jpg",          imageAlt: "Iron Sample"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/colored-choco-candies-art-designed-isolated-white-floor_140725-14153.jpg",          imageAlt: "Iron Sample"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/world-science-day-research-composition_23-2149112641.jpg",          imageAlt: "Chemistry Lab"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-ferromagnetic-liquid-metal-with-copy-space_23-2148253605.jpg",          imageAlt: "Chemistry Lab"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/iridium-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-12048.jpg",          imageAlt: "Chemistry Lab"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/laboratory-glassware-blue-background_23-2149731491.jpg",          imageAlt: "Chemistry Lab"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lab-glassware-with-colored-substance-table_23-2149510742.jpg",          imageAlt: "Chemistry Lab"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-round-water-drops-surface_23-2148635090.jpg",          imageAlt: "Chemistry Lab"},
      ]}
      buttons={[
        {
          text: "Ma'lumotni ko'rish",          href: "#ma'lumot"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-optical-fiber-detail_23-2149182539.jpg",          alt: "Student 1"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-drawing-fresh-air-park-sitting-with-graphic-tablet-digital_1258-199079.jpg",          alt: "Student 2"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-young-girl-thinking-library_23-2148727880.jpg",          alt: "Student 3"},
        {
          src: "http://img.b2bpic.net/free-photo/schoolgirl-studies-online-home-school-education-online_169016-60211.jpg",          alt: "Student 4"},
        {
          src: "http://img.b2bpic.net/free-photo/group-young-teens-celebrating-world-youth-day-by-doing-activities-together_23-2151478316.jpg",          alt: "Student 5"},
      ]}
      avatarText="2,000+ o'quvchilar biz bilan"
      marqueeItems={[
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/iron-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-11937.jpg",          alt: "Element Fe"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/iodine-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-11996.jpg",          alt: "Element I"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/lead-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-12057.jpg",          alt: "Element Pb"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/chromium-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-11932.jpg",          alt: "Element Cr"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/phosphorus-chemical-element-sign-with-atomic-number-atomic-weight-periodic-table-element_559531-11913.jpg",          alt: "Element P"},
      ]}
    />
  </div>

  <div id="ma'lumot" data-section="ma'lumot">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Kimyoviy Element"
      title="Temir (Fe) haqida asosiy ma'lumot"
      description="Temir - Mendeleyev jadvalida 26-o'rinda turuvchi element. U tabiatda eng ko'p tarqalgan metallardan biri."
      subdescription="Belgisi: Fe. Atom massasi: 55.845. Elektron konfiguratsiyasi: [Ar] 3d6 4s2."
      imageSrc="http://img.b2bpic.net/free-photo/3d-illustration-centrioles-involved-cell-division_183364-124043.jpg"
      mediaAnimation="slide-up"
      icon={Feather}
    />
  </div>

  <div id="quiz" data-section="quiz">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Quiz O'yin",          description: "5 ta savol - 5 ta imkoniyat.",          imageSrc: "http://img.b2bpic.net/free-photo/glowing-arrow-sign-dark_23-2148445357.jpg"},
        {
          title: "Reaksiyalar",          description: "Fe + O2, Fe + HCl kabi tenglamalar.",          imageSrc: "http://img.b2bpic.net/free-photo/world-science-day-assortment-with-chemistry-tubes_23-2149112636.jpg"},
        {
          title: "Xossalari",          description: "Temirning fizik va kimyoviy xossalari.",          imageSrc: "http://img.b2bpic.net/free-photo/chemical-element-arrangement-still-life_23-2149048922.jpg"},
      ]}
      title="Bilimlarni tekshirish"
      description="Interaktiv o'yinlar orqali temir haqidagi bilimingizni boyiting."
    />
  </div>

  <div id="matching" data-section="matching">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Quiz O'yin",          price: "Boshlash",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-scientist-holding-tablet-lab_23-2148492111.jpg"},
        {
          id: "p2",          name: "Matching O'yin",          price: "O'ynash",          imageSrc: "http://img.b2bpic.net/free-photo/scientists-conduct-visual-data-tests-using-chroma-key-smartphone_482257-126579.jpg"},
        {
          id: "p3",          name: "To'g'ri/Noto'g'ri",          price: "Tekshirish",          imageSrc: "http://img.b2bpic.net/free-vector/course-application_23-2148676845.jpg"},
        {
          id: "p4",          name: "Tezkor Savollar",          price: "Javob berish",          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-months-year-element-set_23-2149900222.jpg"},
        {
          id: "p5",          name: "Laboratoriya",          price: "Virtual Lab",          imageSrc: "http://img.b2bpic.net/free-photo/senior-male-artist-holding-smartphone-with-greenscreen-draw-vase-artwork-canvas-home-using-blank-template-with-mockup-copyspace-isolated-chroma-key-background-mobile-phone_482257-46742.jpg"},
        {
          id: "p6",          name: "Xotira o'yini",          price: "Boshlash",          imageSrc: "http://img.b2bpic.net/free-vector/translator-app_23-2148625870.jpg"},
      ]}
      title="O'yinlar"
      description="Tanlang va o'ynang!"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "26",          description: "Tartib raqami"},
        {
          id: "m2",          value: "56",          description: "Atom massasi"},
        {
          id: "m3",          value: "4",          description: "Davr raqami"},
      ]}
      title="Statistikalar"
      description="Temirning kimyoviy xususiyatlari."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Aziz",          handle: "@aziz_chem",          testimonial: "O'yinlar orqali o'rganish juda qiziqarli!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teen-girl-with-tablet-sitting-library_23-2147860568.jpg"},
        {
          id: "t2",          name: "Madina",          handle: "@madi_science",          testimonial: "Temir haqida ko'p narsani bilib oldim.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-test-tube-looking-kids-class_259150-60265.jpg"},
        {
          id: "t3",          name: "Bobur",          handle: "@bobur_dev",          testimonial: "Dastur dizayni ajoyib, o'rganish oson.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-chemist-white-suit-front-table-with-colored-solutions-writing-down-notes-light-table-science-work-lab-chemistry_140725-37983.jpg"},
        {
          id: "t4",          name: "Sevara",          handle: "@sev_learn",          testimonial: "Interaktiv savollar bilimimni tekshirishga yordam berdi.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/student-online-cute-young-guy-studying-computer-glasses-green-shirt-smiling-reading-notes_140725-164694.jpg"},
        {
          id: "t5",          name: "Xusan",          handle: "@xusan_study",          testimonial: "Eng yaxshi kimyo sayti!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-kids-elementary-school_53876-138146.jpg"},
      ]}
      showRating={true}
      title="O'quvchilar fikri"
      description="Bizning foydalanuvchilarimiz nima deyishadi?"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Temir zanglaydimi?",          content: "Ha, temir havoda namlik va kislorod ta'sirida oksidlanib zanglaydi."},
        {
          id: "q2",          title: "Temir qayerda ishlatiladi?",          content: "Temir qurilishda, mashinasozlikda va temir yo'l sanoatida keng qo'llaniladi."},
        {
          id: "q3",          title: "Temirning belgilari?",          content: "Belgisi Fe, tartib raqami 26."},
      ]}
      title="Tez-tez beriladigan savollar"
      faqsAnimation="slide-up"
      description="Sizda savollar bormi?"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Temir (Fe)"
      leftLink={{
        text: "Bosh sahifa",        href: "/"}}
      rightLink={{
        text: "Aloqa",        href: "#contact"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
