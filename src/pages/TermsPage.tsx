import LegalPageShell, {
  LegalSection,
  LegalSub,
  LegalP,
  LegalUl,
  LegalCallout,
} from "../lib/LegalPageShell";
import brand from "../brand.config";
import { bi } from "../i18n/types";
import { useT } from "../i18n/useT";
import { useLanguage } from "../i18n/LanguageContext";
import { dict } from "../i18n/dictionary";

const CANONICAL = `${brand.siteUrl}/terms/`;

const TOC = [
  {
    id: "acceptance",
    label: bi("قبول الشروط", "Acceptance of Terms"),
  },
  { id: "service", label: bi("الخدمة", "The Service") },
  {
    id: "accounts",
    label: bi("الحسابات والأهلية", "Accounts & Eligibility"),
  },
  {
    id: "acceptable-use",
    label: bi("الاستخدام المقبول", "Acceptable Use"),
  },
  {
    id: "billing",
    label: bi("الخطط والتجربة والدفع", "Plans, Trial & Payment"),
  },
  {
    id: "customer-data",
    label: bi("بياناتك والملكية", "Your Data & Ownership"),
  },
  {
    id: "ip",
    label: bi("الملكية الفكرية", "Intellectual Property"),
  },
  {
    id: "third-parties",
    label: bi("خدمات الأطراف الثالثة", "Third-Party Services"),
  },
  { id: "ai", label: bi("مخرجات الذكاء الاصطناعي", "AI Outputs") },
  {
    id: "warranty",
    label: bi("إخلاء المسؤولية عن الضمانات", "Disclaimer of Warranties"),
  },
  {
    id: "liability",
    label: bi("تحديد المسؤولية", "Limitation of Liability"),
  },
  { id: "indemnity", label: bi("التعويض", "Indemnification") },
  {
    id: "termination",
    label: bi("المدة والإنهاء", "Term & Termination"),
  },
  {
    id: "changes",
    label: bi("تعديل هذه الشروط", "Changes to These Terms"),
  },
  {
    id: "governing-law",
    label: bi("القانون الحاكم", "Governing Law"),
  },
  { id: "general", label: bi("أحكام عامة", "General") },
  { id: "contact", label: bi("التواصل", "Contact") },
] as const;

function lastUpdatedLabel(lang: "ar" | "en") {
  return lang === "ar" ? "1 يناير 2026" : brand.legalEffectiveDate;
}

function hostingSummary(lang: "ar" | "en") {
  if (lang === "ar") {
    return "تُستضاف الخدمة وبياناتك على خوادم مخصّصة آمنة وبنية سحابية داخل الاتحاد الأوروبي (ألمانيا، ومنطقة الاتحاد الأوروبي لمزوّدنا السحابي). تُشفَّر البيانات أثناء النقل عبر TLS، وتُشفَّر بيانات الاعتماد والرموز الحساسة للحساب أثناء التخزين.";
  }
  return brand.infrastructure.hostingSummary;
}

