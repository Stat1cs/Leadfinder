import { bi, type Bi } from "./types";

/**
 * LeadFinder bilingual copy — Omani maritime brand for leadfinder.om.
 * Product of Dynamic Business Solution (DBS.om).
 */
export const dict = {
  meta: {
    title: bi(
      "LeadFinder — عملاء محتملون محليون ببيانات اتصال موثّقة | leadfinder.om",
      "LeadFinder — Verified local leads with live contact data | leadfinder.om",
    ),
    description: bi(
      "ابحث بالمجال والموقع في عُمان والخليج. LeadFinder يتحقق من موقع كل منشأة لحظة البحث ويستخرج بيانات الاتصال المنشورة — للمنشآت العاملة فقط. خطط من ١٠ ر.ع./شهر.",
      "Search by niche and location across Oman and the GCC. LeadFinder verifies each business website at search time and extracts published contact data — active businesses only. Plans from 10 OMR/mo.",
    ),
    tagline: bi(
      "بوصلتك الرقمية نحو عملائك المحتملين.",
      "Your digital compass towards your prospects.",
    ),
  },

  nav: {
    howItWorks: bi("كيف يعمل", "How it works"),
    pricing: bi("الأسعار", "Pricing"),
    faq: bi("الأسئلة", "FAQ"),
    login: bi("تسجيل الدخول", "Log in"),
    cta: bi("عرض الخطط", "See plans"),
    openMenu: bi("فتح القائمة", "Open menu"),
    closeMenu: bi("إغلاق القائمة", "Close menu"),
  },

  hero: {
    badge: bi("تحقق مباشر من البيانات", "Live data Verification"),
    titleA: bi("بوصلة رقمية", "A digital compass"),
    titleHighlight: bi("نحو عملائك المحتملين.", "towards your prospects."),
    titleB: bi("", ""),
    subhead: bi(
      "حدّد مجالاً وموقعاً. يفتح LeadFinder موقع كل منشأة في تلك اللحظة، ويؤكد أنها عاملة، ويستخرج البريد الإلكتروني المنشور على صفحتها. المنشآت المغلقة أو المواقع المتوقفة لا تدخل نتائجك.",
      "Name a niche and a place. LeadFinder opens each business's website in that moment, confirms it is active, and takes the email published on the page. Closed firms and dead sites never enter your results.",
    ),
    primaryCta: bi("ابدأ البحث", "Begin a search"),
    secondaryCta: bi("آلية العمل", "How it works"),
    trustLine: bi(
      "اشتراك شهري من ١٠ ر.ع. اعتمادات مشمولة. إضافية بـ ٠٫٠٦٠ ر.ع.",
      "Monthly plans from 10 OMR. Credits included. Extra at 0.060 OMR.",
    ),
    kpiLive: bi("بالمجال والموقع", "by niche and place"),
    kpiPay: bi("فحص الموقع لحظة البحث", "live site check"),
    kpiActive: bi("بيانات اتصال اليوم", "contact data today"),
    kpiEarly: bi("من ١٠ ر.ع. شهرياً", "from 10 OMR / mo"),
    kpiLiveValue: bi("ابحث", "Search"),
    kpiPayValue: bi("تحقق", "Verify"),
    kpiActiveValue: bi("استخرج", "Extract"),
    kpiEarlyValue: bi("انمُ", "Grow"),
    videoPlaceholder: bi(
      "الفيديو قيد الإعداد — سيُضاف قريباً",
      "Video in production — coming soon",
    ),
  },

  problem: {
    eyebrow: bi("لماذا LeadFinder", "Why LeadFinder"),
    heading: bi(
      "بيانات حية — لا قوائم مشتراة قديمة.",
      "Live data — not a bought list from last year.",
    ),
    sub: bi(
      "LeadFinder يبحث ويتحقق في لحظتها، فلا تصل إلا المنشآت العاملة ببيانات اتصال منشورة اليوم.",
      "LeadFinder searches and verifies in the moment — so only active businesses with published contact data reach you.",
    ),
    items: [
      {
        title: bi(
          "لا ملف مشترك للجميع",
          "Not the same file for everyone",
        ),
        body: bi(
          "القوائم المعاد بيعها تصل إلى كل من يطارد المجال والمدينة ذاتهما. بحثك يُبنى لك — لا من جدول مشترك.",
          "Resold files land with everyone chasing the same niche and city. Your search is built for you — not pulled from a shared sheet.",
        ),
      },
      {
        title: bi(
          "منشآت عاملة فقط",
          "Active businesses only",
        ),
        body: bi(
          "الإغلاق والمواقع المتوقفة لا تدخل النتائج. إن لم يكن الموقع حياً لحظة البحث، لن يظهر في قائمتك.",
          "Closures and dead sites never enter results. If the website is not live at search time, it will not appear on your list.",
        ),
      },
      {
        title: bi(
          "بيانات اتصال من الصفحة الحيّة",
          "Contact data from the live page",
        ),
        body: bi(
          "تُؤخذ بيانات الاتصال من موقع المنشأة عند البحث — لا صيغ مخمّنة ولا تصديرات قديمة.",
          "Contact details are taken from the business website at search time — no guessed formats, no ageing exports.",
        ),
      },
    ] as const,
  },

  howItWorks: {
    eyebrow: bi("كيف يعمل", "How it works"),
    heading: bi(
      "ثلاث خطوات من المجال إلى بيانات اتصال موثّقة.",
      "Three steps from niche to verified contact data.",
    ),
    sub: bi(
      "بلا جداول مشتراة. بلا تخمين. تحقق مباشر من الموقع.",
      "No purchased spreadsheets. No guessing. Live verification on the site itself.",
    ),
    steps: [
      {
        title: bi("ابحث", "Search"),
        body: bi(
          'اكتب مجالاً وموقعاً — مثل «عيادات أسنان في مسقط». يعيد LeadFinder ملفات المنشآت الحية: الاسم، الموقع، الهاتف، العنوان، الفئة، التقييم وعدد المراجعات.',
          'Enter a niche and a location — for example “dental clinics in Muscat.” LeadFinder returns live business profiles: name, website, phone, address, category, rating and review count.',
        ),
      },
      {
        title: bi("تحقق مباشر", "Verify live"),
        body: bi(
          "يفتح النظام موقع كل منشأة في لحظة البحث — لا لقطة مخزّنة من أشهر مضت — ويتأكد أنها منشأة عاملة قبل إدراجها في النتائج.",
          "The system opens each business website at search time — not a snapshot from months ago — and confirms the firm is active before it appears in results.",
        ),
      },
      {
        title: bi("استخرج البيانات", "Extract the data"),
        body: bi(
          "تُؤخذ بيانات الاتصال من الصفحة الحية التي فُحصت للتو. عُثر عليها اليوم، من مصدر المنشأة نفسها.",
          "Contact data is taken from the live page just checked. Found today, from the business's own source.",
        ),
      },
    ] as const,
  },

  useCases: {
    eyebrow: bi("لمن صُمم", "Who it serves"),
    heading: bi(
      "لكل من يبيع للمنشآت ذات الحضور المحلي.",
      "For those who sell to businesses with a local footprint.",
    ),
    items: [
      {
        title: bi("الوكالات والمستقلون", "Agencies & freelancers"),
        body: bi(
          "ابنِ قائمة عملاء محتملين جديدة لمجال أو مدينة دون اشتراك بيانات تفتحه مرة واحدة.",
          "Assemble a fresh prospect set for a new niche or city without a data subscription you barely open.",
        ),
      },
      {
        title: bi("الأنشطة الخدمية المحلية", "Local service firms"),
        body: bi(
          "اعثر على منشآت في منطقتك للشراكة أو البيع، مؤكَّد أنها عاملة اليوم.",
          "Locate firms in your area to partner with or sell to, confirmed open as of today.",
        ),
      },
      {
        title: bi("التوظيف والاستقطاب", "Recruiters & staffing"),
        body: bi(
          "ابحث بالفئة والموقع، ثم احصل على طريق موثّق للوصول إلى الجهة المناسبة في كل منشأة.",
          "Search by category and place, then obtain a verified path to the right contact at each firm.",
        ),
      },
    ] as const,
  },

  pricing: {
    eyebrow: bi("الاشتراك والاعتمادات", "Plans & credits"),
    heading: bi(
      "اشتراك شهري. اشحن عند الحاجة.",
      "Monthly Subscription. Top up when you need more.",
    ),
    subheading: bi(
      "اشترك شهرياً وابدأ بإحدى خططنا (الاعتمادات مشمولة).\nنفدت الاعتمادات؟ اشترِ المزيد بـ ٠٫٠٦٠ ر.ع. لكل اعتماد — مع استمرار اشتراكك.",
      "Subscribe monthly and start with one of our plans (credits included).\nOut of credits? Buy more at 0.060 OMR each — while your subscription continues.",
    ),
    note: bi(
      "أرقام العملاء المحتملين تقريبية وتختلف حسب المجال والموقع. الاعتمادات تُستهلك عند تشغيل البحث.",
      "Lead estimates are approximate and vary by niche and location. Credits are used when a search runs.",
    ),
    mostPopular: bi("الأكثر اختياراً", "Most popular"),
    tierScout: {
      name: bi("كشّاف", "Scout"),
      price: bi("١٠ ر.ع.", "10 OMR"),
      cadence: bi("/شهر", "/mo"),
      blurb: bi(
        "١٠٠ اعتماد مشمول",
        "100 credits included",
      ),
      features: [
        bi("٤٠٠ عميل محتمل تقريباً", "400 leads approx"),
        bi("تحقق مباشر من الموقع وبريد موثّق", "Live-site check and verified email"),
        bi("عمليات بحث وقوائم محفوظة", "Saved searches and lists"),
        bi("دعم عبر البريد", "Email support"),
        bi(
          "اعتمادات إضافية بـ ٠٫٠٦٠ ر.ع. لكل اعتماد",
          "Extra credits at 0.060 OMR each",
        ),
      ] as const,
      cta: bi("اشترك في الكشّاف", "Start with Scout"),
    },
    tierCaptain: {
      name: bi("قبطان", "Captain"),
      price: bi("٣٠ ر.ع.", "30 OMR"),
      cadence: bi("/شهر", "/mo"),
      blurb: bi(
        "٢٥٠ اعتماداً مشمولاً + قناة تواصل بالذكاء الاصطناعي",
        "250 credits included + AI-powered Communication Channel",
      ),
      features: [
        bi("١٠٠٠ عميل محتمل تقريباً", "1000 leads approx"),
        bi("تحقق مباشر من الموقع وبريد موثّق", "Live-site check and verified email"),
        bi("عمليات بحث وقوائم محفوظة", "Saved searches and lists"),
        bi(
          "قناة تواصل بالذكاء الاصطناعي\n(البريد — واتساب — إنستغرام)",
          "AI-powered Communication Channel\n(email - whatsapp - instagram)",
        ),
        bi("٣ قنوات", "3 channels"),
        bi("الرد على التعليقات", "Reply to comments"),
        bi(
          "فهم الصور والملاحظات الصوتية والمستندات",
          "Image, voice-note & document understanding",
        ),
        bi("حجز مواعيد بالذكاء الاصطناعي", "AI appointment booking"),
        bi("بحث ويب لحظي", "Real-time web search"),
        bi("٣ مقاعد للفريق · جهات غير محدودة", "3 team seats · unlimited contacts"),
        bi(
          "حملات غير محدودة (واردة وصادرة) ومتابعات تلقائية",
          "Unlimited campaigns (in & out) · automatic follow-ups",
        ),
        bi("٥٠ ردّاً ذكياً لكل محادثة", "50 AI responses / chat"),
        bi("Webhooks · سياق حملة ٥٠ ألف", "Webhooks · 50K campaign context"),
        bi(
          "اعتمادات إضافية بـ ٠٫٠٦٠ ر.ع. لكل اعتماد",
          "Extra credits at 0.060 OMR each",
        ),
      ] as const,
      cta: bi("اشترك في القبطان", "Start with Captain"),
    },
  },

  guarantee: {
    eyebrow: bi(
      "قناة تواصل بالذكاء الاصطناعي",
      "AI-powered Communication Channel",
    ),
    channels: bi(
      "(البريد — واتساب — إنستغرام)",
      "(email - whatsapp - instagram)",
    ),
    heading: bi(
      "نرسم لك المسار. وأنت تُبحر.",
      "We chart the course. You make the crossing.",
    ),
    points: [
      {
        title: bi("عملاء محتملون موثّقون", "Verified prospects"),
        body: bi(
          "LeadFinder يبحث بالمجال والموقع ويتحقق من الموقع الحي — فتعرف أن المنشأة عاملة ولديها وسيلة اتصال حقيقية.",
          "LeadFinder searches by niche and location and checks the live site — so you know the business is active and has a real contact path.",
        ),
      },
      {
        title: bi("من القائمة إلى المحادثة", "From list to conversation"),
        body: bi(
          "مع خطة القبطان، قناة التواصل بالذكاء الاصطناعي تحوّل جهات الاتصال إلى محادثات: ردود فورية، تأهيل، وحجز مواعيد.",
          "On Captain, the AI-powered Communication Channel turns contacts into conversations: instant replies, qualification, and appointment booking.",
        ),
      },
      {
        title: bi("مسار واحد للنمو", "One path to growth"),
        body: bi(
          "ابحث وثبّت القائمة في LeadFinder، ثم رد واحجز عبر قناة التواصل بالذكاء الاصطناعي — دون التبديل بين أدوات متفرقة.",
          "Search and lock your list in LeadFinder, then reply and book through your AI-powered communication channel — without juggling separate tools.",
        ),
      },
    ] as const,
  },

  faq: {
    heading: bi("أسئلة شائعة.", "Frequently asked."),
    items: [
      [
        bi("من أين تأتي بيانات المنشآت؟", "Where does business data come from?"),
        bi(
          "يبحث LeadFinder في قوائم المنشآت المحلية الحية بالمجال والموقع: الاسم، الموقع، الهاتف، العنوان، الفئة، التقييم وعدد المراجعات. كل بحث يجري عند الضغط على الزر، فتعكس النتائج ما هو قائم الآن.",
          "LeadFinder searches live local business listings by niche and location: name, website, phone, address, category, rating and review count. Every search runs when you press the button, so results reflect what stands now.",
        ),
      ],
      [
        bi("هل البريد الإلكتروني موثّق فعلاً؟", "Are emails truly verified?"),
        bi(
          "نعم. يفتح النظام موقع كل منشأة لحظة البحث ويستخرج بريد التواصل من الصفحة المنشور عليها. لا قوائم مشتراة، وتعرف من أي صفحة حية جاء كل بريد.",
          "Yes. The system opens each business website at search time and takes the contact email from the page where it is published. No purchased lists — and you know which live page each address came from.",
        ),
      ],
      [
        bi(
          "ماذا لو كان الموقع متوقفاً أو أُغلقت المنشأة؟",
          "What if the site is down or the business closed?",
        ),
        bi(
          "عندها لا تظهر في قائمتك. لا نُظهر إلا المنشآت ذات الموقع الحي القابل للوصول في لحظة البحث.",
          "Then it does not appear on your list. We only surface businesses whose website is live and reachable at search time.",
        ),
      ],
      [
        bi("هل يعمل خارج سلطنة عُمان؟", "Does it work outside Oman?"),
        bi(
          "يعمل في معظم الدول. تتفاوت التغطية وكثافة النتائج؛ جرّب موقعك المستهدف أولاً — في عُمان أو الخليج أو أبعد.",
          "It works in most countries. Coverage and density vary; try your target location first — in Oman, the GCC, or further afield.",
        ),
      ],
      [
        bi("أين تُحفظ نتائجي؟", "Where are my results stored?"),
        bi(
          "داخل حسابك في LeadFinder. كل بحث محفوظ بنتائجه، ويمكنك تمييز من يهمك ضمن قوائم تبقى ملكك.",
          "Inside your LeadFinder account. Every search is saved with its results, and you can star what matters into lists that remain yours.",
        ),
      ],
      [
        bi("كيف يعمل التسعير والاعتمادات؟", "How do pricing and credits work?"),
        bi(
          "خطتان شهريتان: الكشّاف بـ ١٠ ر.ع. (١٠٠ اعتماد ≈ ٤٠٠ عميل محتمل، مع دعم البريد) والقبطان بـ ٣٠ ر.ع. (٢٥٠ اعتماداً ≈ ١٠٠٠ عميل محتمل، مع قناة تواصل بالذكاء الاصطناعي). الاعتمادات مشمولة مع الخطة. نفدت؟ اشترِ المزيد بـ ٠٫٠٦٠ ر.ع. لكل اعتماد مع استمرار الاشتراك الشهري.",
          "Two monthly plans: Scout at 10 OMR (100 credits ≈ 400 leads, with email support) and Captain at 30 OMR (250 credits ≈ 1,000 leads, plus AI-powered Communication Channel). Credits are included with your plan. Out of credits? Buy more at 0.060 OMR each while the monthly subscription continues.",
        ),
      ],
    ] as const,
  },

  finalCta: {
    headline: bi(
      "نعبر محيطات البيانات، لتصل إلى الفرصة.",
      "Cross oceans of data. Arrive at the client.",
    ),
    subhead: bi(
      "اختر الكشّاف أو القبطان. ابدأ باعتمادات مشمولة في خطتك الشهرية، واشترِ المزيد عند الحاجة — أو أضف قناة تواصل بالذكاء الاصطناعي مع القبطان للتواصل بعد العثور على العملاء المحتملين.",
      "Choose Scout or Captain. Start with credits included in your monthly plan, buy more when you need them — or add AI-powered Communication Channel on Captain to reach prospects after you find them.",
    ),
    cta: bi("عرض الخطط", "See plans"),
    trust1: bi(
      "اشتراك شهري باعتمادات مشمولة",
      "Monthly plan with credits included",
    ),
    trust2: bi(
      "اعتمادات إضافية بـ ٠٫٠٦٠ ر.ع.",
      "Extra credits at 0.060 OMR",
    ),
    trust3: bi("خطط بـ ١٠ و ٣٠ ر.ع./شهر", "Plans at 10 and 30 OMR/mo"),
  },

  footer: {
    tagline: bi(
      "بوصلتك الرقمية نحو عملائك المحتملين.",
      "Your digital compass towards your prospects.",
    ),
    product: bi("المنتج", "Product"),
    company: bi("الشركة", "Company"),
    legal: bi("قانوني", "Legal"),
    contact: bi("تواصل", "Contact"),
    terms: bi("الشروط", "Terms"),
    privacy: bi("الخصوصية", "Privacy Policy"),
    copyright: bi(
      "© 2026 LeadFinder. جميع الحقوق محفوظة.",
      "© 2026 LeadFinder. All rights reserved.",
    ),
    poweredBy: bi(
      "قناة تواصل بالذكاء الاصطناعي مدعومة من",
      "AI-powered Communication Channel Powered by",
    ),
    poweredByChannels: bi(
      "(البريد — واتساب — إنستغرام)",
      "(email - whatsapp - instagram)",
    ),
    productOf: bi("منتج من", "Product of"),
    productOfName: bi("Dynamic Business Solution — DBS.om", "Dynamic Business Solution — DBS.om"),
  },

  chrome: {
    whatsAppFab: bi("راسلنا", "Message us"),
    whatsAppAria: bi("راسلنا على واتساب", "Message us on WhatsApp"),
    getStarted: bi("عرض الخطط", "See plans"),
  },

  contact: {
    title: bi(
      "تواصل مع LeadFinder — واتساب أو بريد | leadfinder.om",
      "Contact LeadFinder — WhatsApp or email | leadfinder.om",
    ),
    meta: bi(
      "تواصل مع فريق LeadFinder عبر واتساب أو البريد. أسئلة الخطط والتغطية في عُمان والخليج مرحّب بها.",
      "Reach the LeadFinder team on WhatsApp or email. Questions about plans and coverage in Oman and the GCC are welcome.",
    ),
    eyebrow: bi("تواصل", "Contact"),
    h1a: bi("نسمعك.", "We are listening."),
    h1b: bi("اختر قناتك.", "Choose your channel."),
    intro: bi(
      "سواء أردت تجربة مجال تعرفه في مسقط أو الخليج، أو سؤالاً عن الخطط والاعتمادات — راسلنا على واتساب أو بالبريد.",
      "Whether you want to try a niche you know in Muscat or the GCC, or ask about plans and credits — message us on WhatsApp or by email.",
    ),
    waCta: bi("رسالة واتساب", "WhatsApp message"),
    emailCtaPrefix: bi("بريد", "Email"),
    pickChannel: bi("قنوات التواصل", "Ways to reach us"),
    threeWays: bi("ثلاث طرق واضحة", "Three clear paths"),
    waTitle: bi("واتساب", "WhatsApp"),
    waBody: bi(
      "للأسئلة السريعة عن الخطط والتغطية في سوقك. نرد بأقرب فرصة.",
      "For quick questions on plans and coverage in your market. We reply as soon as we can.",
    ),
    emailTitle: bi("البريد الإلكتروني", "Email"),
    emailBody: bi(
      "للتفاصيل الأطول: الدعم، الفوترة، الشراكات. عنوان واحد يخدم الفريق كله.",
      "For longer detail: support, billing, partnerships. One address reaches the whole team.",
    ),
    appTitle: bi("التطبيق", "The app"),
    appBody: bi(
      "جاهز لتجربة بحث حي؟ اختر خطة وابدأ بمجال ومدينة تعرفهما.",
      "Ready for a live search? Pick a plan and start with a niche and city you know.",
    ),
    expect: bi("ما يمكن توقعه", "What to expect"),
    expectH2: bi("رد واضح. فريق حقيقي.", "A clear reply. A real team."),
    expectItems: [
      {
        h: bi("واتساب للأسئلة السريعة", "WhatsApp for quick questions"),
        b: bi(
          "مناسب للأسئلة عن الخطط والتغطية في مجالك ومدينتك.",
          "Best for questions about plans and whether our coverage fits your niche and city.",
        ),
      },
      {
        h: bi("البريد للتفاصيل", "Email for detail"),
        b: bi(
          "أسئلة أطول أو فوترة أو شراكة — أرسلها إلى العنوان نفسه.",
          "Longer questions, billing or partnership — send them to the same address.",
        ),
      },
      {
        h: bi("يوم عمل على البريد", "One business day on email"),
        b: bi(
          "نهدف للرد خلال يوم عمل على الرسائل الواردة.",
          "We aim to reply within one business day on inbound mail.",
        ),
      },
      {
        h: bi("جرّب بنفسك", "Try it yourself"),
        b: bi(
          "إن كنت مستعداً، اختر خطة وابحث في سوق تعرفه جيداً.",
          "If you are ready, pick a plan and search a market you know well.",
        ),
      },
    ] as const,
    company: bi("الشركة", "Company"),
    whoYouReach: bi("من تصل إليه", "Who you are reaching"),
    legalName: bi("الاسم القانوني", "Legal name"),
    jurisdiction: bi("الاختصاص", "Jurisdiction"),
    emailLabel: bi("البريد", "Email"),
    bottomH2a: bi("انتهيت؟", "Ready?"),
    bottomH2b: bi("ابدأ البحث.", "Start searching."),
    bottomBody: bi(
      "اختر الكشّاف أو القبطان، أو راسلنا على واتساب إن فضّلت الحديث أولاً.",
      "Choose Scout or Captain, or message us on WhatsApp if you prefer to talk first.",
    ),
  },

    pricingPage: {
    title: bi(
      "أسعار LeadFinder — الكشّاف والقبطان | leadfinder.om",
      "LeadFinder pricing — Scout & Captain | leadfinder.om",
    ),
    meta: bi(
      "اشتراك شهري على LeadFinder: الكشّاف بـ ١٠ ر.ع. (١٠٠ اعتماد) والقبطان بـ ٣٠ ر.ع. (٢٥٠ اعتماداً + قناة تواصل بالذكاء الاصطناعي). اعتمادات إضافية بـ ٠٫٠٦٠ ر.ع.",
      "LeadFinder monthly plans: Scout at 10 OMR (100 credits) and Captain at 30 OMR (250 credits + AI-powered Communication Channel). Extra credits at 0.060 OMR.",
    ),
    sectionEyebrow: bi("ما تحصل عليه", "What you get"),
    sectionTitle: bi("من المجال والمكان", "From niche and place"),
    sectionAccent: bi("إلى بريد موثّق", "to a verified email"),
    sectionSub: bi(
      "اشترك شهرياً وابدأ بإحدى خططنا (الاعتمادات مشمولة).\nنفدت الاعتمادات؟ اشترِ المزيد بـ ٠٫٠٦٠ ر.ع. لكل اعتماد.",
      "Subscribe monthly and start with one of our plans (credits included).\nOut of credits? Buy more at 0.060 OMR each.",
    ),
    includedLabel: bi("مشمول", "Included"),
    includedHeading: bi(
      "عملاء محليون، موثّقون من الموقع.",
      "Local leads, verified on-site.",
    ),
    included: [
      {
        t: bi("التحقق المباشر من الموقع", "Live-site verification"),
        b: bi(
          "كل بحث يفتح موقع المنشأة في لحظتها — لا لقطة مخزّنة ولا قائمة مشتراة.",
          "Every search opens the business website at that moment — not a cached snapshot or a purchased list.",
        ),
      },
      {
        t: bi("بريد إلكتروني موثّق", "Verified emails"),
        b: bi(
          "يُؤخذ البريد من الصفحة الحيّة لحظة البحث، مع المنشآت النشطة فقط.",
          "Contact emails come from the live page at search time, with active businesses only.",
        ),
      },
      {
        t: bi("اعتمادات مشمولة مع الخطة", "Credits included with the plan"),
        b: bi(
          "الكشّاف: ١٠٠ اعتماد. القبطان: ٢٥٠ اعتماداً — مع اشتراكك الشهري.",
          "Scout: 100 credits. Captain: 250 credits — with your monthly subscription.",
        ),
      },
      {
        t: bi("عمليات بحث وقوائم محفوظة", "Saved searches & lists"),
        b: bi(
          "يُحفظ كل بحث مع نتائجه. ضع نجمة على ما يهم وابنِ قوائم تبقى لك.",
          "Every search is stored with its results. Star what matters and build lists that stay yours.",
        ),
      },
    ] as const,
    modelLabel: bi("كيف تتوسع", "How you scale"),
    modelHeading: bi("خطة واضحة. توسّع عند الحاجة.", "A clear plan. Scale when needed."),
    scale: [
      {
        t: bi("كشّاف — ١٠ ر.ع./شهر", "Scout — 10 OMR/mo"),
        b: bi(
          "١٠٠ اعتماد ≈ ٤٠٠ عميل محتمل، مع دعم البريد.",
          "100 credits ≈ 400 leads, with email support.",
        ),
      },
      {
        t: bi("قبطان — ٣٠ ر.ع./شهر", "Captain — 30 OMR/mo"),
        b: bi(
          "٢٥٠ اعتماداً ≈ ١٠٠٠ عميل محتمل، مع قناة تواصل بالذكاء الاصطناعي.",
          "250 credits ≈ 1,000 leads, plus AI-powered Communication Channel.",
        ),
      },
      {
        t: bi("اعتمادات إضافية", "Extra credits"),
        b: bi(
          "نفدت اعتمادات خطتك؟ ٠٫٠٦٠ ر.ع. لكل اعتماد، مع استمرار الاشتراك.",
          "Out of plan credits? 0.060 OMR per credit, while the subscription continues.",
        ),
      },
      {
        t: bi("جرّب سوقك أولاً", "Try your market first"),
        b: bi(
          "التغطية تختلف حسب المنطقة — ابدأ بمجال ومدينة تعرفهما جيداً.",
          "Coverage varies by region — start with a niche and city you know well.",
        ),
      },
    ] as const,
  },

  legalShell: {
    eyebrow: bi("قانوني", "Legal"),
    lastUpdated: bi("آخر تحديث:", "Last updated:"),
    effectiveDate: bi("تاريخ السريان:", "Effective Date:"),
    tocMobile: bi("جدول المحتويات", "Table of contents"),
    onThisPage: bi("في هذه الصفحة", "On this page"),
    questionsTitle: bi(
      "أسئلة حول هذا المستند؟",
      "Questions about this document?",
    ),
    questionsBody: bi("تواصل مع فريقنا على", "Reach our team at"),
    questionsBodyEnd: bi(
      "وسنرد خلال يومي عمل.",
      "and we will respond within two business days.",
    ),
    emailUs: bi("راسلنا", "Email us"),
    inShort: bi("باختصار:", "In short:"),
  },

  termsPage: {
    title: bi("شروط الخدمة", "Terms of Service"),
    metaTitle: bi(
      "شروط الخدمة · LeadFinder | leadfinder.om",
      "Terms of Service · LeadFinder | leadfinder.om",
    ),
    meta: bi(
      "الشروط التي تحكم استخدامك لـ LeadFinder (leadfinder.om) من Dynamic Business Solution. سارية من 1 يناير 2026.",
      "Terms governing use of LeadFinder (leadfinder.om) by Dynamic Business Solution. Effective 1 January 2026.",
    ),
  },

  privacyPage: {
    title: bi("سياسة الخصوصية", "Privacy Policy"),
    metaTitle: bi(
      "سياسة الخصوصية · LeadFinder | leadfinder.om",
      "Privacy Policy · LeadFinder | leadfinder.om",
    ),
    meta: bi(
      "كيف يجمع LeadFinder (leadfinder.om) من Dynamic Business Solution البيانات الشخصية ويستخدمها ويحميها. سارية من 1 يناير 2026.",
      "How LeadFinder (leadfinder.om) by Dynamic Business Solution collects, uses, and protects personal data. Effective 1 January 2026.",
    ),
  },
} as const;

export type Dict = typeof dict;
export type _AssertBi<T extends Bi> = T;