export default function TermsPage() {
  const t = useT();
  const { lang } = useLanguage();
  const date = lastUpdatedLabel(lang);

  return (
    <LegalPageShell
      title={t(dict.termsPage.title)}
      lastUpdated={date}
      metaTitle={t(dict.termsPage.metaTitle)}
      metaDescription={t(dict.termsPage.meta)}
      canonical={CANONICAL}
      toc={TOC.map((item) => ({ id: item.id, label: t(item.label) }))}
      intro={
        <>
          <p>
            {t(
              bi(
                `تحكم شروط الخدمة هذه («الشروط») وصولك إلى واستخدامك لـ ${brand.brandName}، وهي خدمة للبحث عن عملاء محتملين من المنشآت المحلية تعمل مباشرة، وتشغّلها ${brand.legalEntity} («نحن»، «لنا»، «خاصتنا»)، ومتاحة على ${brand.domain}.`,
                `These Terms of Service (the “Terms”) govern your access to and use of ${brand.brandName}, a live local-business lead generation service operated by ${brand.legalEntity} (“we”, “us”, “our”), available at ${brand.domain}.`,
              ),
            )}
          </p>
          <p>
            {t(
              bi(
                "بإنشاء حساب، أو شراء خطة، أو شراء استخدام، أو استخدام الخدمة بأي شكل آخر، فإنك توافق على الالتزام بهذه الشروط. إن لم توافق، فلا تستخدم الخدمة.",
                "By creating an account, purchasing a plan, purchasing usage, or otherwise using the service, you agree to be bound by these Terms. If you do not agree, do not use the service.",
              ),
            )}
          </p>
        </>
      }
    >
      <LegalSection
        id="acceptance"
        number={1}
        title={t(TOC[0].label)}
      >
        <LegalP>
          {t(
            bi(
              `تشكّل هذه الشروط اتفاقية ملزمة بينك («العميل»، «أنت»، «لك») وبين ${brand.legalEntity}. إذا قبلت هذه الشروط نيابة عن شركة أو كيان قانوني آخر، فإنك تقر بأن لديك صلاحية إلزام ذلك الكيان، ويشير مصطلح «العميل» إلى ذلك الكيان.`,
              `These Terms form a binding agreement between you (“Customer”, “you”, “your”) and ${brand.legalEntity}. If you accept these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity, and “Customer” refers to that entity.`,
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              `«تاريخ السريان» لهذه الشروط هو ${date}، أو تاريخ قبولك لها لأول مرة، أيهما لاحق.`,
              `The “Effective Date” of these Terms is ${brand.legalEffectiveDate}, or the date you first accepted them, whichever is later.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="service" number={2} title={t(TOC[1].label)}>
        <LegalP>
          {t(
            bi(
              `يساعدك ${brand.brandName} في العثور على منشآت محلية حسب المجال والموقع، ويتحقق من أن موقع كل منشأة حيّ لحظة البحث، ويعيد بيانات الاتصال المنشورة على تلك الصفحات. الخدمة تجد وتتحقق؛ وهي لا تتواصل مع العملاء المحتملين نيابةً عنك.`,
              `${brand.brandName} helps you find local businesses by niche and location, verifies that each business’s website is live at the moment of search, and returns contact details published on those pages. The service finds and verifies; it does not contact leads on your behalf.`,
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              "تتطور الخدمة مع الوقت. قد نضيف ميزات أو نغيّرها أو نزيلها، وقد نحدّث هذه الشروط وفقاً لذلك كما هو موضّح في قسم «تعديل هذه الشروط».",
              "The service evolves over time. We may add, change or remove features, and we may update these Terms accordingly as described in the “Changes to These Terms” section.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="accounts" number={3} title={t(TOC[2].label)}>
        <LegalP>
          {t(
            bi(
              "الخدمة مخصّصة للاستخدام التجاري. باستخدامك لها تؤكد أنك تبلغ 18 عاماً على الأقل وأنك تستخدم الخدمة في إطار عمل أو مهنة أو نشاط تجاري.",
              "The service is intended for business use. By using it you confirm that you are at least 18 years old and are using the service in connection with a business, profession or trade.",
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              `يجب أن تقدّم معلومات دقيقة وحديثة وكاملة عند التسجيل وأن تبقيها محدّثة. أنت مسؤول عن حماية بيانات اعتماد حسابك وعن كل نشاط يتم عبر حسابك. أبلغنا فوراً على ${brand.supportEmail} إذا اعتقدت أن بيانات اعتمادك قد تعرضت للاختراق.`,
              `You must provide accurate, current and complete information when you register and keep it up to date. You are responsible for safeguarding your account credentials and for all activity under your account. Notify us immediately at ${brand.supportEmail} if you believe your credentials have been compromised.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="acceptable-use" number={4} title={t(TOC[3].label)}>
        <LegalP>
          {t(
            bi(
              "توافق على عدم استخدام الخدمة من أجل:",
              "You agree not to use the service to:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>
            {t(
              bi(
                "إرسال رسائل جماعية غير مرغوب فيها أو رسائل مزعجة، أو مراسلة مستلمين لم يوافقوا حيث يلزم الحصول على موافقة",
                "Send unsolicited bulk messages or spam, or message recipients who have not opted in where opt-in is required",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "مضايقة أي شخص أو تهديده أو تشويه سمعته أو الإساءة إليه أو ملاحقته",
                "Harass, threaten, defame, abuse or stalk any person",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "توزيع محتوى غير قانوني، أو محتوى ينتهك حقوق الغير، أو محتوى يحضّ على العنف أو الكراهية",
                "Distribute illegal content, content that infringes third-party rights, or content that incites violence or hatred",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "توزيع برمجيات خبيثة أو روابط تصيّد أو أي رموز ضارة أخرى",
                "Distribute malware, phishing links or other malicious code",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "انتهاك أي قانون أو لائحة تنطبق على نشاطك أو على مستلمي رسائلك",
                "Violate any law or regulation that applies to your business or your message recipients",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "الهندسة العكسية أو فك التجميع أو محاولة استخراج الشيفرة المصدرية للخدمة، إلا بالقدر الذي يسمح به القانون الإلزامي",
                "Reverse engineer, decompile or attempt to derive the source code of the service, except to the extent permitted by mandatory law",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "انتهاك شروط أي منصة تتصل بها الخدمة، أو أي قانون اتصالات تسويقية معمول به (مثل قواعد مكافحة الرسائل المزعجة وموافقة المراسلة في ولايتك القضائية)",
                "Violate the terms of any platform the service connects to, or any applicable marketing-communications law (for example anti-spam and messaging-consent rules in your jurisdiction)",
              ),
            )}
          </li>
          <li>
            {t(
              bi(
                "تحريف هوية مرسل الرسالة، بما في ذلك انتحال صفتنا أو صفة أي طرف ثالث",
                "Misrepresent the identity of a message sender, including by impersonating us or any third party",
              ),
            )}
          </li>
        </LegalUl>
        <LegalP>
          {t(
            bi(
              "قد نحقق في المخالفات المشتبه بها وقد نعلّق أو ننهي الوصول عند المخالفات الجسيمة أو المتكررة. وحيثما كان ذلك معقولاً، سنمنحك إشعاراً وفرصة للتصحيح.",
              "We may investigate suspected violations and may suspend or terminate access for serious or repeated breaches. Where reasonable, we will give you notice and an opportunity to cure.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="billing" number={5} title={t(TOC[4].label)}>
        <LegalP>
          {t(
            bi(
              "تُوصف الخطط والأسعار وأي شروط لتجربة مجانية في صفحة الأسعار وعند التسجيل. الأسعار لا تشمل ضريبة القيمة المضافة وما يعادلها من الضرائب غير المباشرة ما لم يُذكر خلاف ذلك.",
              "Plans, prices and any free-trial terms are described on our pricing page and at sign-up. Prices are exclusive of VAT and equivalent indirect taxes unless stated otherwise.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(bi("التجربة والتجديد", "Trial and renewal"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "إذا قُدّمت تجربة مجانية ولم تُلغَ قبل انتهائها، يتحوّل حسابك إلى الخطة المدفوعة التي اخترتها عند التسجيل، ويُخصم من وسيلة الدفع لديك بشكل متكرر. تتجدد الاشتراكات تلقائياً في نهاية كل فترة فوترة حتى الإلغاء. يمكنك الإلغاء في أي وقت من لوحة التحكم؛ ويسري الإلغاء في نهاية فترة الفوترة الحالية.",
              "If a free trial is offered and you do not cancel before it ends, your account will convert to the paid plan you selected at sign-up and your payment method will be charged on a recurring basis. Subscriptions renew automatically at the end of each billing period until cancelled. You can cancel at any time from your dashboard; cancellation takes effect at the end of the current billing period.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(bi("الدفع والاسترداد", "Payment and refunds"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "تُعالَج المدفوعات عبر معالج الدفع لدينا. تُفوتر الاشتراكات المتكررة مقدماً لكل فترة فوترة. تخضع عمليات الاسترداد لقانون حماية المستهلك المعمول به ولسياسة الاسترداد المنشورة لدينا. إذا فشل خصم، قد نعيد المحاولة وقد نعلّق الخدمة بعد مهلة معقولة إذا بقي الدفع معلّقاً.",
              "Payments are handled by our payment processor. Recurring subscriptions are billed in advance for each billing period. Refunds are governed by applicable consumer-protection law and our published refund policy. If a charge fails, we may retry and may suspend the service after a reasonable grace period if payment remains outstanding.",
            ),
          )}
        </LegalP>
        <LegalSub>{t(bi("تغيير الأسعار", "Price changes"))}</LegalSub>
        <LegalP>
          {t(
            bi(
              "قد نغيّر أسعارنا. سنمنحك إشعاراً مسبقاً معقولاً (بالبريد أو داخل التطبيق) قبل سريان تغيير السعر على اشتراكك. يمكنك الإلغاء قبل سريان التغيير لتجنّب السعر الجديد.",
              "We may change our prices. We will give you reasonable advance notice (by email or in-app) before a price change applies to your subscription. You may cancel before the change takes effect to avoid the new price.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="customer-data" number={6} title={t(TOC[5].label)}>
        <LegalP>
          {t(
            bi(
              "تحتفظ بجميع الحقوق في المحتوى الذي ترفعه أنت أو فريقك أو مستخدموك النهائيون إلى الخدمة أو تولّدونه داخلها، بما في ذلك جهات الاتصال ونصوص المحادثات ومحتوى قاعدة المعرفة والإعدادات («بيانات العميل»). نعالج بيانات العميل فقط لتقديم الخدمة وتحسينها وفقاً لهذه الشروط وسياسة الخصوصية.",
              "You retain all rights to the content you, your team or your end users upload to or generate within the service, including contacts, conversation transcripts, knowledge-base content and configuration (“Customer Data”). We process Customer Data solely to provide and improve the service in accordance with these Terms and our Privacy Policy.",
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              "يمكنك تصدير بيانات العميل أثناء اشتراكك النشط ولفترة معقولة بعد الإنهاء، وبعدها نحذفها من الأنظمة النشطة في المسار الاعتيادي. راجع سياسة الخصوصية لتفاصيل الاحتفاظ.",
              "You can export your Customer Data while your subscription is active and for a reasonable period after termination, after which we will delete it from active systems in the normal course. See our Privacy Policy for retention details.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" number={7} title={t(TOC[6].label)}>
        <LegalP>
          {t(
            bi(
              "نحتفظ بجميع الحقوق والملكية والمصلحة في الخدمة، بما في ذلك البرمجيات والعلامة التجارية والوثائق. مع التزامك بهذه الشروط ودفع الرسوم المستحقة، نمنحك ترخيصاً محدوداً وغير حصري وغير قابل للتحويل وقابلاً للإلغاء لاستخدام الخدمة في عمليات عملك خلال مدة اشتراكك.",
              "We retain all rights, title and interest in and to the service, including all software, branding and documentation. Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the service for your business operations during your subscription term.",
            ),
          )}
        </LegalP>
        <LegalSub>{t(bi("الملاحظات", "Feedback"))}</LegalSub>
        <LegalP>
          {t(
            bi(
              "إذا قدّمت ملاحظات أو اقتراحات حول الخدمة، فإنك تمنحنا ترخيصاً دائماً وعالمياً وخالياً من الرسوم لاستخدام تلك الملاحظات لتحسين منتجاتنا وخدماتنا.",
              "If you provide feedback or suggestions about the service, you grant us a perpetual, worldwide, royalty-free licence to use that feedback to improve our products and services.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="third-parties" number={8} title={t(TOC[7].label)}>
        <LegalP>
          {t(
            bi(
              "لتقديم الخدمة نعتمد على مزوّدين خارجيين للمراسلة والمدفوعات ومعالجة الذكاء الاصطناعي والاستضافة والوظائف ذات الصلة. يخضع استخدامك للقنوات والتكاملات أيضاً لشروط وسياسات أولئك المزوّدين. قائمة محدّثة بمعالجي البيانات الفرعيين الذين نستخدمهم لمعالجة البيانات الشخصية واردة في سياسة الخصوصية أو متاحة عند الطلب عبرها.",
              "To deliver the service we rely on third-party providers for messaging, payments, AI processing, hosting and related functions. Your use of channels and integrations is also subject to those providers’ own terms and policies. A current list of the sub-processors we use to handle personal data is set out in, or available on request via, our Privacy Policy.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(bi("الاستضافة وموقع البيانات", "Hosting & data location"))}
        </LegalSub>
        <LegalP>{hostingSummary(lang)}</LegalP>
      </LegalSection>

      <LegalSection id="ai" number={9} title={t(TOC[8].label)}>
        <LegalCallout>
          {t(
            bi(
              "المحتوى المُنشأ بالذكاء الاصطناعي غير مضمون من حيث الدقة أو الاكتمال أو الملاءمة. أنت مسؤول عن مراجعة مخرجات الذكاء الاصطناعي قبل الاعتماد عليها.",
              "AI-generated content is not guaranteed to be accurate, complete or appropriate. You are responsible for reviewing AI outputs before relying on them.",
            ),
          )}
        </LegalCallout>
        <LegalP>
          {t(
            bi(
              "لا يقدّم وكيل الذكاء الاصطناعي استشارات قانونية أو طبية أو مالية أو ضريبية أو مهنية منظّمة أخرى، ولا ينبغي الاعتماد على مخرجاته بهذا الوصف. في المعاملات أو القرارات عالية القيمة التي تمس حقوق شخص أو مصالحه الجوهرية، ينبغي الإبقاء على إشراف بشري. وتقبل مخاطر السماح لوكيل الذكاء الاصطناعي بمعالجة المحادثات دون إشراف بشري.",
              "The AI agent does not provide legal, medical, financial, tax or other regulated professional advice, and its outputs should not be relied upon as such. For high-value transactions or decisions that materially affect a person’s rights or significant interests, you should keep a human in the loop. You accept the risk of allowing the AI agent to handle conversations without human supervision.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="warranty" number={10} title={t(TOC[9].label)}>
        <LegalP>
          {t(
            bi(
              "تُقدَّم الخدمة «كما هي» و«حسب التوفر». وإلى أقصى حد يسمح به القانون، نخلي مسؤوليتنا عن جميع الضمانات من أي نوع، صريحة أو ضمنية أو قانونية، بما في ذلك ضمانات القابلية للتسويق والملاءمة لغرض معيّن والملكية وعدم الانتهاك. ولا نضمن أن الخدمة ستكون دون انقطاع أو خالية من الأخطاء أو آمنة.",
              "The service is provided on an “AS IS” and “AS AVAILABLE” basis. To the maximum extent permitted by law, we disclaim all warranties of any kind, whether express, implied or statutory, including warranties of merchantability, fitness for a particular purpose, title and non-infringement. We do not warrant that the service will be uninterrupted, error-free or secure.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="liability" number={11} title={t(TOC[10].label)}>
        <LegalP>
          {t(
            bi(
              "إلى أقصى حد يسمح به القانون، لا تتجاوز مسؤوليتنا الإجمالية الناشئة عن هذه الشروط أو الخدمة أو المرتبطة بهما أكبر المبلغين التاليين: (أ) الرسوم التي دفعتها لنا خلال الاثني عشر شهراً السابقة للحدث الذي نشأ عنه المطالبة، أو (ب) 100 ر.ع.",
              "To the maximum extent permitted by law, our aggregate liability arising out of or related to these Terms or the service will not exceed the greater of (a) the fees you paid to us in the 12 months before the event giving rise to the claim, or (b) 100 OMR.",
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              "إلى أقصى حد يسمح به القانون، لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو تبعية أو خاصة أو عقابية، ولا عن أي خسارة في الأرباح أو الإيرادات أو السمعة أو البيانات أو الفرص التجارية، حتى لو أُبلغنا بإمكانية وقوع تلك الأضرار.",
              "To the maximum extent permitted by law, we will not be liable for any indirect, incidental, consequential, special or punitive damages, or for any loss of profits, revenue, goodwill, data or business opportunity, even if advised of the possibility of such damages.",
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              "لا يستبعد أي شيء في هذه الشروط أو يحدّ من مسؤولية لا يمكن استبعادها أو تقييدها بموجب القانون المعمول به.",
              "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="indemnity" number={12} title={t(TOC[11].label)}>
        <LegalP>
          {t(
            bi(
              "تدافع عنا وتعوّضنا وتحمينا من أي مطالبات أو أضرار أو التزامات أو تكاليف أو نفقات (بما في ذلك أتعاب المحاماة المعقولة) ناشئة عن أو مرتبطة بـ: (أ) استخدامك للخدمة؛ (ب) مخالفتك لهذه الشروط، بما في ذلك قواعد الاستخدام المقبول؛ (ج) تفاعلات مستخدميك النهائيين مع الخدمة؛ (د) المحتوى المُنشأ بالذكاء الاصطناعي الذي تعتمدّه وترسله؛ و(هـ) أي مطالبة بأن بيانات العميل تنتهك حقوق طرف ثالث.",
              "You will defend, indemnify and hold us harmless from and against any claims, damages, liabilities, costs and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the service; (b) your breach of these Terms, including the acceptable-use rules; (c) your end users’ interactions with the service; (d) AI-generated content you approve and send; and (e) any claim that your Customer Data infringes the rights of a third party.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="termination" number={13} title={t(TOC[12].label)}>
        <LegalP>
          {t(
            bi(
              "ما لم يُتفق على خلاف ذلك، تسري الاشتراكات لمدة فترة الفوترة التي تختارها وتتجدد تلقائياً. يمكنك الإلغاء في أي وقت من لوحة التحكم، ويسري ذلك في نهاية فترة الفوترة الحالية.",
              "Unless otherwise agreed, subscriptions run for the billing period you select and renew automatically. You may cancel at any time from your dashboard, with effect at the end of the current billing period.",
            ),
          )}
        </LegalP>
        <LegalP>
          {t(
            bi(
              "قد نعلّق الخدمة أو ننهيها لسبب وجيه إذا تخلّفت عن دفع المبالغ المستحقة بعد إشعار ومهلة، أو خالفت هذه الشروط مادياً ولم تصحّح خلال وقت معقول، أو استخدمت الخدمة بطريقة تعرّضنا لمخاطر قانونية أو تنظيمية. عند الإنهاء ينتهي حقك في الوصول إلى الخدمة؛ وتبقى البنود التي تقتضي طبيعتها البقاء (بما في ذلك الملكية الفكرية والتعويض وتحديد المسؤولية والقانون الحاكم) سارية بعد الإنهاء.",
              "We may suspend or terminate the service for cause if you fail to pay amounts due after notice and a grace period, materially breach these Terms and fail to cure within a reasonable time, or use the service in a way that exposes us to legal or regulatory risk. On termination, your right to access the service ends; clauses that by their nature should survive (including intellectual property, indemnification, limitation of liability and governing law) survive termination.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="changes" number={14} title={t(TOC[13].label)}>
        <LegalP>
          {t(
            bi(
              "قد نحدّث هذه الشروط من وقت لآخر. للتغييرات الجوهرية سنمنح إشعاراً مسبقاً معقولاً بالبريد أو داخل التطبيق قبل سريان التغييرات. للتغييرات غير الجوهرية سننشر الشروط المحدّثة في هذه الصفحة مع تاريخ «آخر تحديث» منقّح. استمرارك في استخدام الخدمة بعد سريان التحديث يُعدّ قبولاً للشروط المحدّثة.",
              "We may update these Terms from time to time. For material changes we will give reasonable advance notice by email or in-app notice before the changes take effect. For non-material changes we will post the updated Terms on this page with a revised “Last updated” date. Your continued use of the service after an update takes effect constitutes acceptance of the updated Terms.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="governing-law" number={15} title={t(TOC[14].label)}>
        <LegalP>
          {t(
            bi(
              `تخضع هذه الشروط لقوانين ${brand.legalJurisdiction}، باستثناء قواعد تنازع القوانين فيها. للمحاكم الواقعة في ${brand.legalJurisdiction} الاختصاص الحصري لأي نزاع ناشئ عن هذه الشروط أو مرتبط بها، إلا حيث يمنحك القانون الإلزامي حق رفع الدعوى في مكان آخر.`,
              `These Terms are governed by the laws of ${brand.legalJurisdiction}, excluding its conflict-of-laws rules. The courts located in ${brand.legalJurisdiction} will have exclusive jurisdiction over any dispute arising out of or relating to these Terms, except where mandatory law gives you the right to bring proceedings elsewhere.`,
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="general" number={16} title={t(TOC[15].label)}>
        <LegalSub>
          {t(bi("الاتفاقية الكاملة", "Entire agreement"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "تشكّل هذه الشروط، مع أي مستندات مدمجة صراحة بالإحالة (مثل سياسة الخصوصية)، الاتفاقية الكاملة بين الطرفين وتحلّ محل جميع الاتفاقات السابقة حول الموضوع نفسه.",
              "These Terms, together with any documents expressly incorporated by reference (such as our Privacy Policy), constitute the entire agreement between the parties and supersede all prior agreements on the same subject.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(bi("قابلية الفصل والتنازل", "Severability & waiver"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "إذا اعتُبر أي بند غير قابل للتنفيذ، تبقى البنود المتبقية نافذة بالكامل. وعدم ممارسة حق لا يُعدّ تنازلاً عنه.",
              "If any provision is held unenforceable, the remaining provisions remain in full force. A failure to exercise a right is not a waiver of that right.",
            ),
          )}
        </LegalP>
        <LegalSub>
          {t(bi("التنازل والقوة القاهرة", "Assignment & force majeure"))}
        </LegalSub>
        <LegalP>
          {t(
            bi(
              "لا يجوز لك التنازل عن هذه الشروط دون موافقتنا الخطية المسبقة؛ ويجوز لنا التنازل عنها في إطار اندماج أو استحواذ أو بيع أصول. ولا يُسأل أي طرف عن أي إخفاق أو تأخير ناتج عن أحداث خارجة عن سيطرته المعقولة.",
              "You may not assign these Terms without our prior written consent; we may assign them in connection with a merger, acquisition or sale of assets. Neither party is liable for any failure or delay caused by events outside its reasonable control.",
            ),
          )}
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" number={17} title={t(TOC[16].label)}>
        <LegalP>
          {t(
            bi(
              "أسئلة حول هذه الشروط؟ تواصل معنا:",
              "Questions about these Terms? Contact us:",
            ),
          )}
        </LegalP>
        <LegalUl>
          <li>{brand.legalEntity}</li>
          <li>
            {lang === "ar" ? "سلطنة عُمان" : brand.legalJurisdiction}
          </li>
          <li>
            {t(bi("البريد:", "Email:"))} {brand.supportEmail}
          </li>
        </LegalUl>
      </LegalSection>
    </LegalPageShell>
  );
}
